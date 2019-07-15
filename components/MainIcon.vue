<template>
<v-layout
  class="main-icon"
    row
    wrap
    justify-center
    align-center
  >
  <v-flex xs12>
    <v-btn depressed class="main-icon-btn" style="width: 100%; height: auto;" :color="data.background" :to="data.redirectUrl">
      <img style="width: 100%" :src="data.imgUrl"/>
    </v-btn>
  </v-flex>
  <v-flex class="main-icon-name" xs12>
    <span><h4>{{ data.title }}</h4></span>
  </v-flex>
</v-layout>

</template>
<<script>
export default {
  props: ['data']
}
</script>
<style>
.main-icon{
  width: 100%;
}
.main-icon-btn{
  margin-left: 0px;
  margin-top: 0px;
  padding: 0px;
}
.main-icon-name{
  text-align: center;
  text-justify: center;

}
</style>
