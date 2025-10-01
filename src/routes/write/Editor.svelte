<script>
	import { Composer, ContentEditable, RichTextPlugin } from 'svelte-lexical';
	import { theme } from 'svelte-lexical/dist/themes/default';
	import Toolbar from './Toolbar.svelte';

	const initialConfig = {
		theme: theme,
		namespace: 'pg_demo',
		nodes: [],
		onError: (error) => {
			throw error;
		}
	};
</script>

<Composer {initialConfig}>
	<div class="editor-shell svelte-lexical">
		<Toolbar />
		<div class="editor-container">
			<div class="editor-scroller">
				<div class="editor">
					<ContentEditable />
				</div>
			</div>
			<RichTextPlugin />
		</div>
	</div>
</Composer>
