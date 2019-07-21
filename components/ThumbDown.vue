<template>
  <v-dialog v-model="dialog" width="300">
    <template v-slot:activator="{ on }">
      <v-btn flat round small color="#BF360C" v-on="on">
        <v-icon>thumb_down</v-icon> {{food.thumb_down}}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h3>비추천하시겠습니까?</h3>
      </v-card-title>
      <v-card-actions>
        <v-btn flat @click="thumbDown">
          YES
        </v-btn>
        <v-btn flat @click="dialog = false">
          NO
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<<script>
export default {
  props: ['food'],
  data(){
    return{
      dialog : false
    }
  },
  methods: {
    thumbDown(){
      var app = this
      this.$axios('/api/delivery/thumbdown?id=' + this.food.id).then(function(res){
        if(res.status === 200){
          app.food.thumb_down += 1
        }
      })
      this.dialog = false
    }
  }
}
</script>
<style>

</style>
