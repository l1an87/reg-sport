<template>
	<component :is="computedLayout"/>
</template>

<script>
import mapValues from "lodash/mapValues.js";
import mapKeys from "lodash/mapKeys.js";
import get from "lodash/get.js";
import {defineComponent} from "vue";

const globLayoutComponents = import.meta.glob('./layouts/*.vue', {eager: true});

export default defineComponent({
	name: 'App',
	components: mapValues(mapKeys(globLayoutComponents, (v, k) => {
		return k.split('/').pop().replace(/\.\w+$/, '');
	}), c => c.default),
	computed: {
		computedLayout() {
			return 'layout-' + get(this.$route.meta, 'layout', 'default');
		},
	}
});
</script>

<style lang="scss">

@import "@ui/assets/style/style";
@import "@assets/style/style";

</style>