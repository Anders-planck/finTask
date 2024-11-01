import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { CurrentUserDtoSerialized } from '#dtos/auth/current_user_dto'

export function useCurrentUser() {
  return computed(() => usePage().props.currentUser as CurrentUserDtoSerialized)
}
