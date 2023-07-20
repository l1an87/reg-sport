<template>
	<header>
		<div class="wrapper">

			<router-link id="logo" to="/"></router-link>

			<h1 class="text color-primary">
				Добро пожаловать <br/>
				на летнюю спартакиаду <br/>
				приуроченную к 30-летию<br/>
				АФК «Система»
			</h1>

			<div class="links">

				<app-button class="primary" to="/#schedule">
					<app-svg-icon name="schedule"/>
					Расписание
				</app-button>

				<app-button class="primary" to="/#map">
					<app-svg-icon name="map"/>
					Карты и схемы
				</app-button>

				<div class="show-lg"></div>

				<app-button class="primary" to="/#result">
					<app-svg-icon name="result"/>
					Результаты
				</app-button>

				<app-button class="primary" to="/#stream">
					<app-svg-icon name="stream"/>
					Прямые включения
				</app-button>

				<app-button class="primary" to="/#contact">
					<app-svg-icon name="contact"/>
					Контакты
				</app-button>

			</div>

			<div class="background-container">
				<div class="background basketball"></div>
				<div class="background volleyball"></div>
				<div class="background football"></div>
				<div class="background cycling"></div>
				<div class="background tennis"></div>
			</div>

		</div>
	</header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AppSvgIcon from "@/components/app-svg-icon.vue";
import AppButton from "@/components/app-button.vue";

export default defineComponent({
	name: "layout-part-header",
	components: {
		AppButton,
		AppSvgIcon
	}
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

header {

	background: url("@assets/svg/background-header.svg") no-repeat top right;

	@include breakpoint(md) {
		background-image: url("@assets/svg/background-header-md.svg")
	}

	@include breakpoint(sm) {
		background-image: url("@assets/svg/background-header-sm.svg")
	}

	.wrapper {
		position: relative;
		margin: 80px auto;

		#logo {
			display: block;
			width: 260px;
			height: 190px;
			background: url("@assets/svg/logo.svg") no-repeat center center;
			background-size: contain;
			margin-bottom: 72px;

			@include breakpoint(md) {
				margin-bottom: 160px;
			}

			@include breakpoint(sm) {
				margin: 0 auto 210px;
			}
		}

		.text {
			max-width: 552px;
			margin-bottom: 72px;

			@include breakpoint(sm) {
				margin-bottom: 40px;
			}
		}

		.links {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			--gap-top: 80px;
			--gap-left: 80px;
			--columns: 2;

			@include breakpoint(lg) {
				--columns: 3;
			}

			@include breakpoint(md) {
				--gap-top: 60px;
				--gap-left: 60px;
			}

			@include breakpoint(sm) {
				--columns: 1;
				--gap-top: 60px;
				--gap-left: 60px;
			}

			margin-top: calc(var(--gap-top) * -1);
			margin-left: calc(var(--gap-left) * -1);


			> * {
				margin-top: var(--gap-top);
				margin-left: var(--gap-left);
				flex: 0 0 calc((100% / var(--columns)) - 80px);
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
				top: 120px;
				right: 20px;
				width: 330px;
				height: 330px;
				background-image: url("@assets/svg/sport/tennis.svg");

				@include breakpoint(lg) {
					top: 160px;
					right: 20px;
					width: 360px;
					height: 360px;
				}

				@include breakpoint(md) {
					top: 150px;
					right: 10px;
					width: 240px;
					height: 240px;
				}

				@include breakpoint(sm) {
					transform: translate(50%, -50%);
					top: 290px;
					right: 30%;
					width: 120px;
					height: 120px;
				}
			}

			&.football {
				top: -30px;
				right: 0;
				width: 260px;
				height: 260px;
				background-image: url("@assets/svg/sport/football.svg");

				@include breakpoint(lg) {
					top: -30px;
					right: -20px;
					width: 260px;
					height: 260px;
				}

				@include breakpoint(md) {
					top: -30px;
					right: 0;
					width: 180px;
					height: 180px;
				}

				@include breakpoint(sm) {
					transform: translate(50%, -50%);
					top: 240px;
					right: 15%;
					width: 80px;
					height: 80px;
				}
			}

			&.cycling {
				top: 270px;
				left: 490px;
				width: 200px;
				height: 200px;
				background-image: url("@assets/svg/sport/cycling.svg");

				@include breakpoint(lg) {
					left: auto;
					top: 320px;
					right: 320px;
					width: 200px;
					height: 200px;
				}

				@include breakpoint(md) {
					top: 280px;
					left: 400px;
					width: 120px;
					height: 120px;
				}

				@include breakpoint(sm) {
					transform: translate(-50%, -50%);
					top: 350px;
					left: 50%;
					width: 80px;
					height: 80px;
				}
			}

			&.basketball {
				top: 0;
				left: 420px;
				width: 280px;
				height: 280px;
				background-image: url("@assets/svg/sport/basketball.svg");

				@include breakpoint(lg) {
					top: 80px;
					left: 650px;
					width: 320px;
					height: 320px;
				}

				@include breakpoint(md) {
					transform: translate(-50%, -50%);
					top: 160px;
					left: 60%;
					width: 250px;
					height: 250px;
				}

				@include breakpoint(sm) {
					transform: translate(-50%, -50%);
					top: 290px;
					left: 30%;
					width: 100px;
					height: 100px;
				}
			}

			&.volleyball {
				top: 0;
				left: 220px;
				width: 220px;
				height: 220px;
				background-image: url("@assets/svg/sport/volleyball.svg");

				@include breakpoint(lg) {
					top: 0;
					left: 420px;
					width: 220px;
					height: 220px;
				}

				@include breakpoint(md) {
					top: 0;
					left: 220px;
					width: 180px;
					height: 180px;
				}

				@include breakpoint(sm) {
					transform: translate(-50%, -50%);
					top: 250px;
					left: 8%;
					width: 80px;
					height: 80px;
				}
			}
		}

	}
}

</style>