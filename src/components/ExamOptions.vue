<template>
  <div class="page">
    <b-form>
      <label class="col-1 mx-auto px-auto pt-5 d-block pref" for="form-custom-select-pref"
        >Preference</label
      >
      <br>
      <b-form-select
        class="mb-2 d-block col-8 mx-auto"
        :value="null"
        :options="{
          '10': 'Ten',
          '20': 'Twenty',
          '35': 'Thirty Five',
          '100': 'All'
        }"
        id="form-custom-select-pref"
      >
        <template v-slot:first>
          <option :value="null">Choose...</option>
        </template>
      </b-form-select>

      <b-button variant="white" class="white-button col-2 px-auto mx-auto d-block">Save</b-button>
    </b-form>
  </div>
</template>

<style scoped>
.page{
  background-color: black;
  height: 100vh;
} .pref{
  color: white;
} .white-button{
  background-color: white;
  color: black;
}
</style>
