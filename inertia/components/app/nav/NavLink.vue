<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { NavLinkType } from '~/components/app/nav/links'
import { Button } from '~/components/ui/button'

defineProps<{
  link: NavLinkType
}>()
</script>

<template>
  <Link :href="link.href">
    <Button
      :variant="link.isActive ? 'default' : 'ghost'"
      size="lg"
      class="w-full flex justify-start items-center gap-3 px-3 py-4 rounded-md"
    >
      <Component :is="link.icon" class="w-6 h-6" />
      <p class="scroll-m-20 text-sm font-extrabold tracking-tight lg:text-md">{{ link.name }}</p>
    </Button>
  </Link>
</template>
