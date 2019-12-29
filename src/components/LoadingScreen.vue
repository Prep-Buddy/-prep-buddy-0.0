<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="splash pt-5">
      <img class="logo" src="../assets/prepbudS.png" />
      <h4 class="quote col-11 mx-auto">{{ quote }}</h4>
      <h5 class="person">
        <i
          ><small>{{ person }}</small></i
        >
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"],
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

<style>
.loader {
  background-color: #63ab97;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 2s forwards;
}
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

.logo {
  height: 25px;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
