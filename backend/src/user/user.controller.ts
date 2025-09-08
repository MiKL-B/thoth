import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //localhost:3000/api/users
  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }

  //localhost:3000/api/users/id
  @Get('users/:id')
  getUser(@Param('id', ParseIntPipe) userID: number) {
    console.log('Requested user ID:', userID);
    return this.userService.getUserByID({ userID });
  }

  // http://localhost:3000/api/user
  @Post('user')
  createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }
}
