<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child class="flex items-center justify-center">
      <button class="focus:outline-none">
        <UserAvatar class="rounded-full size-10" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      class="bg-white rounded-lg shadow-lg dark:border-slate-700 dark:bg-gray-900"
    >
      <DropdownMenuLabel>
        <div class="flex items-center justify-start gap-5 px-3 py-3">
          <UserAvatar class="rounded-lg size-16" />
          <div>
            <div class="mb-1 text-xl truncate max-w-52">
              Fajar Edi Prabowo
            </div>
            <div class="text-xs font-light truncate text-slate-400 max-w-52">
              fajaredip@gmail.com
            </div>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <NuxtLink to="/account">
          <DropdownMenuItem class="px-4 py-3"> <span>Profile</span></DropdownMenuItem>
        </NuxtLink>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger class="px-4 py-3"> Theme </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent class="bg-white dark:bg-gray-900 dark:border-slate-700">
              <DropdownMenuItem
                class="flex items-center justify-between w-40 px-4 py-3 hover:text-blue-500"
                :class="{ 'text-blue-500': activeTheme === 'system' }"
                @click="setTheme('system')"
              >
                <span><i class="w-8 fa-solid fa-desktop" />System</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                class="flex items-center justify-between w-40 px-4 py-3 hover:text-blue-500"
                :class="{ 'text-blue-500': activeTheme === 'light' }"
                @click="setTheme('light')"
              >
                <span><i class="w-8 fa-solid fa-sun" />Light Mode</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                class="flex items-center justify-between w-40 px-4 py-3 hover:text-blue-500"
                :class="{ 'text-blue-500': activeTheme === 'dark' }"
                @click="setTheme('dark')"
              >
                <span><i class="w-8 fa-solid fa-moon" />Dark Mode</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <NuxtLink to="/">
          <DropdownMenuItem class="px-4 py-3"> <span>Logout</span></DropdownMenuItem>
        </NuxtLink>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar.vue";
import { onMounted } from "vue";

const emit = defineEmits(["updateTheme"]);

const activeTheme = ref("system");

const setTheme = (theme: string) => {
  const html = document.documentElement;

  if (theme === "dark") {
    html.classList.add("dark");
    localStorage.theme = "dark";
    activeTheme.value = "dark";
    emit("updateTheme", "dark");
  } else if (theme === "light") {
    html.classList.remove("dark");
    localStorage.theme = "light";
    activeTheme.value = "light";
    emit("updateTheme", "light");
  } else {
    localStorage.removeItem("theme");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark");
      activeTheme.value = "system";
      emit("updateTheme", "dark");
    } else {
      html.classList.remove("dark");
      activeTheme.value = "system";
      emit("updateTheme", "light");
    }
  }
};

// Initialize theme based on localStorage or system preference
onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    activeTheme.value = "dark";
    emit("updateTheme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    activeTheme.value = "light";
    emit("updateTheme", "light");
  }
});
</script>

<style>
[role="menuitem"] {
  cursor: pointer;
}
</style>
