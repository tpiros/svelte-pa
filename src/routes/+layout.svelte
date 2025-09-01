<script lang="js">
	let { children } = $props();
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Cloudinary Svelte Photo Album</title>
</svelte:head>

<Navbar />
<main class="bg-gray-200 container mx-auto p-8 rounded-lg shadow-2xl">
	{@render children()}
</main>
