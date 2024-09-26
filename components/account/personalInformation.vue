<template>
  <ExpandableCard
    title="Personal Information"
    icon-class="fa-solid fa-id-card"
    class="w-full"
    :completeness="props.completeness"
  >
    <div class="p-5 text-sm">This card contains personal information content.</div>
  </ExpandableCard>
</template>
<script setup lang="ts">
const props = defineProps({
  completeness: {
    type: Boolean,
    required: true,
  },
});
</script>