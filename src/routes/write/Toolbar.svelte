<script>
	import {
		BoldButton,
		Divider,
		ItalicButton,
		UnderlineButton,
		StrikethroughButton,
		FormatCodeButton,
		DropDownAlign,
		FontFamilyDropDown,
		FontSizeDropDown,
		Toolbar
	} from 'svelte-lexical';
</script>

<Toolbar>
	<FontFamilyDropDown />
	<FontSizeDropDown />
	<Divider />
	<BoldButton />
	<ItalicButton />
	<UnderlineButton />
	<StrikethroughButton />
	<FormatCodeButton />
	<Divider />
	<DropDownAlign />
</Toolbar>
