import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection  } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserDocument, User } from './users.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectConnection() private readonly connection: Connection,
    ) {}

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.userModel.findOne({ username }).exec();
    }

    async findById(_id: string): Promise<any | undefined> {
        return this.userModel.findById(_id).exec();
    }

    async register(dto: UserDto) {
        const user = new this.userModel(dto);
        user.password = await bcrypt.hash(dto.password, 10);
        await user.save();
    }
}