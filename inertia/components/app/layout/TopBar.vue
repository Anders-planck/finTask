<script lang="ts" setup>
import { Link } from '@inertiajs/vue3'
import { User } from '~/types/user'
import Logo from '~/components/app/Logo.vue'
import UserButtonAction from '~/components/app/UserButtonAction.vue'
import DrawerMobileMenu from '~/components/app/nav/DrawerMobileMenu.vue'
import ButtonTheme from '~/components/app/layout/ButtonTheme.vue'
import { links as defaultLinks } from '~/components/app/nav/links'
import { useBrowserLocation } from '@vueuse/core'
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineProps<{
  user?: User | null
}>()

const links = ref(defaultLinks)

const location = useBrowserLocation()

onMounted(() => {
  links.value = links.value.map((link) => ({
    ...link,
    isActive: location.value.pathname === link.href,
  }))
})
</script>

<template>
  <header class="py-10">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <Link class="flex items-center gap-2" href="/">
          <Logo />
        </Link>
      </div>

      <nav class="hidden sm:flex items-center gap-4" aria-label="Main navigation">
        <template v-for="link of links" :key="link.href">
          <Link
            :href="link.href"
            class="hover:text-primary"
            :class="link.isActive && 'font-bold underline underline-offset-2 text-primary'"
          >
            {{ link.name }}
          </Link>
        </template>
      </nav>

      <div class="flex justify-between items-center gap-4" aria-label="Main navigation">
        <!-- User is connected -->
        <template v-if="user">
          <div class="flex items-center gap-2">
            <ButtonTheme />
            <UserButtonAction :user="user" />
            <DrawerMobileMenu />
          </div>
        </template>

        <!-- User is not connected -->
        <template v-else>
          <slot name="not-connected" />
        </template>
      </div>
    </div>
  </header>
</template>
