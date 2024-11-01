<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { useForm } from '@inertiajs/vue3'
import AppHeader from '~/components/app/layout/AppHeader.vue'
import { Label } from '~/components/ui/label'
import AuthPage from '~/components/auth/AuthPage.vue'
import { cn } from '~/lib/utils'
import { LoaderCircle, Github as GithubLogo } from 'lucide-vue-next'
import FormInput from '~/components/app/form/FormInput.vue'

const form = useForm({
  email: '',
  password: '',
  full_name: '',
})

const link = {
  label: 'Login',
  href: '/login',
}
</script>

<template>
  <AppHeader title="Register" description="Register in Fin-task app" />
  <AuthPage
    title="Create an account"
    :link="link"
    description="Enter your details below to create your account."
  >
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
      <form method="post" @submit.prevent="form.post('/register')">
        <div class="grid gap-2">
          <FormInput
            name="full_name"
            label="Full name"
            type="text"
            v-model="form.full_name"
            :errors="form.errors.full_name"
            placeholder="Full name"
            :disabled="form.processing"
            auto-capitalize="words"
            auto-complete="name"
            auto-correct="off"
          />

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

          <Button :disabled="form.processing">
            <LoaderCircle v-if="form.processing" class="mr-2 h-4 w-4 animate-spin" />
            Sign up
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
    <p class="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our
      <a href="/terms" class="underline underline-offset-4 hover:text-primary">
        Terms of Service
      </a>
      and
      <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
        Privacy Policy
      </a>
      .
    </p>
  </AuthPage>
</template>
