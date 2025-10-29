<script>
	import { _ } from 'svelte-i18n'
	import Draw from './Draw.svelte'

	let excalidrawAPI = $state()

	$effect(() => {
		excalidrawAPI?.onChange(console.log)
	})
</script>

<svelte:head>
	<title>{$_('pages.draw.title')}</title>
	<meta name="description" content={$_('pages.draw.title')} />
</svelte:head>

<Draw excalidrawAPI={(api) => (excalidrawAPI = api)} />
