import { DefineComponent } from 'vue'
import AuthLayout from '~/layouts/authLayout.vue'
import AppLayout from '~/layouts/appLayout.vue'

export function setLayout(name: string, page: DefineComponent) {
  if (!page.default) {
    throw new Error(`Page ${name} does not have a default export`)
  }

  if (page.default.layout) {
    return
  }

  if (name.includes('auth')) {
    page.default.layout = AuthLayout
  } else {
    page.default.layout = AppLayout
  }
}
