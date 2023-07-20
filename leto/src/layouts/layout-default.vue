<template>

	<!-- Header -->
	<layout-part-header></layout-part-header>

	<!-- Main -->
	<main>
		<router-view></router-view>
	</main>

	<!-- Footer -->
	<layout-part-footer></layout-part-footer>

</template>

<script>
import LayoutPartFooter from "@/layouts/parts/layout-part-footer.vue";
import LayoutPartHeader from "@/layouts/parts/layout-part-header.vue";
import {defineComponent} from 'vue'

export default defineComponent({
	name: "layout-default",
	components: {
		LayoutPartFooter,
		LayoutPartHeader,
	},
})
</script>

<style lang="scss" scoped>

main {
	flex: 1;
}

</style>