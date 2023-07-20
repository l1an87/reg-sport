<template>
	<div class="block" style="--background: #2A3188">

		<h2 id="result" class="title background">
			<app-svg-icon name="result"/>
			Результаты
		</h2>

		<div class="wrapper">

			<div class="background basketball"></div>

			<a href="//stat.sistemasport.ru/" target="_blank" class="result-link">
				Посмотреть<br/> результаты
			</a>

			<div class="background volleyball"></div>

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
	name: "route-index-result",
	components: {
		AppSvgIcon,
		AppBlockTriangle
	}
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

.block {

	.wrapper {
		display: grid;
		grid-gap: 24px;
		grid-template-columns: minmax(100px, 300px) minmax(400px, 2fr) minmax(100px, 300px);


		.background {
			position: relative;

			&:after {
				content: '';
				display: block;
				position: relative;
				height: 100%;
				width: 100%;
			}

			&.basketball:after {
				background: url("@assets/svg/sport/basketball.svg") no-repeat bottom right;
				background-size: contain;
				left: -24px;
			}

			&.volleyball:after {
				top: -80px;
				max-width: 160px;
				margin-left: auto;
				background: url("@assets/svg/sport/volleyball.svg") no-repeat top right;
				background-size: contain;
			}
		}

		@include breakpoint(sm) {
			grid-template-columns: 1fr;

			.background {

				&.volleyball {
					display: none;
				}

				&.basketball {
					height: 140px;
					order: 1;

					&:after {
						background-position: center center;
					}
				}

			}
		}
	}

	.result-link {
		position: relative;
		display: block;
		padding: 90px 100px 90px 80px;
		background: #00C3FF;
		text-transform: uppercase;
		font-size: 48px;
		width: 100%;
		max-width: 650px;
		line-height: 1.4;
		color: #2A3188;
		margin: 180px auto 224px;
		text-decoration: none;
		left: 12px;

		@include breakpoint(md) {
			font-size: 36px;
			margin: 140px auto 160px;
		}

		@include breakpoint(sm) {
			margin: 80px auto 20px;
			font-size: 16px;
			padding: 52px 40px;
			width: 100%;
			max-width: 320px;
		}

		&:before, &:after {
			content: '';
			position: absolute;
			pointer-events: none;
		}

		&:before {
			width: 100%;
			height: 100%;
			left: -24px;
			top: -24px;
			border: 3px #00C3FF solid;
		}

		&:after {
			right: 0;
			top: 28px;
			border: 24px solid transparent;
			border-left: 40px solid #2A3188;

			@include breakpoint(sm) {
				border: 16px solid transparent;
				border-left: 28px solid #2A3188;
			}
		}
	}

}

</style>