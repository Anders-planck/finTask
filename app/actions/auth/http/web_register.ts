import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { Infer } from '@vinejs/vine/types'
import { RegisterValidator } from '#validators/auth/register'
import User from '#models/user'

type Params = Infer<typeof RegisterValidator>

@inject()
export default class WebRegister {
  constructor(protected ctx: HttpContext) {}

  async handle({ email, password, fullName }: Params) {
    const user = await User.create({ email, password, fullName })

    await this.ctx.auth.use('web').login(user)

    this.ctx.session.flash('success', 'You have successfully registered!')

    return user
  }
}
