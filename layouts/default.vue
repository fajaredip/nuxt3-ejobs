<script setup lang="ts"></script>

<template>
	<div class="flex flex-col w-full min-h-screen">
		<AppHeader />
		<main class="py-5 overflow-auto grow bg-slate-300">
			<NuxtPage />
		</main>
		<AppFooter />
	</div>
</template>
