import '../css/app.css'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h, type DefineComponent } from 'vue'
import { setLayout } from '~/app/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'Fin-Tasks'

export default function render(page: any) {
  return createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue', { eager: true })
      const pageResolved = pages[`../pages/${name}.vue`]

      setLayout(name, pageResolved)

      return pageResolved
    },

    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .component('Link', Link)
    },
  })
}
