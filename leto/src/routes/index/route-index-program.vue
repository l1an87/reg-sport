<template>
	<div class="block" style="--background: #6883C1">

		<h2 id="program" class="title">Программа для гостей и болельщиков</h2>

		<div class="wrapper">

			<div class="row gutters">

				<div class="col col-12">
					<div class="cell white text-center">
						<span>Вертолетная площадка</span>
					</div>
				</div>

				<div class="col col-12 col-lg-6">
					<div class="cell primary">
						<span class="time">09:55 – 10:00</span>
						<span>Зарядка</span>
					</div>

					<div class="cell primary">
						<span class="time">10:00 – 10:50</span>
						<span>Открытие XIX летней спартакиады. Парад команд</span>
					</div>

					<div class="cell primary">
						<span class="time">11:00 – 16:20</span>
						<span>Детская игровая зона</span>
					</div>

					<div class="cell primary">
						<span class="time">11:35 – 12:35</span>
						<span>Соревнования по перетягиванию каната</span>
					</div>

					<div class="cell primary">
						<span class="time">12:55 – 13:25</span>
						<span>Семейная эстафета</span>
					</div>
				</div>

				<div class="col col-12 col-lg-6">

					<div class="cell outline">
						<span class="time">14:10 – 14:40</span>
						<span>1-й блок награждения</span>
					</div>

					<div class="cell outline">
						<span class="time">15:20 – 15:50</span>
						<span>2-й блок награждения</span>
					</div>

					<div class="cell outline">
						<span class="time">16:40 – 17:20</span>
						<span>3-й блок награждения</span>
					</div>

					<div class="cell outline">
						<span class="time">17:20 – 17:40</span>
						<span>Награждение за общекомандный зачет</span>
					</div>

				</div>

				<div class="col col-12">
					<div class="cell primary">
						<span class="time">17:40 – 17:45</span>
						<span>Закрытие XIX летней спартакиады</span>
					</div>
				</div>
			</div>

		</div>

		<!-- Triangle -->
		<app-block-triangle></app-block-triangle>

	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AppBlockTriangle from "@/components/app-block-triangle.vue";

export default defineComponent({
	name: "route-index-program",
	components: {
		AppBlockTriangle
	}
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

.cell {
	display: flex;
	margin-bottom: 48px;
	padding: 24px;

	&.primary {
		background:#001275;
		color: #FFF;
	}

	&.white {
		background: #FFF;
		color: var(--ui-color-primary);
	}

	&.outline {
		color: #001275;
		outline: 2px #001275 solid;
	}

	span {
		flex: 1;

		&.time {
			flex: 0 0 180px;
			flex-shrink: 0;
			margin-right: 15%;
			text-align: center;
		}
	}

	@include breakpoint(sm) {
		flex-direction: column;

		span {
			flex: auto;
			padding: 0;

			&.time {
				flex: 0 0 auto;
				flex-shrink: 0;
				margin-right: 0;
				text-align: left;
			}
		}
	}
}

</style>