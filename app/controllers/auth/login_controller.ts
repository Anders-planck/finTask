import type { HttpContext } from '@adonisjs/core/http'
import { LoginValidator } from '#validators/auth/login'
import WebLogin from '#actions/auth/http/web_login'
import { inject } from '@adonisjs/core'

export default class LoginController {
  public async render({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  @inject()
  public async execute({ request, response }: HttpContext, webLogin: WebLogin) {
    const data = await request.validateUsing(LoginValidator)

    await webLogin.handle(data)

    response.redirect().toRoute('home')
  }
}
