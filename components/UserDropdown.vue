<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild class="flex items-center justify-center">
      <button class="focus:outline-none">
        <UserAvatar class="size-10" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <NuxtLink to="/account">
        <DropdownMenuItem class="cursor-pointer">Profile</DropdownMenuItem>
      </NuxtLink>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger> Theme </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem
              class="flex items-center justify-between w-[calc(100% + 1rem)]"
              @click="setTheme('system')"
            >
              <span><i class="w-5 mr-1 fa-solid fa-desktop" />System</span>

              <i
                v-if="activeTheme === 'system'"
                class="ml-3 fa-solid fa-check"
              />
            </DropdownMenuItem>
            <DropdownMenuItem
              class="flex items-center justify-between w-[calc(100% + 1rem)]"
              @click="setTheme('light')"
            >
              <span><i class="w-5 mr-1 fa-solid fa-sun" />Light Mode</span>

              <i
                v-if="activeTheme === 'light'"
                class="ml-3 fa-solid fa-check"
              />
            </DropdownMenuItem>
            <DropdownMenuItem
              class="flex items-center justify-between w-[calc(100% + 1rem)]"
              @click="setTheme('dark')"
            >
              <span><i class="w-5 mr-1 fa-solid fa-moon" />Dark Mode</span>

              <i v-if="activeTheme === 'dark'" class="ml-3 fa-solid fa-check" />
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <NuxtLink to="/">
        <DropdownMenuItem class="cursor-pointer">Logout</DropdownMenuItem>
      </NuxtLink>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
