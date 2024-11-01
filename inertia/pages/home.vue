<script setup lang="ts">
import AppHeader from '~/components/app/layout/AppHeader.vue'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import ChartBar from '~/components/app/dashboard/ChartBar.vue'
import FormCheckbox from '~/components/app/form/FormCheckbox.vue'
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import { Eye } from 'lucide-vue-next'

const state = ref(true)

const array20items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <AppHeader title="Over-view" description="This is Fin-Tasks" />

  <div class="w-full space-y-6 pb-4">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Total Revenue </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$45,231.89</div>
          <p class="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Subscriptions </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">+2350</div>
          <p class="text-xs text-muted-foreground">+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Sales </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">+12,234</div>
          <p class="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Active Now </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">+573</div>
          <p class="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-bold">Today's Tasks</h3>
        <div v-for="i of array20items" :key="i" class="flex items-center justify-start gap-2">
          <div class="flex items-center gap-2">
            <FormCheckbox name="remember" v-model="state" />
            <p class="text-sm">Finish the project {{ i }}</p>
          </div>
          <p class="text-xs text-muted-foreground">12:30 PM</p>
        </div>
        <Button variant="default" class="w-1/3 gap-2">
          <Eye class="h-4 w-4" />
          <span class="text-xs">View all tasks</span>
        </Button>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-bold">Current Goals</h3>
        <div v-for="i of array20items" :key="i" class="flex items-center justify-start gap-2">
          <div class="flex items-center gap-2">
            <FormCheckbox name="remember" v-model="state" />
            <p class="text-sm">Finish the project {{ i }}</p>
          </div>
          <p class="text-xs text-muted-foreground">12:30 PM</p>
        </div>
        <Button variant="default" class="w-1/3 gap-2">
          <Eye class="h-4 w-4" />
          <span class="text-xs">View all tasks</span>
        </Button>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <ChartBar title="Monthly Tasks Evolution" />
      <ChartBar title="Monthly Goal Evolution" />
    </div>
  </div>
</template>
