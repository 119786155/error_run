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
		justify-content: center;
		flex-wrap: wrap;
		padding-top: 10px;
	}

	footer a {
		display: inline-block;
		margin-right: 5px;
		color: #666;
		text-decoration: none;
		font-size: 80%;
	}

	footer a:hover {
		color: #888;
	}

	footer img {
		width: 16px;
		position: relative;
		top: 4px;
	}

	footer a.gaba {
		margin-left: 0;
	}
</style>
