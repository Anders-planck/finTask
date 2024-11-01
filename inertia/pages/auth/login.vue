<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { useForm } from '@inertiajs/vue3'
import AppHeader from '~/components/app/layout/AppHeader.vue'
import { Label } from '~/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { AlertCircle, LoaderCircle } from 'lucide-vue-next'
import { cn } from '~/lib/utils'
import AuthPage from '~/components/auth/AuthPage.vue'
import { Github as GithubLogo } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import FormInput from '~/components/app/form/FormInput.vue'
import { Checkbox } from '~/components/ui/checkbox'
import FormCheckbox from '~/components/app/form/FormCheckbox.vue'

defineProps<{
  exceptions: Record<string, string>
}>()

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const link = {
  label: 'Register',
  href: '/register',
}
</script>

<template>
  <AppHeader title="Login" description="Login in Fin-task app" />

  <AuthPage
    title="Sign in to your account"
    :link="link"
    description="Enter your details below to sign in to your account."
  >
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
      <form method="post" @submit.prevent="form.post('/login')">
        <div class="grid gap-3">
          <Alert v-if="exceptions?.E_INVALID_CREDENTIALS" variant="destructive">
            <AlertCircle class="w-4 h-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{{ exceptions.E_INVALID_CREDENTIALS }}</AlertDescription>
          </Alert>

          <FormInput
            name="email"
            label="Email"
            type="email"
            v-model="form.email"
            :errors="form.errors.email"
            placeholder="name@example.com"
            :disabled="form.processing"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            v-model="form.password"
            :errors="form.errors.password"
            placeholder="Password"
            :disabled="form.processing"
            auto-capitalize="none"
            auto-complete="current-password"
            auto-correct="off"
          />

          <FormCheckbox
            name="remember"
            :model-value="form.remember"
            :disabled="form.processing"
            label="Remember me"
          />

          <Button :disabled="form.processing">
            <LoaderCircle v-if="form.processing" class="mr-2 h-4 w-4 animate-spin" />
            Sign in
          </Button>
        </div>
      </form>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
        </div>
      </div>
      <Button variant="outline" type="button" :disabled="form.processing">
        <LoaderCircle v-if="form.processing" class="mr-2 h-4 w-4 animate-spin" />
        <GithubLogo v-else class="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  </AuthPage>
</template>
