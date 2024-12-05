<script setup lang="ts">
import { useLogin } from '@/models/users'

const logins = useLogin
function googleLogin() {
  logins.googleLogin()
}
</script>

<template>
  <a class="button is-primary">
    <strong>Sign up</strong>
  </a>
  <a class="button is-light" @click.prevent="googleLogin">
    <i class="icon">
      <img src="https://fontawesome.com/icons/google?f=brands&s=solid" alt="" />
    </i>
  </a>
</template>

<style scoped></style>
