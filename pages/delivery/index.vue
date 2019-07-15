<template>
  <v-card 
  flat>
  <v-card-title>
    <h1>배달음식</h1>
  </v-card-title>
   <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="menu in menus"
        :key="menu.title"
        ripple
      >
        {{menu.title}}
      </v-tab>
      <v-tab-item
        v-for="menu in menus"
        :key="menu.title"
      >
      <v-card flat>
        <v-layout
          row
          wrap
          justify-start>
          <v-flex  class="mini-card" xs12 sm6 md4  v-for="shop in menu.shops"  :key="shop.title">
            <dilivery-shop-card :shop="shop"/>
          </v-flex>
        </v-layout>
      </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>

</template>
<script>
import DiliveryShopCard from '@/components/DeliveryShopCard.vue'

export default {
  components : {
    DiliveryShopCard
  },
  data() {
    return {
      menus: [
        {
          title : '중화음식',
          shops: [
            {
              title : '홍운반점',
              rating : 3.4,
              numOfReview: 123,
              imgUrl: require('@/static/hongun.jpg'),
              tel: '054-279-2223'
            },
            {
              title : '홍운반점',
              rating : 3.4,
              numOfReview: 123,
              imgUrl: require('@/static/hongun.jpg'),
              tel: '054-279-2223'
            },
            {
              title : '홍운반점',
              rating : 3.4,
              numOfReview: 123,
              imgUrl: require('@/static/hongun.jpg'),
              tel: '054-279-2223'
            }
          ]
        },
        {
          title : '정식',
          shops: []
        }
      ]
    }
  },
  mounted(){
    $axios.get('/api/shops/list').then(function(data){
      console.log(data)
    })
  }
}
</script>
