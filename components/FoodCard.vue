<template>
  <v-card class="dilivery-shop">
      <v-layout 
      row>
        <v-flex class="thumb-nail" xs4>
          <v-responsive :aspect-ratio="1/1">
            <v-avatar class="avatar" style="height: auto;" size="100%">
              <v-img v-if="food.imgUrl" :src="food.imgUrl"/>
              <v-img v-else :src="require('@/static/lunch-box.png')"/>
            </v-avatar>
          </v-responsive>
        </v-flex>
        <v-flex class="shop-info" xs8>
          <h3><div class="text-truncate">{{food.name}}</div></h3>
          <span>₩{{ food.price }}</span><br/>
          <div class="text-truncate">{{food.option}}</div><br/>
          <v-icon>thumb_up</v-icon>{{food.thumb_up}}<v-icon>thumb_down</v-icon>{{food.thumb_down}}
        </v-flex>
      </v-layout>
  </v-card>
</template>
<script>
export default {
  props : ['food']
}
</script>
<style>
.delvery-shop {
  max-height: 100%;
}
.thumb-nail {
  padding: 5px;
}
.shop-info {
  padding: 5px;
  width: 100%
}
</style>
