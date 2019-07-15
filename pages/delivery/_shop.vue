<template>
  <v-layout
    row
    wrap
    justify-start>
    <v-flex xs12>
      <v-card xs12>
        <v-card-title>
          <v-layout row wrap>
            <v-flex xs12>
              <h1>{{$route.params.shop}}</h1>
            </v-flex>
            <v-flex xs4 sm3>
                <v-img  :aspect-ratio="1/1" width="100%" :src="shop.imgUrl"/>
            </v-flex>
            <v-flex xs8 sm9 style="padding-left: 10px">
              <v-icon>phone</v-icon> <a :tel="shop.tel">{{shop.info.tel}}</a><br/>
              <v-icon>star</v-icon>{{shop.info.rating}}<br/>
              <b>상태</b> {{shop.info.status}}<br/>
              <b>영업시간</b> {{shop.info.openingHour}} - {{shop.info.closingHour}}<br/>
              <b>메모</b>{{shop.info.memo}}
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12>
    <v-layout
          row
          wrap
          justify-start
        >
        <v-flex xs12 sm6 md4  class="mini-card"  v-for="food in shop.foods" :key="food.name">
          <food-card :food="food">
          </food-card>
        </v-flex>
      </v-layout>
    </v-flex>
    
  </v-layout>
</template>
<<script>
import FoodCard from '@/components/FoodCard.vue'
export default {
  components: {
    FoodCard
  },
  data() {
    return{
      shop: {
        foods: [{
          name: '짜장면',
          price: 4000,
          upvote: 4,
          downvote: 0,
          options: '겨울에만 합니다.',
          imgUrl: require('@/static/jajang.jpg'),
        }],
        imgUrl: require('@/static/hongun.jpg'),
        info: {
          status: 'OPEN',
          openingHour: '13:30:00',
          closingHour: '20:30:00' ,
          tel: '054-482-1233',
          rating: 3.4,
          memo: '',
        }
      }
    }
  }
}
</script>
