<script lang="ts" setup>
import { Separator } from '~/components/ui/separator'
import { onMounted, ref } from 'vue'
import { useBrowserLocation } from '@vueuse/core'
import NavLink from '~/components/app/nav/NavLink.vue'
import { type NavLinkType, links as defaultLinks } from '~/components/app/nav/links'

const location = useBrowserLocation()

const links = ref<NavLinkType[]>(defaultLinks)

onMounted(() => {
  links.value = links.value.map((link) => ({
    ...link,
    isActive: location.value.pathname === link.href,
  }))
})
</script>

<template>
  <aside class="w-full flex flex-col gap-2">
    <template v-for="(link, idx) in links" :key="link.href">
      <NavLink :link="link" />
      <Separator v-if="idx < links.length - 1" />
    </template>
  </aside>
</template>
