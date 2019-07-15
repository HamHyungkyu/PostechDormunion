<template>
  <v-card flat >
    <v-card-title>
      <h2>이달의 행사</h2>
    </v-card-title>

    <v-img :src="event.imgUrl" height="400px" contain/>

    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      <h4>{{ event.title }}</h4>            
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    props: [
      'event'
    ],
    data () {
      return {
      }
    }
  }
</script>
