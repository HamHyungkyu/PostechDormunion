<template>
  <v-card class="dilivery-shop">
    <v-layout 
    row>
      <v-flex class="thumb-nail" xs4>
        <v-img  :aspect-ratio="1/1" height="100%" :src="food.imgUrl"/>
      </v-flex>
      <v-flex class="shop-info" xs8>
        <h3>{{food.name}}</h3>
        <h4>₩{{ food.price }}</h4>
        <span class="option">{{food.options}}</span><br/>
        <v-icon>thumb_up</v-icon>{{food.upvote}}<v-icon>thumb_down</v-icon>{{food.downvote}}
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  props : ['food']
}
</script>
