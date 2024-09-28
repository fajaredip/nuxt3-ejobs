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
            <div class="mb-1 text-xl truncate max-w-52">Fajar Edi Prabowo</div>
            <div class="text-xs font-light truncate text-slate-400 max-w-52">
              fajaredip@gmail.com
            </div>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <NuxtLink to="/account">
          <DropdownMenuItem class="px-4 py-3">
            <span>Profile</span></DropdownMenuItem
          >
        </NuxtLink>
        <NuxtLink to="/account/change-password">
          <DropdownMenuItem class="px-4 py-3">
            <span>Account Setting</span></DropdownMenuItem
          >
        </NuxtLink>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger class="px-4 py-3">
            <span>Theme</span>
            <i
              class="ml-auto"
              :class="{
                'fa-solid fa-display': activeTheme === 'system',
                'fa-regular fa-sun': activeTheme === 'light',
                'fa-regular fa-moon': activeTheme === 'dark',
              }"
            />
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent
              class="bg-white dark:bg-gray-900 dark:border-slate-700"
            >
              <DropdownMenuItem
                class="flex items-center w-40 px-4 py-3"
                :class="{ 'text-blue-500': activeTheme === 'system' }"
                @click="setTheme('system')"
              >
                <i class="w-5 mr-2 fa-solid fa-display" />
                <span>System</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                class="flex items-center w-40 px-4 py-3"
                :class="{ 'text-blue-500': activeTheme === 'light' }"
                @click="setTheme('light')"
                ><i class="w-5 mr-2 fa-regular fa-sun" />
                <span>Light Mode</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                class="flex items-center w-40 px-4 py-3"
                :class="{ 'text-blue-500': activeTheme === 'dark' }"
                @click="setTheme('dark')"
                ><i class="w-5 mr-2 fa-regular fa-moon" />
                <span>Dark Mode</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger class="px-4 py-3">
            <span>Language</span>
            <span
              class="flex items-center px-2 py-1 ml-auto rounded-lg bg-slate-400/50"
            >
              <span class="text-[10px]">{{
                activeLanguage === "en" ? "English" : "Indonesia"
              }}</span>
              <img
                :src="
                  activeLanguage === 'en'
                    ? '/flags/united-states.svg'
                    : '/flags/indonesia.svg'
                "
                alt=""
                class="ml-2 border rounded-lg size-4 border-slate-400 dark:border-transparent"
              />
            </span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent
              class="bg-white dark:bg-gray-900 dark:border-slate-700"
            >
              <DropdownMenuItem
                class="w-40 px-4 py-3"
                :class="{ 'text-blue-500': activeLanguage === 'en' }"
                @click="setLanguage('en')"
              >
                <img
                  src="/flags/united-states.svg"
                  alt=""
                  class="mr-3 border rounded-lg size-4 border-slate-400 dark:border-transparent"
                />
                <span>English</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                class="w-40 px-4 py-3"
                :class="{ 'text-blue-500': activeLanguage === 'id' }"
                @click="setLanguage('id')"
              >
                <img
                  src="/flags/indonesia.svg"
                  alt=""
                  class="mr-3 border rounded-lg size-4 border-slate-400 dark:border-transparent"
                />
                <span>Indonesia</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
          <DropdownMenuItem class="px-4 py-3" @click="handleLogout">
            <span>Sign Out</span></DropdownMenuItem
          >
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

const router = useRouter();
const emit = defineEmits(["updateTheme"]);

const activeTheme = ref("system");
const activeLanguage = ref("id");

const setLanguage = (lang: string) => {
  activeLanguage.value = lang;
};

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

const handleLogout = () => {
  localStorage.removeItem("isLogin");
  router.push('/')
}

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
