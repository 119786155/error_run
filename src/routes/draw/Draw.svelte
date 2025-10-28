<script>
	import { createElement } from 'react';
	import { createRoot } from 'react-dom/client';
	import '@excalidraw/excalidraw/index.css';
	import Loading from '../../common/Loading.svelte';

	let rootEl;
	let theme = $state('');

	const setTheme = (isDark) => {
		theme = isDark ? 'dark' : '';
	};

	const themeDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

	setTheme(themeDarkQuery.matches);

	themeDarkQuery.addEventListener('change', (mediaQueryListEvent) => {
		setTheme(themeDarkQuery.matches);
	});

	$effect(() => {
		const root = createRoot(rootEl);

		// The $effect fails to be invoked after the $theme update, so this line is needed.
		const props = { theme };

		import('@excalidraw/excalidraw').then(({ Excalidraw, MainMenu }) => {
			const welcome = null;
			const menu = createElement(MainMenu, { key: 'MainMenu' }, [
				createElement(MainMenu.DefaultItems.LoadScene, { key: 'LoadScene' }),
				createElement(MainMenu.DefaultItems.SaveAsImage, { key: 'SaveAsImage' }),
				createElement(MainMenu.DefaultItems.Export, { key: 'Export' }),
				createElement(MainMenu.Separator, { key: 'Separator' }),
				createElement(MainMenu.DefaultItems.ChangeCanvasBackground, {
					key: 'ChangeCanvasBackground'
				})
			]);

			const excalidraw = createElement(Excalidraw, { ...props }, [welcome, menu]);
			root.render(excalidraw);
		});

		return () => root.unmount();
	});
</script>

<div bind:this={rootEl} class="root h-[90vh]"><Loading /></div>
