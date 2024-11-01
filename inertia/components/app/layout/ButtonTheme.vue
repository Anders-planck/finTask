<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Sun, MoonStar } from 'lucide-vue-next'
import { computed } from 'vue'
import { Button } from '~/components/ui/button'

const mode = useColorMode({
  disableTransition: false,
  initialValue: 'dark',
})

const toggleColorMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
const toggleIcon = computed(() => {
  return mode.value === 'dark' ? Sun : MoonStar
})
</script>

<template>
  <Button variant="ghost" @click="toggleColorMode" aria-label="Toggle color mode" size="icon">
    <component :is="toggleIcon" class="w-6 h-6" />
  </Button>
</template>
