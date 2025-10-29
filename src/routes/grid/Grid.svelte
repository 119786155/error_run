<script>
	import { RevoGrid } from '@revolist/svelte-datagrid'

	const source = [
		{
			name: '1',
			details: 'Item 1'
		},
		{
			name: '2',
			details: 'Item 2'
		}
	]

	const columns = [
		{
			prop: 'name',
			name: 'First',
			cellTemplate(h, { value }) {
				return h('span', { style: { background: 'red' } }, value)
			}
		},
		{
			prop: 'details',
			name: 'Second'
		}
	]
</script>

<RevoGrid {source} {columns} />
