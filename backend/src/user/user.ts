export class User {
  constructor(
    private firstname: string,
    private lastname: string,
    private email: string,
    private password: string,
  ) {}

  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
}
