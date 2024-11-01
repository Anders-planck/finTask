<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { User } from '~/types/user'
import { Link } from '@inertiajs/vue3'
import { CircleUserRound } from 'lucide-vue-next'

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="flex flex-1 items-center justify-end">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="icon" class="rounded-full">
          <CircleUserRound />
          <span class="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56" align="end">
        <DropdownMenuLabel>
          {{ user?.name }}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem :as="Link" href="/logout" method="post">
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
