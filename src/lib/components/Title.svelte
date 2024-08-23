<script lang="ts">
	export let title: String = '';
	export let isShow: Boolean = true;
	export let bgColor: String = '';
</script>

<div
	class="sticky-top w-100 shadow {bgColor != 'bg-dark' ? 'bg-dark' : 'bg-4'} text-light {isShow
		? ''
		: 'collapse'}"
>
	<div class="d-flex align-items-center justify-content-between ps-3 py-2 pe-2">
		<b class="mb-0" style="font-size: 1.1em;">{title}</b>
		<div>
			<button class="btn {bgColor != 'bg-dark' ? 'bg-dark' : 'bg-4'} text-light">
				<i class="fa-solid fa-gear" />
			</button>
		</div>
	</div>
</div>
