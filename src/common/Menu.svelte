<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { page } from '$app/state';
</script>

<nav class="glass-card">
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
	nav {
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

	nav:hover {
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

	nav:hover .menu-list {
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

	.glass-card {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.5),
			inset 0 -1px 0 rgba(255, 255, 255, 0.1),
			inset 0 0 0px 0px rgba(255, 255, 255, 0);
		overflow: hidden;
	}

	.glass-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
	}

	.glass-card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 100%;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.8),
			transparent,
			rgba(255, 255, 255, 0.3)
		);
	}
</style>
