import type { HttpContext } from '@adonisjs/core/http'

import WebLogout from '#actions/auth/http/web_logout'
import { inject } from '@adonisjs/core'

export default class LogoutsController {
  @inject()
  public async execute({ response }: HttpContext, webLogout: WebLogout) {
    await webLogout.handle()
    response.redirect().toRoute('auth.login')
  }
}
