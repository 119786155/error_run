<script>
	import { _ } from 'svelte-i18n';
	import I18nSelector from './I18nSelector.svelte';
</script>

<footer>
	<div>
		<img src="/batb.png" alt={$_('site.footer.PublicSecurityRecordation')} />
		<a
			href="https://beian.mps.gov.cn/#/query/webSearch?code=13010802002611"
			rel="noreferrer"
			target="_blank"
			class="gaba">{$_('site.footer.PublicSecurityRecordation')}</a
		>
	</div>
	<div>
		<a href="https://beian.miit.gov.cn/" target="_blank">{$_('site.footer.IcpRecordation')}</a>
	</div>
	<div>
		<I18nSelector />
	</div>
</footer>

<style>
	footer {
		display: flex;
		padding: 10px 10px 0;
		justify-content: space-around;
	}

	footer a {
		display: inline-block;
		color: var(--text-color);
		text-decoration: none;
		font-size: 80%;
	}

	footer a:hover {
		color: var(--text-color);
	}

	footer img {
		width: 16px;
		margin-right: 3px;
	}

	footer a.gaba {
	}

	footer > div:first-child {
		display: flex;
		align-items: start;
	}
</style>
