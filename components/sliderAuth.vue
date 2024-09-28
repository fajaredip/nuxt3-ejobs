<script setup lang="ts">
import { ref } from "vue";

const router = useRouter();
const emit = defineEmits(["toggle-sidebar"]);

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const email = ref("");

const closeSidebar = () => {
  emit("toggle-sidebar", false);
};

const handleLogin = () => {
  localStorage.setItem("isLogin", "true");
  router.push("/job/vacancy");
};
</script>

<template>
  <transition name="slide">
    <div
      v-if="props.isOpen"
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
          <img src="/logo.png" alt="" class="w-36" />
          <div class="w-full mt-10">
            <InputPrepend
              v-model="email"
              icon="fa-regular fa-envelope"
              placeholder="Input Email"
              class="mb-3"
            />
            <button
              class="w-full p-2 text-white bg-green-500 rounded"
              @click="handleLogin"
            >
              Login
            </button>
          </div>
          <div class="mt-8 divider-container">
            <div class="divider-text">or login with</div>
            <div class="divider-line" />
          </div>
          <div class="flex items-center justify-between w-full gap-2 mt-8">
            <button
              class="bg-white hover:bg-gray-200 font-semibold py-2 px-4 rounded inline-flex items-center justify-between border-[#c5d3de] border-[1.5px] w-full"
            >
              <img src="/icon-google.svg" alt="" class="size-5" />
              <span class="grow">Google</span>
            </button>
            <button
              class="bg-white hover:bg-gray-200 font-semibold py-2 px-4 rounded inline-flex items-center justify-between border-[#c5d3de] border-[1.5px] w-full"
            >
              <img src="/icon-linkedin.svg" alt="" class="size-5" />
              <span class="grow">Linkedin</span>
            </button>
          </div>
        </div>
      </div>
      <p class="text-sm font-normal text-center">
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

.divider-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.divider-text {
  color: #7491a7;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  background: #fff;
  padding: 0 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.divider-line {
  border-bottom: 1px solid #7491a7;
  width: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-from {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
