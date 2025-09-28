<script>
	import Draw from './Draw.svelte';
	let excalidrawAPI = $state();

	$effect(() => {
		excalidrawAPI?.onChange(console.log);
	});
</script>

<svelte:head>
	<title>Draw</title>
	<meta name="description" content="draw" />
</svelte:head>

<Draw excalidrawAPI={(api) => (excalidrawAPI = api)} />
