import type { HttpContext } from '@adonisjs/core/http'
import { RegisterValidator } from '#validators/auth/register'
import { inject } from '@adonisjs/core'
import WebRegister from '#actions/auth/http/web_register'

export default class RegisterController {
  public async render({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  @inject()
  public async execute({ request, response }: HttpContext, webRegister: WebRegister) {
    const data = await request.validateUsing(RegisterValidator)

    await webRegister.handle(data)

    response.redirect().toRoute('home')
  }
}
