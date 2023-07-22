<template>
	<footer class="block">

		<h2 id="contact" class="title background">
			<app-svg-icon name="contact"/>
			Контакты
		</h2>

		<div class="wrapper">

			<div class="grid">

				<div>
					<h3>Административные вопросы</h3>
					<p>Понамарчук Маргарита</p>
					<a href="tel:+79055466906">+7 (905) 546-69-06</a>
				</div>

				<div>
					<h3>Организационные вопросы</h3>
					<p>Должкова Ксения</p>
					<a href="tel:+79164916411">+7 (916) 491-64-11</a>
				</div>

				<div>
					<h3>Парковка и трансфер</h3>
					<p>Юськин Валерий</p>
					<a href="tel:+79197724130">+7 (919) 772-41-30</a>
				</div>

				<div>
					<h3>Безопасность</h3>
					<p>Емельянов Игорь</p>
					<a href="tel:+79154444474">+7 (915) 444-44-74</a>
				</div>

				<div>
					<h3>Спорт</h3>
					<p>Маркин Андрей</p>
					<a href="tel:+79166575115">+7 (916) 657-51-15</a>
				</div>

			</div>

		</div>
	</footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AppSvgIcon from "@/components/app-svg-icon.vue";

export default defineComponent({
	name: "layout-part-footer",
	components: {AppSvgIcon}
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

footer {
	background: #571A9B;

	.grid {
		display: grid;
		grid-gap: 32px 48px;
		grid-template-columns: repeat(1, auto);
		margin-top: 32px;

		@include breakpoint(lg) {
			display: grid;
			grid-gap: 48px;
			grid-auto-flow: column;
			grid-template-columns: repeat(3, auto);
			grid-template-rows: repeat(2, 1fr);
		}

		div {
			padding-bottom: 32px;
			border-bottom: 1px #FFF solid;
			text-align: center;
			break-inside: avoid-column;

			&:last-child {
				border-bottom: none;
			}

			h3 {
				font-size: var(--ui-heading-font-size-2);
			}

			a {
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}

			@include breakpoint(lg) {
				text-align: left;
				border: none;
				padding-bottom: 50px;

				> * {
					margin-bottom: 32px;
				}

				h3 {
					font-size: 32px;
					margin-bottom: 50px;
				}

				&:nth-child(2n + 1) {
					border-bottom: 1px #FFF solid;
				}
			}
		}
	}
}

</style>
