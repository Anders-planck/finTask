<script lang="ts" setup>
import { useCurrentUser } from '~/composables/use_current_user'
import { usePageTitle } from '~/composables/use_page_title'
import ToastManager from '~/components/app/ToastManager.vue'
import { usePageMessages } from '~/composables/use_page_messages'
import TopBar from '~/components/app/layout/TopBar.vue'
import { TooltipProvider } from '~/components/ui/tooltip'
import { ScrollArea } from '~/components/ui/scroll-area'

const pageTitle = usePageTitle()
const currentUser = useCurrentUser()
const messages = usePageMessages()
</script>

<template>
  <TooltipProvider>
    <div class="min-h-screen w-full px-4 sm:px-8 sm:max-w-5xl mx-auto">
      <TopBar v-if="currentUser" :user="currentUser" />

      <main>
        <div class="flex items-center justify-between space-y-2 mb-3">
          <h2 class="text-3xl font-bold tracking-tight">{{ pageTitle }}</h2>
        </div>

        <div class="block">
          <slot />
        </div>
      </main>

      <ToastManager :messages="messages" />
    </div>
  </TooltipProvider>
</template>
