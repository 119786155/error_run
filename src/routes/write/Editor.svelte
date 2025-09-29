<script>
	import { registerRichText } from '@lexical/rich-text';
	import { mergeRegister } from '@lexical/utils';
	import { createEditor } from 'lexical';
	import { onMount } from 'svelte';

	const config = {
		namespace: 'MyEditor',
		onError: console.error
	};

	const editor = createEditor(config);

	let myEditorRef;

	onMount(() => {
		editor.setRootElement(myEditorRef);

		mergeRegister(registerRichText(editor));
	});
</script>

<div class="editor container">
	<div bind:this={myEditorRef} contenteditable></div>
</div>
