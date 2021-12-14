<script>
import LoadingComponent from "./Loading.layout.vue";
import SingInComponent from "./SingIn.layout.vue";
import MainComponent from "./Main.layout.vue";

export default {
  render(h) {
    const { state } = this.$store;
    if (!state.isInit) {
      return h(LoadingComponent);
    }
    if (!state.isSingIn) {
      return h(SingInComponent);
    }

    return h(MainComponent);
  },
};
</script>
