<script>
	import { _ } from 'svelte-i18n';
</script>

<div class="card">
	<h1 class="title">{$_('pages.poem.content.title')}</h1>
	<p class="desc">
		<span class="author">{$_('pages.poem.content.author', { default: '' })}</span>
		<i>{$_('pages.poem.content.createtime')}</i>
	</p>
	<p>{$_('pages.poem.content.paragraph1')}</p>
	<p>{$_('pages.poem.content.paragraph2')}</p>
	<p>{$_('pages.poem.content.paragraph3')}</p>
	<p>{$_('pages.poem.content.paragraph4')}</p>
	<p>{$_('pages.poem.content.paragraph5')}</p>
	<p>{$_('pages.poem.content.paragraph6')}</p>
</div>
