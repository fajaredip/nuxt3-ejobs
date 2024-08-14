<script setup lang="ts">
useHead({
	link: [
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700 |Material+Icons",
		},
	],
});
</script>

<template>
	<div>
		<NuxtLayout />
	</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
