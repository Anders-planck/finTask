import User from '#models/user'

export type CurrentUserDtoSerialized = ReturnType<CurrentUserDto['serialize']>

export class CurrentUserDto {
  constructor(private user?: User) {}

  static fromModel(user?: User) {
    return new this(user)
  }

  serialize() {
    if (!this.user) {
      return null
    }

    return {
      id: this.user.id,
      name: this.user.fullName,
      email: this.user.email,
    }
  }
}
