<script setup lang="ts">
const props = defineProps({
  completeness: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="flex flex-col px-5 py-3 bg-white rounded-md dark:bg-gray-800">
    <p class="mb-2 text-lg font-semibold">
      {{ props.completeness.percentage }} Profile Strength
    </p>
    <div class="w-full h-2 mb-3 bg-gray-300 rounded-full">
      <div
        class="h-2 bg-blue-500 rounded-full"
        :style="{ width: props.completeness.percentage }"
      />
    </div>
    <div class="flex flex-col gap-1">
      <span
        class="text-sm"
        :class="
          props.completeness.personal_information
            ? 'text-blue-400'
            : 'text-gray-600'
        "
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        Personal Information
      </span>
      <span
        class="text-sm"
        :class="
          props.completeness.formal_education
            ? 'text-blue-400'
            : 'text-gray-600'
        "
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        Formal Education
      </span>
      <span
        class="text-sm"
        :class="
          props.completeness.work_experience ? 'text-blue-400' : 'text-gray-600'
        "
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        Work Experience
      </span>
      <span
        class="text-sm"
        :class="props.completeness.course ? 'text-blue-400' : 'text-gray-600'"
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        Course
      </span>
      <span
        class="text-sm"
        :class="props.completeness.skill ? 'text-blue-400' : 'text-gray-600'"
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        Skill
      </span>
      <span
        class="text-sm"
        :class="
          props.completeness.achievement ? 'text-blue-400' : 'text-gray-600'
        "
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        Achievement
      </span>
      <span
        class="text-sm"
        :class="props.completeness.cv ? 'text-blue-400' : 'text-gray-600'"
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        CV
      </span>
      <span
        class="text-sm"
        :class="props.completeness.photo ? 'text-blue-400' : 'text-gray-600'"
      >
        <Icon name="fa6-solid:check" class="mr-2" />
        Photo
      </span>
    </div>
  </div>
</template>
