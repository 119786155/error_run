<script>
	import { _ } from 'svelte-i18n'
</script>

<div class="card">
	<h1 class="title">{$_('pages.story.content.title')}</h1>
	<p class="desc">
		<span class="author">{$_('pages.story.content.author', { default: '' })}</span>
		<i>{$_('pages.story.content.createtime')}</i>
	</p>
	<p>{$_('pages.story.content.paragraph1')}</p>
	<p>{$_('pages.story.content.paragraph2')}</p>
	<p>{$_('pages.story.content.paragraph3')}</p>
	<p>{$_('pages.story.content.paragraph4')}</p>
	<p>{$_('pages.story.content.paragraph5')}</p>
	<p>{$_('pages.story.content.paragraph6')}</p>
	<p>{$_('pages.story.content.paragraph7')}</p>
	<p>{$_('pages.story.content.paragraph8')}</p>
	<p>{$_('pages.story.content.paragraph9')}</p>
	<p>{$_('pages.story.content.paragraph10')}</p>
	<p>{$_('pages.story.content.paragraph11')}</p>
</div>
