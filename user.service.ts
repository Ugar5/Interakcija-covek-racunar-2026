import { UserModel } from '../models/user.model';
export class UserService {
    public static USER_KEY = 'users';
    public static ACTIVE_USER_KEY = 'users_active';
  static getUsers(): UserModel[] {
    if (!localStorage.getItem(this.USER_KEY)) {
      localStorage.setItem(
        this.USER_KEY,
        JSON.stringify([
          {
            id: '1',
            name: 'John',
            surname: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            phone: '123-456-7890',
            address: '123 Main St',
            favoriteToyTypes: [],
          },
        ]),
      );
    }
    return JSON.parse(localStorage.getItem(this.USER_KEY)!);
  }
  static findUserByEmail(email: string) {
    const users = this.getUsers()
    const selectedUser =users.find(u=> u.email === email)
    if (!selectedUser) {
      throw new Error('User with this email does not exist');
    }
    return selectedUser;
  }

  static login(email: string, password: string) {
    try {
      const user = this.findUserByEmail(email);
      if (user.password === password) {
        localStorage.setItem(this.ACTIVE_USER_KEY, user.email);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
  static hasAuth(){
    return localStorage.getItem(this.ACTIVE_USER_KEY) !== null;
  }
  static getActiveUser() {
    if(!this.hasAuth())
      throw new Error('No active user');

    return this.findUserByEmail(localStorage.getItem(this.ACTIVE_USER_KEY)!);
  }
  static logout() {
    localStorage.removeItem(this.ACTIVE_USER_KEY);
  }
}
