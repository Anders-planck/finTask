<script setup lang="ts">
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    modelValue?: string | number
    type: string
    label?: string
    placeholder?: string
    autoComplete?: string
    autoCapitalize?: string
    autoCorrect?: string
    disabled?: boolean
    error?: string
    required?: boolean
  }>(),
  {
    type: 'text',
    label: '',
    placeholder: '',
    autoComplete: 'off',
    autoCapitalize: 'none',
    autoCorrect: 'off',
    disabled: false,
    error: undefined,
    required: false,
  }
)
const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
  get: () => props.modelValue,
  set: (value: string | number) => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="grid gap-1">
    <Label class="sr-only" :for="name" v-if="label"> {{ label }} </Label>
    <slot v-if="type === 'group'" />
    <Input
      v-else
      :id="name"
      :placeholder="placeholder"
      :type="type"
      :auto-capitalize="autoCapitalize"
      :auto-complete="autoComplete"
      :auto-correct="autoCorrect"
      :disabled="disabled"
      :required="required"
      v-model="internalValue"
      class="font-bold placeholder:font-normal"
    />
    <blockquote v-if="!!error" class="text-xs border-l-2 pl-2 italic text-destructive">
      {{ error }}
    </blockquote>
  </div>
</template>
