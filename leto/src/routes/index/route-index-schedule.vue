<template>
	<div class="block no-pause" style="--background: #2747C4">

		<h2 id="schedule" class="title background">
			<app-svg-icon name="schedule"/>
			Расписание
		</h2>

		<div class="wrapper">

			<div class="row gutters">

				<div class="col col-12 col-lg-6">

					<div class="cell white text-center">
						<span>Вертолетная площадка</span>
					</div>

					<div class="cell outline">
						<span class="time">11:30 – 12:30</span>
						<span>Перетягивание каната</span>
					</div>

					<div class="cell outline">
						<span class="time">11:30 – 15:00</span>
						<span>Городки</span>
					</div>

					<div class="cell outline">
						<span class="time">13:00 – 13:40</span>
						<span>Семейная эстафета</span>
					</div>

					<div class="cell outline">
						<span class="time">14:00 – 15:00</span>
						<span>Эстафета, забег «Большие гонки»</span>
					</div>

				</div>

				<div class="col col-12 col-lg-6">

					<div class="cell white text-center">
						<span>Территория отеля "Изумрудный лес"</span>
					</div>

					<div class="cell outline">
						<span class="time">11:30 – 14:00</span>
						<span>Велоспорт</span>
					</div>

					<div class="cell white text-center">
						<span>СОК "Аквамарин"</span>
					</div>

          <div class="cell outline">
            <span class="time">10:00 – 15:30</span>
            <span class="small">Плавание, волейбол</span>
          </div>

					<div class="cell outline">
						<span class="time">11:30 – 15:30</span>
						<span class="small">Настольный теннис, стритбол, теннис, бадминтон, гиревой спорт</span>
					</div>

					<div class="cell outline">
						<span class="time">11:30 – 12:00</span>
						<span>"ЗабегЗаЛес"</span>
					</div>

				</div>

				<div class="col col-12">

					<div class="cell white text-center">
						<span>"Усадьба Охотника"</span>
					</div>

				</div>

				<div class="col col-12 col-lg-6">

					<div class="cell outline">
						<span class="time">11:30 – 15:30</span>
						<span class="small">Шахматы, дартс, стрельба из лука, практическая стрельба, домино, кросс</span>
					</div>

					<div class="cell outline">
						<span class="time">11:30 – 15:30</span>
						<span>Детская игровая зона</span>
					</div>

					<div class="cell outline">
						<span class="time">11:30 – 15:30</span>
						<span>Пляжный волейбол</span>
					</div>

				</div>

				<div class="col col-12 col-lg-6">

					<div class="cell outline">
						<span class="time">12:00 – 14:00</span>
						<span>Мини-футбол</span>
					</div>

					<div class="cell outline">
						<span class="time">12:50 – 13:45</span>
						<span>Спортивное ориентирование</span>
					</div>

				</div>

			</div>

		</div>

		<app-block-triangle></app-block-triangle>

	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AppBlockTriangle from "@/components/app-block-triangle.vue";
import AppSvgIcon from "@/components/app-svg-icon.vue";

export default defineComponent({
	name: "route-index-schedule",
	components: {
		AppSvgIcon,
		AppBlockTriangle
	}
})
</script>

<style scoped lang="scss">

@import "@ui/assets/style/mixins/breakpoints";

.cell {
	display: flex;
	margin-bottom: 48px;
	align-items: start;

	@include breakpoint(lg) {
		margin-bottom: 56px;
		max-height: 72px;
	}

	&.white {
		background: #FFF;
		color: var(--ui-color-primary);
	}

	&.outline span {
		outline: 2px #FFF solid;
	}

	span {
		display: flex;
		align-items: center;
		min-height: 72px;
		padding: 4px 18px;
		flex: 1;

		&.time {
			flex: 0 0 220px;
			flex-shrink: 0;
			margin-right: 24px;
			justify-content: center;
		}
	}

	@include breakpoint(sm) {
		flex-direction: column;
		padding: 18px;

		span {
			flex: auto;
			padding: 0;
			min-height: auto;

			&.time {
				flex: 0 0 auto;
				flex-shrink: 0;
				margin-right: 0;
				text-align: left;
			}
		}

		&.outline {
			outline: 2px #FFF solid;

			span {
				outline: none;
			}
		}
	}
}

</style>
