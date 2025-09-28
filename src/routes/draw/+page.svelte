<script>
  import { onMount } from 'svelte';
  import { getTheme } from '../../lib/theme';
	import Draw from './Draw.svelte';

  let theme = $state('');

	onMount(async () => {
		theme = getTheme();
	});

	let excalidrawAPI = $state();

	$effect(() => {
		excalidrawAPI?.onChange(console.log);
	});
</script>

<svelte:head>
	<title>Draw</title>
	<meta name="description" content="draw" />
</svelte:head>

<Draw excalidrawAPI={(api) => (excalidrawAPI = api)} theme={theme} />
