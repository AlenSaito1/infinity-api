import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class User {
    @Prop({ type: String, unique: true })
    jid?: string

    @Prop({ type: String })
    name?: string

    @Prop({ type: Number, default: 0 })
    exp?: number

    @Prop({ type: Object })
    banReason?: string

    @Prop({ type: Object })
    haigusha?: IHaigusha

    @Prop({ type: Array })
    dex?: string[]

    @Prop({ type: Array, default: [] })
    party?: IPokemon[]

    @Prop({ type: Array, default: [] })
    pc?: IPokemon[]

    @Prop({ type: Object })
    gold?: number

    @Prop({ type: Array, default: [] })
    items?: string[]

    @Prop({ type: Boolean, default: false })
    idle?: boolean

    @Prop({ type: Number, default: 0 })
    bank?: number

    @Prop({ type: String })
    bio?: string

    @Prop({ type: Number, default: 0 })
    quizwins?: number

    @Prop({ type: Boolean, default: false })
    ban?: boolean

    @Prop({ type: Date })
    daily?: Date

    @Prop({ type: Number })
    hid?: number

    @Prop({ type: String, default: '' })
    icon?: string

    @Prop({ type: Array, default: [] })
    inventory?: IItem[]

    @Prop({ type: Array, default: [] })
    cards?: ICard[]

    @Prop({ type: Array, default: [] })
    deck?: ICard[]

    @Prop({ type: Number, default: 0 })
    claimedToday?: number
}

export type UserDocument = Document & User

export const UserSchema = SchemaFactory.createForClass(User)

interface IPokemon {
    uuid: string
    name: string
    exp: number
    level: number
    image: string
}

interface IHaigusha {
    name: string
    source: string
    description: string
    url: string
    image: string
}

interface IItem {
    name: string
    use: string
    usage: 'unlimited' | number
}

interface ICard {
    id: string
    title: string
    image: string
    description: string
    tier: string
}
