<script>
	import { _ } from 'svelte-i18n';
	import I18nSelector from './I18nSelector.svelte';
</script>

<footer class="flex justify-around mx-5 mt-3">
	<div class="flex items-start">
		<img
			class="w-[16px] mr-3 relative top-1"
			src="/batb.png"
			alt={$_('site.footer.PublicSecurityRecordation')}
		/>
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
