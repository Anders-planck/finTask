<script setup lang="ts">
import ToastManager from '~/components/app/ToastManager.vue'
import Logo from '~/components/app/Logo.vue'

defineProps<{
  messages: Record<string, string | Record<string, string>>
}>()
</script>

<template>
  <div
    class="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20">
        <Logo />
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo; Welcome to Fin-task, the best place to manage your finances and keep track of
            your expenses. &rdquo;
          </p>
          <footer class="text-sm">Anders Planck</footer>
        </blockquote>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full h-full lg:px-10">
      <slot />
    </div>
  </div>

  <ToastManager :messages="messages" />
</template>
