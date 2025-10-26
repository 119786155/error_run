<script>
	import { _ } from 'svelte-i18n';
	import I18nSelector from './I18nSelector.svelte';
</script>

<footer class="footer">
	<div class="gaba">
		<img src="/batb.png" alt={$_('site.footer.PublicSecurityRecordation')} />
		<a
			href="https://beian.mps.gov.cn/#/query/webSearch?code=13010802002611"
			rel="noreferrer"
			target="_blank">{$_('site.footer.PublicSecurityRecordation')}</a
		>
	</div>
	<div>
		<a href="https://beian.miit.gov.cn/" target="_blank">{$_('site.footer.IcpRecordation')}</a>
	</div>
	<div>
		<I18nSelector />
	</div>
</footer>
