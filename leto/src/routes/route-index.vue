<template>

	<!-- Расписание -->
	<route-index-schedule></route-index-schedule>

	<!-- Программа для гостей и болельщиков -->
	<route-index-program></route-index-program>

	<!-- Карты и схемы -->
	<route-index-map></route-index-map>

	<!-- Результаты -->
	<route-index-result></route-index-result>

	<!-- Прямые включения -->
	<route-index-stream></route-index-stream>

</template>

<script lang="ts">
import RouteIndexMap from "@routes/index/route-index-map.vue";
import RouteIndexProgram from "@routes/index/route-index-program.vue";
import RouteIndexResult from "@routes/index/route-index-result.vue";
import RouteIndexSchedule from "@routes/index/route-index-schedule.vue";
import RouteIndexStream from "@routes/index/route-index-stream.vue";
import {defineComponent} from 'vue'
import {useSeoMeta} from "@vueuse/head";

export default defineComponent({
	name: "route-index",
	components: {
		RouteIndexMap,
		RouteIndexProgram,
		RouteIndexResult,
		RouteIndexSchedule,
		RouteIndexStream
	},
	created() {
		useSeoMeta({title: 'XIX летняя спартакиада'});
	}
})
</script>

<style scoped lang="scss">

</style>
