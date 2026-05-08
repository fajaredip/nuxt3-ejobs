<script setup lang="ts">
const emit = defineEmits<{ 'signed-up': [] }>()

const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMsg = ref('')
const loading = ref(false)

async function submit() {
  errorMsg.value = ''

  if (password.value !== confirmPassword.value) {
    errorMsg.value = "Passwords don't match"
    return
  }

  loading.value = true

  const { error } = await supabase.auth.signUp({ email: email.value, password: password.value })

  loading.value = false

  if (error) {
    errorMsg.value = error.message
  } else {
    emit('signed-up')
  }
}
</script>

<template>
  <form class="flex flex-col gap-3 w-full" @submit.prevent="submit">
    <h2 class="text-xl font-semibold text-gray-700 text-center mb-1">Sign Up</h2>

    <InputPrepend v-model="email" icon="fa-regular fa-envelope" placeholder="Email" type="email" />
    <InputPrepend v-model="password" icon="fa-solid fa-lock" placeholder="Password" type="password" />
    <InputPrepend v-model="confirmPassword" icon="fa-solid fa-lock" placeholder="Confirm Password" type="password" />

    <p v-if="errorMsg" class="text-sm text-red-500">{{ errorMsg }}</p>

    <button
      type="submit"
      :disabled="loading"
      class="w-full py-2 mt-1 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 disabled:opacity-50"
    >
      {{ loading ? 'Creating account...' : 'Sign Up' }}
    </button>
  </form>
</template>
