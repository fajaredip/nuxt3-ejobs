<script setup lang="ts">
defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ 'toggle-sidebar': [value: boolean] }>()

// Which form to show: login → signup → check-email
const step = ref<'login' | 'signup' | 'check-email'>('login')

function closeSidebar() {
  emit('toggle-sidebar', false)
  // Reset after the slide-out animation finishes
  setTimeout(() => { step.value = 'login' }, 300)
}

function onSignedUp() {
  step.value = 'check-email'
}
</script>

<template>
  <transition name="slide">
    <div
      v-if="isOpen"
      class="flex flex-col fixed right-0 top-0 w-full sm:w-[23rem] h-full bg-white z-50 p-6 login-container"
    >
      <div class="relative grow">
        <img
          src="/icon-close.svg"
          alt=""
          class="absolute top-0 left-0 cursor-pointer hover:grayscale-[50%]"
          @click="closeSidebar"
        />

        <div class="flex flex-col items-center mt-16">
          <img src="/logo.png" alt="" class="w-36 mb-6" />

          <LoginForm v-if="step === 'login'" @success="closeSidebar" />
          <SignupForm v-else-if="step === 'signup'" @signed-up="onSignedUp" />

          <!-- Shown after signup: tell user to check email -->
          <div v-else-if="step === 'check-email'" class="flex flex-col items-center gap-3 text-center w-full">
            <i class="fa-regular fa-envelope text-4xl text-blue-700" />
            <p class="font-semibold text-gray-700">Check your email</p>
            <p class="text-sm text-gray-500">We sent a verification link to your inbox. Click it to activate your account.</p>
            <button class="mt-2 text-sm text-blue-700 hover:underline" @click="step = 'login'">Back to login</button>
          </div>

          <p v-if="step === 'login' || step === 'signup'" class="mt-5 text-sm text-gray-500">
            <template v-if="step === 'login'">
              Don't have an account?
              <button class="text-blue-700 font-medium hover:underline" @click="step = 'signup'">Sign up</button>
            </template>
            <template v-else>
              Already have an account?
              <button class="text-blue-700 font-medium hover:underline" @click="step = 'login'">Login</button>
            </template>
          </p>
        </div>
      </div>

      <p class="text-sm font-normal text-center text-gray-500">
        ELABRAM SYSTEMS has never requested any amount of money / gratification
        in any form. If you found any of those, please report it immediately to
        <span class="text-[#7491a7] font-medium">compliance@elabram.com</span>
      </p>
    </div>
  </transition>
</template>

<style scoped>
.login-container {
  background-image: url("/bg-login.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from { transform: translateX(100%); }
.slide-enter-to   { transform: translateX(0%); }
.slide-leave-from { transform: translateX(0%); }
.slide-leave-to   { transform: translateX(100%); }
</style>
