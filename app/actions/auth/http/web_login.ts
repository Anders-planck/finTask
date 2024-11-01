import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { Infer } from '@vinejs/vine/types'
import { LoginValidator } from '#validators/auth/login'
import User from '#models/user'

type Params = Infer<typeof LoginValidator>

@inject()
export default class WebLogin {
  constructor(protected ctx: HttpContext) {}

  async handle({ email, password, remember }: Params) {
    const user = await User.verifyCredentials(email, password)

    await this.ctx.auth.use('web').login(user, remember)

    this.ctx.session.flash('success', 'You have successfully logged in!')

    return user
  }
}
