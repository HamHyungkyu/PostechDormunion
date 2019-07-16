<template>
  <v-card 
  class="delivery"
  flat>
  <v-card-title>
    <h1>배달음식</h1>
  </v-card-title>
   <v-tabs
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="(shops, category) in menus"
        :key="category"
        ripple
      >
      {{category}}
      </v-tab>
      <v-tab-item
        v-for="(shops, category) in menus"
        :key="category"
      >
      <v-card flat>
        <v-layout
          row
          wrap
          justify-start>
          <v-flex  class="mini-card" xs12 sm6 md4  v-for="shop in shops"  :key="shop.name">
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
      menus: 
        {
          중화음식:
           [
            {
              name : '홍운반점',
              rating : 3.4,
              numOfReview: 123,
              imgUrl: require('@/static/hongun.jpg'),
              tel: '054-279-2223'
            },
            {
              name : '홍운반점',
              rating : 3.4,
              numOfReview: 123,
              imgUrl: require('@/static/hongun.jpg'),
              tel: '054-279-2223'
            },
            {
              name : '홍운반점',
              rating : 3.4,
              numOfReview: 123,
              imgUrl: require('@/static/hongun.jpg'),
              tel: '054-279-2223'
            }
          ],
           정식: []
        }
    }
  },
  methods: {
  },
  asyncData(context) {
    return context.app.$axios.get('/api/delivery/list').then(function(res){
      console.log(res.data)
      return {'menus' : res.data}
    })
  }
}
</script>
