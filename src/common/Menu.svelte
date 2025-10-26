<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { page } from '$app/state';
</script>

<nav class="menu-container glass">
	<ul class="menu-list">
		<li
			aria-current={page.url.pathname === '/' || page.url.pathname === '/story'
				? 'page'
				: undefined}
		>
			<a href="/">{$_('pages.story.title')}</a>
		</li>
		<li aria-current={page.url.pathname === '/write' ? 'page' : undefined}>
			<a href="/write">{$_('pages.write.title')}</a>
		</li>
		<li aria-current={page.url.pathname === '/draw' ? 'page' : undefined}>
			<a href="/draw">{$_('pages.draw.title')}</a>
		</li>
	</ul>
</nav>
