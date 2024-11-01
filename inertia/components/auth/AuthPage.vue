<script setup lang="ts">
import { cn } from '~/lib/utils'
import { buttonVariants } from '~/components/ui/button'
import { Link } from '@inertiajs/vue3'

defineProps<{
  link: {
    label: string
    href: string
  }
  title: string
  description: string
}>()
</script>

<template>
  <Link
    :href="link.href"
    :class="cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8')"
  >
    {{ link.label }}
  </Link>
  <div class="lg:p-8">
    <div class="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div class="flex flex-col space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">{{ title }}</h1>
        <p class="text-sm text-muted-foreground">{{ description }}</p>
      </div>
      <slot />
    </div>
  </div>
</template>
