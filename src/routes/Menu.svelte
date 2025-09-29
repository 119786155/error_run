<script lang="ts">
	import { page } from '$app/state';
</script>

<nav class="glass-card">
	<ul class="menu-list">
		<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Poem</a>
		</li>
		<li aria-current={page.url.pathname === '/write' ? 'page' : undefined}>
			<a href="/write">Write</a>
		</li>
		<li aria-current={page.url.pathname === '/draw' ? 'page' : undefined}>
			<a href="/draw">Draw</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		position: fixed;
		left: -115px;
		bottom: 50%;
		cursor: pointer;
		background: var(--card-bg);
		box-shadow: var(--shadow);
		transition: var(--transition);
		-webkit-tap-highlight-color: transparent;
	}

	nav:hover {
		left: -65px;
	}

	.menu-list {
		display: none;
		position: absolute;
		right: 25px;
		top: 15px;
		transition: var(--transition);
	}

	nav:hover .menu-list {
		display: block;
	}

	.menu-list li {
		list-style: none;
		margin-top: 12px;
	}

	.menu-list a {
		color: #666;
		cursor: pointer;
		text-decoration: none;
	}

	.menu-list a:hover,
	.menu-list li[aria-current='page'] a {
		color: #aaa;
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
