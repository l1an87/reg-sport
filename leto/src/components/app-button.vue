<template>

	<button class="ui-button" :type="type" :disabled="disabled" :class="computedClass" @click.stop="handlerClick" v-ui-ripple>
		<slot></slot>
		<app-block-triangle></app-block-triangle>
	</button>


</template>

<script>
import {useLink} from "vue-router";
import UiRipple from "@/directives/ui-ripple.js";
import AppBlockTriangle from "@/components/app-block-triangle.vue";

export default {
	name: "app-button",
	components: {AppBlockTriangle},
	directives: {
		uiRipple: UiRipple
	},
	props: {
		type: {type: String, default: 'button'},
		disabled: {type: Boolean, default: false},
		to: {type: [String, Object], required: false},
	},
	computed: {
		computedRouter() {
			return this.to ? useLink({to: this.to}) : null;
		},
		computedClass() {
			return {
				'router-link-active': this.computedRouter ? this.computedRouter.isActive.value : false,
			}
		}
	},
	methods: {
		handlerClick($event) {
			if (this.computedRouter) {
				this.computedRouter.navigate();
			}
		},
	}
}
</script>