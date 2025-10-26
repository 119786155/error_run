<script>
	import { _ } from 'svelte-i18n';
	import I18nSelector from './I18nSelector.svelte';
</script>

<footer class="mx-5 my-3 flex justify-around text-xs">
	<div class="flex items-start">
		<img
			class="relative top-[2px] mr-1 w-[12px]"
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
