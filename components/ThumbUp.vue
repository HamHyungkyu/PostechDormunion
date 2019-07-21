<template>
  <v-dialog v-model="dialog" width="300">
    <template v-slot:activator="{ on }">
      <v-btn flat round small color="#1A237E" v-on="on">
        <v-icon blue>thumb_up</v-icon> {{food.thumb_up}}
      </v-btn> 
    </template>
    <v-card>
      <v-card-title>
        <h3>추천하시겠습니까?</h3>
      </v-card-title>
      <v-card-actions>
        <v-btn flat @click="thumbUp">
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
    thumbUp(){
      var app = this
      this.$axios('/api/delivery/thumbup?id=' + this.food.id)
      .then(function(res){
        if(res.data === 'SUCCESS'){
          app.food.thumb_up += 1
        }
        else {
          alert('중복된 요청입니다.')
        }
      })
      .catch(function(err){
        alert(err)
      })
      this.dialog = false
    }
  }
}
</script>
<style>

</style>
