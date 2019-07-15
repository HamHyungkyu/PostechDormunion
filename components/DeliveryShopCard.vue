<template>
  <v-card ripple class="dilivery-shop" :to="'/delivery/'+shop.title">
    <v-layout 
    row>
      <v-flex class="thumb-nail" xs4>
        <v-img  :aspect-ratio="1/1" height="100%" :src="shop.imgUrl"/>
      </v-flex>
      <v-flex class="shop-info" xs8>
        <h3>{{shop.title}}</h3>
        <v-icon>phone</v-icon> <a :tel="shop.tel">{{shop.tel}}</a><br/>
        <v-icon>star</v-icon>{{shop.rating}}
      </v-flex>
    </v-layout>
  </v-card>
</template>
<<script>
export default {
  props: [
    'shop'
  ]
}
</script>
<style>
.shop-info {
  padding: 10px;
  justify-content: center;
  align-content: center;
}
</style>
