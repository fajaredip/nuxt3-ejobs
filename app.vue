<script setup lang="ts">
	useHead({
		title: "E-Jobs",
		link: [
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700 |Material+Icons",
			},
		],
		script: [
			{
				crossorigin: "anonymous",
				src: "https://kit.fontawesome.com/0db2cbd175.js",
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
	.page-enter-active {
		animation: fadeIn 0.5s ease;
	}
	.page-leave-active {
		animation: fadeOut 0.5s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-20px);
		}
	}
</style>
