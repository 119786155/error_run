<script>
	import Poem from './Poem.svelte';
</script>

<svelte:head>
	<title>Poem</title>
	<meta name="description" content="poem" />
</svelte:head>

<section>
	<Poem />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
        margin: 15px;
	} 
</style>
