<script>
	import { _ } from 'svelte-i18n'
	import Editor from './Editor.svelte'
</script>

<svelte:head>
	<title>{$_('pages.write.title')}</title>
	<meta name="description" content={$_('pages.write.title')} />
</svelte:head>

<Editor />
