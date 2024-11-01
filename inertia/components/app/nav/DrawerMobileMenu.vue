<script setup lang="ts">
import { PanelRightOpen } from 'lucide-vue-next'
import {
  Drawer,
  DrawerTrigger,
  DrawerDescription,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from '~/components/ui/drawer'
import { Sparkles } from 'lucide-vue-next'
import { Link } from '@inertiajs/vue3'
import { useBrowserLocation } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { links as defaultLinks, NavLinkType } from '~/components/app/nav/links'
import AppSidebar from '~/components/app/nav/NavSidebar.vue'

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
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="ghost" size="icon" class="rounded-full sm:hidden">
        <PanelRightOpen />
        <span class="sr-only">User menu</span>
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader class="flex flex-col justify-center items-center gap-2">
          <DrawerTitle> Hey <Sparkles /> </DrawerTitle>
          <DrawerDescription> what do you want to do? </DrawerDescription>
        </DrawerHeader>
        <div class="flex flex-col gap-2 my-4">
          <AppSidebar />
        </div>
        <DrawerFooter>
          <DrawerClose as-child>
            <Button variant="destructive" :as="Link" href="/logout" method="post"> Logout </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
