<template>
  <section class="text-slate-800 dark:text-white">
    <div class="container px-5 mx-auto">
      <div class="p-5 mb-5 bg-white rounded-lg dark:bg-gray-800 md:hidden">
        <p class="mb-2 text-lg font-semibold">
          {{ completeness.percentage }} Profile Strength
        </p>
        <div class="w-full h-2 bg-gray-300 rounded-full">
          <div
            class="h-2 bg-blue-500 rounded-full"
            :style="{ width: completeness.percentage }"
          />
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-8 p-5 mb-5 bg-white rounded-lg md:flex-row md:items-start dark:bg-gray-800"
      >
        <div class="relative flex items-start justify-start min-w-fit">
          <UserAvatar class="rounded-lg size-36" />
          <span
            class="absolute flex items-center justify-center p-2 text-xs text-white bg-blue-500 border-4 border-white rounded-full cursor-pointer dark:border-gray-800 top-3 -right-[1.15rem] hover:bg-blue-600"
          >
            <i class="fa-solid fa-camera" />
          </span>
        </div>
        <div class="flex flex-col items-start justify-start">
          <div class="mb-5 text-3xl font-semibold text-center md:text-left">
            Mr. Fajar Edi Prabowo
          </div>
          <div
            class="flex flex-col items-start justify-start gap-5 mb-3 text-sm md:flex-row"
          >
            <span>
              <i class="mr-2 fa-solid fa-location-dot" />
              <span>Jakarta, Indonesia</span>
            </span>
            <span>
              <i class="mr-2 fa-solid fa-envelope" />
              <span class="break-all">fajaredip@gmail.com</span>
            </span>
            <span>
              <i class="mr-2 fa-solid fa-mobile-screen-button" />
              <span>+62 812 3456 7890</span>
            </span>
          </div>
          <div class="text-sm">
            <p>
              I’m a passionate Front-End Developer with experience in building
              responsive, user-friendly web applications. Proficient in modern
              JavaScript frameworks such as React, Next.js, and Nuxt.js, I
              specialize in crafting intuitive user interfaces that enhance the
              overall user experience. With a keen eye for detail and design, I
              work closely with teams to transform ideas into visually appealing
              and functional web applications.
            </p>
            <br />
            <p>
              I'm continuously learning and adapting to new technologies,
              currently exploring TypeScript and strengthening my skills in
              Tailwind CSS and responsive design. I have hands-on experience
              with version control (Git), RESTful APIs, and optimizing web
              performance. My goal is to build accessible, efficient, and
              scalable front-end solutions.
            </p>
            <br />
            <p>Let’s collaborate to bring your ideas to life!</p>
          </div>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="flex flex-col w-full grow">
          <PersonalInformation
            :completeness="completeness.personal_information"
          />
          <FormalEducation :completeness="completeness.formal_education" />
          <WorkExperience :completeness="completeness.work_experience" />
          <Course :completeness="completeness.course" />
          <Skill :completeness="completeness.skill" />
          <Achievement :completeness="completeness.achievement" />
        </div>
        <div class="flex-col hidden gap-5 w-80 md:flex">
          <ProfileStrength :completeness="completeness" />
          <div class="p-2 bg-white rounded-lg dark:bg-gray-800">
            <ul>
              <li class="px-3 py-2 text-sm rounded-lg cursor-pointer hover:dark:bg-gray-600 hover:bg-slate-200">
                <i class="w-6 fa-solid fa-file-lines" />
                Upload CV
              </li>
              <li class="px-3 py-2 text-sm rounded-lg cursor-pointer hover:dark:bg-gray-600 hover:bg-slate-200">
                <i class="w-6 fa-solid fa-video" />
                Upload Video Profile
              </li>
              <NuxtLink to="/account/change-password">
                <li class="px-3 py-2 text-sm rounded-lg cursor-pointer hover:dark:bg-gray-600 hover:bg-slate-200">
                  <i class="w-6 fa-solid fa-user-gear" />
                  Account Setting
                </li>
              </NuxtLink>
              <NuxtLink to="/account/summary">
                <li class="px-3 py-2 text-sm rounded-lg cursor-pointer hover:dark:bg-gray-600 hover:bg-slate-200">
                  <i class="w-6 fa-solid fa-list-check" />
                  Summary
                </li>
              </NuxtLink>
            </ul>
          </div>
          <div class="px-5 py-3 bg-white rounded-lg dark:bg-gray-800">
            Navigation
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FormalEducation from "~/components/account/formalEducation.vue";
import PersonalInformation from "~/components/account/personalInformation.vue";
import WorkExperience from "~/components/account/workExperience.vue";
import Course from "~/components/account/course.vue";
import Skill from "~/components/account/skill.vue";
import Achievement from "~/components/account/achievement.vue";
import ProfileStrength from "~/components/account/profileStrength.vue";

definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});

const completeness = {
  achievement: true,
  course: true,
  cv: true,
  formal_education: false,
  percentage: "45%",
  personal_information: true,
  photo: true,
  skill: false,
  video: true,
  work_experience: true,
};
</script>
