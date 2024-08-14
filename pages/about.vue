<script setup lang="ts">
definePageMeta({
	layout: "default",
	layoutTransition: {
		name: "slide-in",
	},
});
</script>

<template>
	<section>
		<p>This page will be displayed at the /about route.</p>
		<NuxtLink to="/">Home page</NuxtLink>
	</section>
</template>
