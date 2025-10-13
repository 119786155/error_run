<script>
	import I18nSelector from './I18nSelector.svelte';
</script>

<footer>
	<div>
		<div>
			<img src="/batb.png" alt="冀公网安备13010802002611号" />
			<a
				href="https://beian.mps.gov.cn/#/query/webSearch?code=13010802002611"
				rel="noreferrer"
				target="_blank"
				class="gaba">冀公网安备13010802002611号</a
			>
		</div>
		<div class="icp">
			<a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2025130546号</a>
		</div>
	</div>
	<div>
		<I18nSelector />
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-around;
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

	footer .icp {
		padding-left: 20px;
	}
</style>
