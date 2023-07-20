<template>
	<div class="app-triangle">
		<div class="app-triangle-container">
			<svg viewBox="0 0 100 200" preserveAspectRatio="none">
				<polygon points="0,0 50,200 100,0"/>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "app-block-triangle"
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

.app-triangle {
	position: relative;
	margin-bottom: 178px;

	.app-triangle-container {
		position: absolute;
		width: 100%;
		height: 78px;

		svg {
			height: 100%;
			width: 100%;

			polygon {
				fill: var(--background);
			}
		}
	}

	@include breakpoint(md) {
		margin-bottom: 128px;

		.app-triangle-container {
			height: 48px;
		}
	}

	@include breakpoint(sm) {
		margin-bottom: 100px;

		.app-triangle-container {
			height: 32px;
		}
	}
}

</style>