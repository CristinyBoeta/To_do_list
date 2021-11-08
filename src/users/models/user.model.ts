export class UserModel {
    _id: string;
    username: string;
    password: string;
    token: string;
    tokenExpires: Date;
}