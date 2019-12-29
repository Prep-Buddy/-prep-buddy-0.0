<template>
  <div id="app"  @click.prevent="pageSeen">
    <Menu v-if="firstPage"/>
    <router-view v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex"
import Menu from "@/views/Menu.vue";

export default {
  components: {
    Menu
  },
  computed: {
    ...mapState(["firstPage"])
  },
  methods: {
    pageSeen: function() {
      this.firstPageSeen();
    },
    ...mapActions(["firstPageSeen"])
  }, mounted(){
    this.$router.push("/")
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}

html,
body,
#root {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #e1e2e1 !important;
}
</style>
