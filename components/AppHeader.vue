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
      <div>
        <!-- Show login button when not logged in, avatar when logged in -->
        <button
          v-if="!user"
          class="px-4 py-2 text-white bg-blue-800 rounded dark:text-black dark:bg-blue-400"
          @click="openSidebar"
        >
          Login
        </button>
        <UserAvatar v-else @update-theme="updateTheme" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from "vue";

const emit = defineEmits(["toggle-sidebar"]);

const user = useSupabaseUser();

// Ref to track sidebar open state
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
  appliedTheme.value === "dark" ? "/logo-dark.svg" : "/logo.png",
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
