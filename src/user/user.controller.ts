import { Controller, Param, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:jid')
    async getUser(@Param('jid') jid: string) {
        return await this.userService.getUser(jid)
    }
}
