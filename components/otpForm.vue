<script setup lang="ts">
const props = defineProps<{ email: string }>()
const emit = defineEmits<{ verified: [] }>()

const supabase = useSupabaseClient()

const otp = ref('')
const errorMsg = ref('')
const loading = ref(false)

async function submit() {
  errorMsg.value = ''
  loading.value = true

  const { error } = await supabase.auth.verifyOtp({
    email: props.email,
    token: otp.value,
    type: 'email',
  })

  loading.value = false

  if (error) {
    errorMsg.value = error.message
  } else {
    emit('verified')
  }
}
</script>

<template>
  <form class="flex flex-col gap-3 w-full" @submit.prevent="submit">
    <h2 class="text-xl font-semibold text-gray-700 text-center mb-1">Verify Email</h2>
    <p class="text-sm text-gray-500 text-center">We sent a code to <strong>{{ email }}</strong></p>

    <InputPrepend v-model="otp" icon="fa-solid fa-key" placeholder="Enter 6-digit code" type="text" />

    <p v-if="errorMsg" class="text-sm text-red-500">{{ errorMsg }}</p>

    <button
      type="submit"
      :disabled="loading"
      class="w-full py-2 mt-1 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 disabled:opacity-50"
    >
      {{ loading ? 'Verifying...' : 'Verify' }}
    </button>
  </form>
</template>
