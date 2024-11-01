<script setup lang="ts">
import { computed } from 'vue'
import { Checkbox } from '~/components/ui/checkbox'
import FormInput from '~/components/app/form/FormInput.vue'
import { Label } from '~/components/ui/label'

const props = withDefaults(
  defineProps<{
    name: string
    modelValue: boolean
    label?: string
    disabled?: boolean
    error?: string
    required?: boolean
  }>(),
  {
    label: '',
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
  <div class="flex justify-items-start items-center flex-wrap gap-4">
    <FormInput type="group" name="remember" :errors="error" :disabled="disabled">
      <div class="flex items-center gap-2">
        <Checkbox :id="name" v-model="internalValue" :disabled="disabled" :required="required" />
        <Label v-if="label" :for="name">{{ label }}</Label>
      </div>
    </FormInput>
  </div>
</template>
