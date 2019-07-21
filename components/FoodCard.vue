<template>
  <v-card class="dilivery-shop">
    
      <v-layout row>
        <v-flex class="thumb-nail" xs4>
          <v-responsive :aspect-ratio="1/1">
            <v-avatar class="avatar" style="height: auto;" size="100%">
              <v-img v-if="food.imgUrl" :src="food.imgUrl"/>
              <v-img v-else :src="require('@/static/lunch-box.png')"/>
            </v-avatar>
          </v-responsive>
        </v-flex>
        <v-flex xs8>
          <div class="shop-info">
            <h3><div class="text-truncate">{{food.name}}</div></h3>
            <span>₩{{ food.price }}</span><br/>
            <div class="text-truncate">{{food.option}}</div>
          </div>
          <div class="recommand">
            <thumb-up :food="food"/>
            <thumb-down :food="food"/>
          </div>
        </v-flex>
      </v-layout>
  </v-card>
</template>
<script>
import ThumbUp from '@/components/ThumbUp'
import ThumbDown from '@/components/ThumbDown'

export default {
  props : ['food'],
  components: {
    ThumbUp,
    ThumbDown
  }
}
</script>
<style>
.dilivery-shop {
  height: 100%;
}
.thumb-nail {
  padding: 5px;
}
.shop-info {
  padding: 5px;
}
.recommand {
  position: absolute;
  bottom: 5px;
  right: 10px;
}
</style>
