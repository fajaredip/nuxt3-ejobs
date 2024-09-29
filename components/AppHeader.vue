<template>
  <header
    class="sticky top-0 z-40 bg-white shadow dark:bg-gray-800 dark:border-slate-950 dark:border-b"
  >
    <nav class="container flex items-center justify-between p-5 mx-auto">
      <div class="flex items-center justify-between flex-grow">
        <div class="flex items-center">
          <img :src="logoSrc" alt="Logo" class="flex-shrink-0 w-40" />
          <ul v-if="isLogin == 'true'" class="flex items-end gap-5 ml-7">
            <NuxtLink to="/job/vacancy">
              <li
                class="flex items-center px-3 py-2 rounded-md cursor-pointer text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <Icon name="ph:briefcase-bold" class="mr-2" />
                <span class="hidden md:block">Job Board</span>
              </li>
            </NuxtLink>
            <NuxtLink to="/job/application">
              <li
                class="flex items-center px-3 py-2 rounded-md cursor-pointer text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <Icon name="ph:folder-bold" class="mr-2" />
                <span class="hidden md:block">Job Application</span>
              </li>
            </NuxtLink>
          </ul>
        </div>
      </div>
      <div v-if="isLogin == 'false'">
        <button
          class="px-5 py-2 text-white bg-[linear-gradient(45deg,#eb5f26,#ffc107)] rounded-md"
          @click="openSidebar"
        >
          Login
        </button>
      </div>
      <div v-else>
        <UserDropdown @update-theme="updateTheme" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const emit = defineEmits(["toggle-sidebar"]);

const router = useRouter();
const isOpen = ref(false);
const isLogin = ref("false");
const appliedTheme = ref("");

const openSidebar = () => {
  isOpen.value = true;
  emit("toggle-sidebar", true);
};

const updateTheme = (theme: string) => {
  appliedTheme.value = theme;
};

const logoSrc = computed(() =>
  appliedTheme.value === "dark" ? "/logo-dark.svg" : "/logo.png"
);

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    updateTheme("dark");
  } else {
    document.documentElement.classList.remove("dark");
    updateTheme("light");
  }

  // check login
  if (localStorage.isLogin === "true") {
    isLogin.value = "true";
    router.push("/job/vacancy");
  } else {
    isLogin.value = "false";
    router.push("/");
  }
});
</script>
