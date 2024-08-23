<script lang="ts">
	export let title: String = '';
	export let isShow: Boolean = true;
	export let bgColor: String = '';
</script>

<div
	class="sticky-top w-100 shadow shadow-sm {bgColor != 'bg-dark'
		? 'bg-dark'
		: 'bg-4'} text-light p-3 {isShow ? '' : 'collapse'}"
>
	<b class="mb-0">{title}</b>
</div>
