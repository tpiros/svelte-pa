<script lang="js">
	let isOpen = false;

	const links = [
		{
			href: '/',
			text: 'Home'
		},
		{
			href: '/upload-widget',
			text: 'Upload (Upload Widget)'
		},
		{
			href: '/server-upload',
			text: 'Server Endpoint Upload'
		},
		{
			href: '/album',
			text: 'Photo Album'
		}
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown" class:dropdown-open={isOpen}>
			<button class="btn btn-ghost lg:hidden" onclick={toggleMenu} aria-label="Navbar toggle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</button>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				{#each links as { href, text }}
					<li>
						<a {href} onclick={closeMenu}>{text}</a>
					</li>
				{/each}
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl"> Cloudinary Svelte Photo Album </a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each links as { href, text }}
				<li>
					<a {href}>{text}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
