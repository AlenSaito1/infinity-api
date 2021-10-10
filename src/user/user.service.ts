import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './user.schema'

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    public getUser = async (jid: string): Promise<User | null> => {
        return await this.userModel.findOne({ jid }).lean()
    }

    public getUsers = async (): Promise<User[]> => {
        return await this.userModel.find().lean()
    }
}
