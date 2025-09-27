<script>
  import { createElement } from 'react'
	import { createRoot } from 'react-dom/client'
  import "@excalidraw/excalidraw/index.css";

  let props = $props()
  let rootEl

  $effect(() => {
    const root = createRoot(rootEl)

    import('@excalidraw/excalidraw').then(({ Excalidraw, WelcomeScreen, MainMenu }) => {
      const welcome = null // createElement(WelcomeScreen, { key: 'WelcomeScreen' })
      const menu = createElement(MainMenu, { key: 'MainMenu' }, [
        createElement(MainMenu.DefaultItems.LoadScene, { key: 'LoadScene' }),
        createElement(MainMenu.DefaultItems.SaveAsImage, { key: 'SaveAsImage' }),
        createElement(MainMenu.DefaultItems.Export, { key: 'Export' }),
        createElement(MainMenu.Separator, { key: 'Separator' }),
        createElement(MainMenu.DefaultItems.ChangeCanvasBackground, {
          key: 'ChangeCanvasBackground',
        }),
      ])
      const excalidraw = createElement(Excalidraw, { ...props }, [welcome, menu])
      root.render(excalidraw)
    })

    return () => root.unmount()
  })
</script>

<div bind:this={rootEl} class="root"></div>

<style>
  .root {
    height: 100svh;
  }
</style>
