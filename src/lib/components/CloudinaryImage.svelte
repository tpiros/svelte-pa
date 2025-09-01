<script lang="js">
	import { CldImage } from 'svelte-cloudinary';

	let {
		src,
		width = 400,
		height = 400,
		crop = 'fill',
		radius = 0,
		alt = 'Cloudinary image',
		class: className = '',
		...restProps
	} = $props();
</script>

<CldImage
	{src}
	{width}
	{height}
	{crop}
	{alt}
	class={className}
	loading="lazy"
	format="auto"
	quality="auto"
	radius={radius > 0 ? radius : undefined}
	{...restProps}
/>
