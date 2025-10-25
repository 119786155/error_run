<script>
	import { _ } from 'svelte-i18n';
</script>

<div class="bg-gray-100 dark:bg-gray-800 rounded-lg mx-5 my-3 px-6 py-8">
	<h1 class="text-gray-900 dark:text-white">{$_('pages.story.content.title')}</h1>
	<p class="text-gray-600 dark:text-gray-500 text-xs mt-2">
		{$_('pages.story.content.author', { default: '' })}<i>{$_('pages.story.content.createtime')}</i>
	</p>
	<p class="mt-2">{$_('pages.story.content.paragraph1')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph2')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph3')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph4')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph5')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph6')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph7')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph8')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph9')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph10')}</p>
	<p class="mt-2">{$_('pages.story.content.paragraph11')}</p>
</div>
