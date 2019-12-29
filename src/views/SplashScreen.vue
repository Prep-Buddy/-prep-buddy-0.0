<template>
  <div class="splash pt-5">
    <h5 class="quote col-11 mx-auto mt-5 mb-5">{{ quote }}</h5>
    <p class="person">
      <i
        ><small>{{ person }}</small></i
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: null,
      person: null
    };
  },
  mounted: function() {
    fetch("https://type.fit/api/quotes", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        var rand = parseInt(Math.random() * (300 - 1) + 1);
        this.quote = jsonData[rand].text;
        this.person = jsonData[rand].author;
      })
      .catch(err => {
        this.quote =
          "Prep Buddy Prep Buddy Prep Buddy Prep Buddy Prep Buddy Prep Buddy ";
        this.person = "Prep Buddy Prep Buddy ";
        
      });
  }
};
</script>

<style scoped>
.quote {
  font-family: "Caveat", cursive;
  color: white;
}
.person {
  font-family: "Caveat", cursive;
  color: white;
}
.splash {
  background: purple;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
}
</style>
