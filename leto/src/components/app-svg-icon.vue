<template>
	<div class="app-svg-icon" :class="[`${prefix}-${name}`]">

		<svg>
			<use :href="computedIcon"/>
		</svg>

	</div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
	name: "app-svg-icon",
	props: {
		name: {type: String, required: true},
		prefix: {type: String, default: 'icon'},
	},
	computed: {
		computedIcon() {
			return `#${this.prefix}-${this.name}`
		}
	}
});
</script>

<style lang="scss" scoped>

div.app-svg-icon {
	position: relative;
	width: var(--icon-size, 32px);
	height: var(--icon-size, 32px);
	color: var(--icon-color, currentColor);

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		stroke: var(--icon-color-stroke, transparent);
		padding: 8.33%;
		transition: .3s;
	}
}

</style>