<template>
  <div class="page">
    <b-list-group>
      <router-link class="my-router-link" to="/12/biology/year">
        <b-list-group-item id="entrance" class="m-2 mt-1 option">
          <img src="../assets/bacteria.svg" class="menu-icon" />
          Biology
        </b-list-group-item>
      </router-link>
      <router-link class="my-router-link" to="/12/biology/year">
        <b-list-group-item id="sixth" class="m-2 option">
          <img src="../assets/civics.svg" class="menu-icon" />
          Civics and Ethical Education
        </b-list-group-item>
      </router-link>
      <router-link class="my-router-link" to="/12/biology/year">
        <b-list-group-item id="eighth" class="m-2 option">
          <img src="../assets/perspective.svg" class="menu-icon" />
          Scholastic Apptitude (SAT)
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
  background-position-y: 50%;
}
#sixth:hover {
  background-image: url("../assets/exam-hand.jpg");
  background-size: cover;
  background-position-y: 50%;
}
#eighth:hover {
  background-image: url("../assets/apptitude.png");
  background-size: cover;
  background-position-y: 30%;
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
