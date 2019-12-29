<template>
  <div class="page">
    <b-list-group>
      <router-link
        class="my-router-link item"
        tabIndex="1"
        to="/grades"
        :nav-selectable="true"
      >
        <b-list-group-item id="entrance" class="m-2 mt-1 option">
          <img src="../assets/stack-of-paper-outline.svg" class="menu-icon" />
          Practice Tests
        </b-list-group-item>
      </router-link>
      <router-link
        class="my-router-link item"
        tabIndex="2"
        to="/flashcards"
        :nav-selectable="true"
      >
        <b-list-group-item id="flash" class="m-2 option">
          <img src="../assets/vocabulary.svg" class="menu-icon" />
          Flash Cards
        </b-list-group-item>
      </router-link>
      <router-link
        class="my-router-link item"
        tabIndex="3"
        to="/careers"
        :nav-selectable="true"
      >
        <b-list-group-item id="eighth" class="m-2 option">
          <img src="../assets/guide.svg" class="menu-icon" />
          Career Guide
        </b-list-group-item>
      </router-link>
    </b-list-group>
  </div>
</template>
<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.menu-icon {
  height: 30px;
  margin-right: 10px;
}
.my-router-link:hover {
  text-decoration: none;
}
#entrance:hover {
  background-image: url("../assets/exam-hand.jpg");
  background-size: cover;
  background-position-y: 60%;
}
#flash:hover {
  background-image: url("../assets/flash-cards.jpg");
  background-size: cover;
  background-position-y: 60%;
}
#eighth:hover {
  background-image: url("../assets/career-guide.png");
  background-size: cover;
  background-position-y: 20%;
}
.page {
  background-color: black;
  height: 100vh;
}
.option {
  /* opacity: .5; */
  margin-bottom: 0px !important;
  text-decoration: none;
  background-color: #a9a9a9a4;
  color: white;
  text-align: left !important;
}
.option:hover {
  /*  */
  text-decoration: none !important;
}
</style>
