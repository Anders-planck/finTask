import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import type { Toast } from '~/components/app/ToastManager.vue'

export function usePageMessages() {
  return computed(() => usePage().props.messages as Record<string, Toast>)
}
