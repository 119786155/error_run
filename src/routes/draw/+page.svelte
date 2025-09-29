<script>
	import Draw from './Draw.svelte';
	import { get } from '../../lib/theme.svelte.js';

	let excalidrawAPI = $state();

	$effect(() => {
		excalidrawAPI?.onChange(console.log);
	});
</script>

<svelte:head>
	<title>Draw</title>
	<meta name="description" content="draw" />
</svelte:head>

<Draw excalidrawAPI={(api) => (excalidrawAPI = api)} theme={get()} />
