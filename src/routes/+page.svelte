<script>
	import { _ } from 'svelte-i18n'
	import Story from './story/Story.svelte'
</script>

<svelte:head>
	<title>{$_('site.title')} - {$_('pages.story.title')}</title>
	<meta name="description" content="poem" />
</svelte:head>

<section>
	<Story />
</section>
