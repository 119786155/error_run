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

<style>
	.menu-container {
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
		position: fixed;
		left: -14rem;
		bottom: 20%;
		cursor: pointer;
		background: var(--card-bg);
		box-shadow: var(--shadow);
		transition: var(--transition);
		-webkit-tap-highlight-color: transparent;
		z-index: 10;
	}

	.menu-container:hover {
		left: -9rem;
	}

	.menu-list {
		display: none;
		position: absolute;
		right: 2rem;
		top: 2rem;
		width: 13rem;
		transition: var(--transition);
	}

	.menu-container:hover .menu-list {
		display: block;
	}

	.menu-list li {
		list-style: none;
		text-align: right;
		margin-top: 1.5rem;
		padding-right: 0.5rem;
	}

	.menu-list a {
		color: var(--text-color);
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
		width: 100%;
		height: 2rem;
	}

	.menu-list a:hover,
	.menu-list li[aria-current='page'] a {
		color: var(--text-color);
		opacity: 0.5;
	}
</style>
