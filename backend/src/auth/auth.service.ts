import { Injectable } from '@nestjs/common';
import { AuthBody, CreateUser } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './jwt.strategy';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async login({ authBody }: { authBody: AuthBody }) {
    const { email, password } = authBody;
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      throw new Error("L'utilisateur n'existe pas");
    }

    const isPasswordValid = await this.isPasswordValid({
      password,
      hashedPassword: existingUser.password,
    });

    if (!isPasswordValid) {
      throw new Error('Le mot de passe est invalide');
    }

    return this.authenticateUser({
      userID: existingUser.id,
    });
  }
  //
  async register({ registerBody }: { registerBody: CreateUser }) {
    const { email, firstname, lastname, password } = registerBody;
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error('Un compte existe déjà à cette adresse email');
    }
    const hashedPassword = await this.hashPassword({ password });
    const createdUser = await this.prisma.user.create({
      data: {
        email,
        firstname,
        lastname,
        password: hashedPassword,
      },
    });
    return this.authenticateUser({
      userID: createdUser.id,
    });
  }
  //
  private async hashPassword({ password }: { password: string }) {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  }
  private async isPasswordValid({
    password,
    hashedPassword,
  }: {
    password: string;
    hashedPassword: string;
  }) {
    const isPasswordValid = await compare(password, hashedPassword);
    return isPasswordValid;
  }
  private authenticateUser({ userID }: UserPayload) {
    const payload = { userID };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
