<template>
  <v-card flat xs12>
    <v-card-title>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>{{$route.query.shop}}</h1>
        </v-flex>
        <v-flex xs4 sm3>
            <v-img v-if="imgUrl" :aspect-ratio="1/1" width="100%" :src="imgUrl"/>
            <v-img v-else :aspect-ratio="1/1" width="100%" :src="require('@/static/foodshop.png')" />
        </v-flex>
        <v-flex xs8 sm9 style="padding-left: 10px">
          <v-icon>phone</v-icon> <a :tel="info.tel">{{info.tel}}</a><br/>
          <b>상태</b> {{info.status}}<br/>
          <b>영업시간</b> {{info.opening_hour}} - {{info.closing_hour}}<br/>
          <b>메모</b><span v-html="info.memo"></span>
        </v-flex>
      </v-layout> 
    </v-card-title>
     <v-divider></v-divider>
    <v-layout
      row
      wrap
      justify-start
      v-for="(menus, category) in foods" :key="category">
      <v-flex xs12><h2 style="padding-left: 10px"> {{category}}</h2></v-flex>
      <v-flex xs12 sm6 md4  class="mini-card"  v-for="food in menus" :key="food.name">
        <food-card :food="food">
        </food-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<<script>
import FoodCard from '@/components/FoodCard.vue'
export default {
  components: {
    FoodCard
  },
  data() {
    return{
      foods: {},
      info: {}
    }
  },
  computed: {
    status: function(){
      var date = new Date()
      var hour = date.getHours()
      var minutes = date.getMinutes()
      var timeNow = hour * 60 + minutes

      var opening = this.info.opening_hour.split(':')
      var openTime = parseInt(opening[0])*60 + parseInt(opening[1])
      var closing = this.info.closing_hour.split(':')
      var closeTime = parseInt(closing[0]) * 60 + parseInt(closing[1])
      if (openTime > closeTime) {
        closeTime += 24 * 60
      }
      console.log(timeNow)
      console.log(openTime)
            console.log(closeTime)
      if(openTime <= timeNow && timeNow <= closeTime){
        return "영업중"
      }
      else{
        return "영업종료"
      }
    }
  },
  asyncData(context) {
    return context.app.$axios('/api/delivery/detail?shop=' + context.query.shop).then(function(res){
       if(res.status !== 200){
         console.log(res)
         return {}
       }
       res.data.info.memo = res.data.info.memo.replace(/(?:\r\n|\r|\n)/g, '<br />')
       return res.data
    })
  },

}
</script>
