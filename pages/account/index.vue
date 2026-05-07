<script setup lang="ts">
definePageMeta({
	layout: "default",
	layoutTransition: {
		name: "slide-in",
	},
	middleware: 'auth',
});
</script>

<template>
	<section class="text-black dark:text-white">
		<div class="container p-5 mx-auto">
			<p>This page will be displayed at the /account/profile route.</p>
			<NuxtLink to="/">Landing page</NuxtLink>
		</div>
	</section>
</template>
