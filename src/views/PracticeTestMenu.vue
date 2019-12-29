<template>
  <div class="page">
    <b-list-group>
      <router-link class="my-router-link" to="/grade/12">
        <b-list-group-item id="entrance" class="m-2 mt-1 option">
          <img src="../assets/test.svg" class="menu-icon" />
          Entrance
        </b-list-group-item>
      </router-link>
      <router-link class="my-router-link" to="/grade/6">
        <b-list-group-item id="sixth" class="m-2 option">
          <img src="../assets/test.svg" class="menu-icon" />
          6<sup>th</sup> Grade National Exam
        </b-list-group-item>
      </router-link>
      <router-link class="my-router-link" to="/grade/8">
        <b-list-group-item id="eighth" class="m-2 option">
          <img src="../assets/test.svg" class="menu-icon" />
          8<sup>th</sup> Grade National Exam
        </b-list-group-item>
      </router-link>
    </b-list-group>
  </div>
</template>
<script>
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
#sixth:hover {
  background-image: url("../assets/exam-hand.jpg");
  background-size: cover;
  background-position-y: 60%;
}
#eighth:hover {
  background-image: url("../assets/exam-hand.jpg");
  background-size: cover;
  background-position-y: 60%;
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
