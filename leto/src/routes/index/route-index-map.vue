<template>
	<div class="block" style="--background: #00C3FF">

		<h2 id="map" class="title background">
			<app-svg-icon name="map"/>
			Карты и схемы
		</h2>

		<div class="wrapper">

			<h2 class="color-primary pause-3">Схема территории</h2>

			<div class="map-container" :class="{fullMap}" @click="fullMap = !fullMap">
				<img src="@assets/image/map.png" alt="Схема территории"/>
			</div>

		</div>

		<!-- Triangle -->
		<app-block-triangle></app-block-triangle>

	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AppBlockTriangle from "@/components/app-block-triangle.vue";
import AppSvgIcon from "@/components/app-svg-icon.vue";

export default defineComponent({
	name: "route-index-map",
	components: {
		AppSvgIcon,
		AppBlockTriangle
	},
	data() {
		return {
			fullMap: false
		}
	},
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

.wrapper {
	position: relative;
}

@include breakpoint(sm) {
	.map-container {
		position: relative;
		z-index: 2;
		overflow: auto;

		&.fullMap {
			transform: scaleY(2);

			img {
				transform: scaleX(2);
				transform-origin: 0;
			}
		}
	}
}

</style>