<template>
	<div class="block" style="--background: #5E1FE8">

		<h2 id="stream" class="title background">
			<app-svg-icon name="stream"/>
			Прямые включения
		</h2>


		<div class="wrapper">

			<div class="player">
				<iframe
					src="https://afk_system.comdi.com/player/eh190ffk"
					frameborder="0"
					scrolling="no"
					allowfullscreen
				/>
			</div>

			<div class="background football hide-sm"></div>
			<div class="background cycling hide-sm"></div>
			<div class="background tennis"></div>

		</div>

		<app-block-triangle></app-block-triangle>

	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AppBlockTriangle from "@/components/app-block-triangle.vue";
import AppSvgIcon from "@/components/app-svg-icon.vue";

export default defineComponent({
	name: "route-index-stream",
	components: {
		AppSvgIcon,
		AppBlockTriangle
	}
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

.wrapper {
	position: relative;
	padding: 200px var(--ui-grid-gutter) 280px;
	max-width: 740px;

	@include breakpoint(md) {
		max-width: 600px;
		padding: 200px var(--ui-grid-gutter) 150px;
	}

	@include breakpoint(sm) {
		max-width: calc(100% - 24px);
		padding: 80px var(--ui-grid-gutter) 50px;
	}

	.player {
		position: relative;
		padding-top: 56.25%;
		//padding-top: 75% (4/3)
		z-index: 2;

		@include breakpoint(sm) {
			left: 12px;
		}

		iframe {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: #9E7AF2;
		}

		&:before {
			content: '';
			position: absolute;
			pointer-events: none;
			width: 100%;
			height: 100%;
			left: -24px;
			top: -24px;
			border: 3px #9E7AF2 solid;
			z-index: -1;
		}
	}

	.background {
		position: absolute;
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		background: no-repeat center center;
		background-size: contain;
		z-index: 2;
		pointer-events: none;

		&.tennis {
			width: 500px;
			height: 500px;
			bottom: 10px;
			right: -360px;
			background-image: url("@assets/svg/sport/tennis.svg");

			@include breakpoint(md) {
				width: 260px;
				height: 260px;
				right: -150px;
				bottom: 10px;
			}

			@include breakpoint(sm) {
				position: static;
				width: 140px;
				height: 140px;
				margin: 32px auto 0;
			}
		}

		&.football {
			width: 260px;
			height: 260px;
			top: 50px;
			left: -140px;
			background-image: url("@assets/svg/sport/football.svg");
		}

		&.cycling {
			width: 200px;
			height: 240px;
			bottom: 50px;
			left: -160px;
			background-image: url("@assets/svg/sport/cycling.svg");

			@include breakpoint(md) {
				width: 200px;
				height: 140px;
				bottom: 80px;
				left: -150px;
			}
		}


	}
}

</style>