<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	let ctx;
	let chartCanvas;
	const config = {
		type: 'bar',
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [
				{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					borderWidth: 1
				}
			]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	};

	onMount(() => {
		ctx = chartCanvas.getContext('2d');
		new Chart(ctx, config);
	});
</script>

<div class="container">
	<h1>Bar</h1>
	<canvas bind:this={chartCanvas} id="barChart"></canvas>
</div>
