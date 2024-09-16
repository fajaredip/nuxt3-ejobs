<script setup>
	import CareerSearch from "~/components/careerSearch.vue";

	definePageMeta({
		layout: "landing-page",
		layoutTransition: {
			name: "slide-in",
		},
	});
</script>

<template>
	<div class="flex flex-col">
		<section
			class="flex items-center bg-amber-500 w-full min-h-[20rem] relative"
		>
			<div class="container flex items-center justify-center mx-auto">
				<h1>Hero Section</h1>
				<CareerSearch
					class="absolute transform -translate-x-1/2 -bottom-14 left-1/2"
				/>
			</div>
		</section>
		<section class="flex items-center justify-center w-full min-h-[20rem]">
			<div class="container flex items-center justify-center mx-auto">
				<h1>Featured Section</h1>
			</div>
		</section>
		<section class="bg-[linear-gradient(45deg,#282560,#3486c9)] text-white">
			<div class="container flex w-full p-5 mx-auto">
				<div class="flex flex-col w-[50rem]">
					<h1 class="mb-3 text-2xl font-semibold">About Elabram</h1>
					<p class="mb-3">
						Elabram HR Solution focuses on human resources solutions. The
						company covers every HR needs: from manpower/temporary staff and
						payroll services by HR Outsourcing solution, permanent staff,
						expatriate providers, Executive Search by Recruitment Solutions.
					</p>
					<h1 class="mb-3 text-2xl font-semibold">Our Services</h1>
					<div class="flex mb-3">
						<ul>
							<li>Executive Search</li>
							<li>Recruitment</li>
							<li>HR Outsourcing</li>
							<li>Payroll Service</li>
							<li>Expatriate Service</li>
						</ul>
						<ul>
							<li>HR Consulting</li>
							<li>HR Restructuring</li>
							<li>Workforce Management Systems</li>
							<li>Telco Solutions</li>
						</ul>
					</div>
					<div class="flex items-center">
						<img src="/plane.svg" alt="Logo" class="w-6 mr-3" />
						<p>Malaysia, Indonesia, Philippines, Thailand, Singapore</p>
					</div>
				</div>
				<div class="flex flex-col justify-end grow">
					<div class="flex flex-wrap-reverse items-end justify-end gap-3 mb-4">
						<img src="/ACM 9K.png" alt="Logo" class="w-40" />
						<img src="/ACM 27K.png" alt="Logo" class="w-40" />
						<img src="/ACM 45K.png" alt="Logo" class="w-40" />
					</div>
					<div>
						<ul class="flex items-center justify-end gap-3">
							<li>
								<a href="#"
									><img src="/icon-facebook.svg" alt="" class="w-10"
								/></a>
							</li>
							<li>
								<a href="#"
									><img src="/icon-twitter.svg" alt="" class="w-10"
								/></a>
							</li>
							<li>
								<a href="#"
									><img src="/icon-linked-in.svg" alt="" class="w-10"
								/></a>
							</li>
							<li>
								<a href="#"
									><img src="/icon-instagram.svg" alt="" class="w-10"
								/></a>
							</li>
							<li>
								<a href="#"
									><img src="/icon-youtube.svg" alt="" class="w-10"
								/></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
