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
		<div class="container p-5 mx-auto">
			<p>This page will be displayed at the /account/profile route.</p>
			<NuxtLink to="/">Landing page</NuxtLink>
		</div>
	</section>
</template>
