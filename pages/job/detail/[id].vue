<script setup lang="ts">
	import { useRoute } from "nuxt/app";

	const route = useRoute();
	const id = route.params.id;

	definePageMeta({
		layout: "default",
		layoutTransition: {
			name: "slide-in",
		},
	});
</script>

<template>
	<section>
		<div class="container p-5 mx-auto text-black dark:text-white">
			<p class="mb-5">This page will be displayed at the /job/detail/{{ id }} route.</p>
			<NuxtLink
				to="/job/application"
				class="px-8 py-3 text-lg text-white bg-gray-600 rounded-lg hover:bg-gray-700"
				>Back</NuxtLink
			>
		</div>
	</section>
</template>
