<template>
  <v-layout
    row
    wrap
    justify-center
    fill-height
  >
    <v-flex
      class="main-contents"
      xs12
      sm6
    >
      <main-notice />
    </v-flex>
    <v-flex
      class="main-contents"
      xs12
      sm6
    >
     <main-event :event="event" />
    </v-flex>
    <v-flex xs12></v-flex>
    <v-flex v-for="icon in icons" :key="icon.title" class="main-contents" xs6 sm3 >
      <main-icon :data="icon"/>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import MainNotice from '~/components/MainNotice.vue'
import MainEvent from '~/components/MainEvent.vue'
import MainIcon from '~/components/MainIcon.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    MainNotice,
    MainEvent,
    MainIcon
  },

  data(){
    return {
      icons: [
        {
          title : '배달음식',
          imgUrl : require('../static/motorcycle.png'),
          redirectUrl : '/delivery',
          background : 'rgba(255, 179, 0, 0.25)',
        },
        {
          title : '카트대여',
          imgUrl :  require('../static/trolley.png'),
          redirectUrl : '/',
          background : 'rgba(102, 102, 92, 0.25)',
        },
        {
          title : '게시판',
          imgUrl :  require('../static/noticeboard.png'),
          redirectUrl : '/board',
          background : 'rgba(1, 80, 200, 0.25)',
        },
        {
          title : '신고',
          imgUrl :  require('../static/megaphone.png'),
          redirectUrl : '/',
          background : 'rgba(200, 1, 80, 0.25)',
        }
      ],
      event: {
        imgUrl :require('../static/event.jpg'),
        title : '⭐️숨겨진 맛집을 찾아서 - 배달음식 리뷰 ⭐️', 
      }
    }
  }
}
</script>
<style>
.main-contents {
  padding: 10px;
}
</style>

