<template>
<!-- 음식점 리스트에서 음식점 카드 클릭시, 배달업체 상세페이지로 이동 -->
  <v-card ripple class="dilivery-shop" :to="'/delivery/shop?shop='+shop.name">
    <v-layout 
    row>
      <v-flex class="thumb-nail" xs4>
        <v-img v-if="shop.imgUrl" :aspect-ratio="1/1" width="100%" :src="shop.imgUrl"/>
        <v-img v-else :aspect-ratio="1/1" width="100%" :src="require('@/static/foodshop.png')" />
      </v-flex>
      <v-flex class="shop-info" xs8>
        <h3><div class="text-truncate">{{shop.name}}</div></h3>
        <span>{{shop.status}}</span><br/>
        <v-icon>phone</v-icon> <a :tel="shop.tel">{{shop.tel}}</a><br/>
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
