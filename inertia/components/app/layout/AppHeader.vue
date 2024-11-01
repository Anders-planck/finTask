<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { usePageTitle } from '~/composables/use_page_title'

const props = defineProps<{
  title: string
  description: string
}>()

usePageTitle(props.title)
</script>

<template>
  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
  </Head>
</template>
