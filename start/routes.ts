/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const RegistersController = () => import('#controllers/auth/registers_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')

router
  .group(() => {
    router.on('/').renderInertia('home').as('home')
  })
  .middleware(middleware.auth())

router
  .group(() => {
    router.get('/login', [LoginController, 'render']).as('auth.login')
    router.post('/login', [LoginController, 'execute'])

    router.get('/register', [RegistersController, 'render']).as('auth.register')
    router.post('/register', [RegistersController, 'execute'])
  })
  .middleware(middleware.guest())

router.post('/logout', [LogoutController, 'execute']).as('auth.logout')
