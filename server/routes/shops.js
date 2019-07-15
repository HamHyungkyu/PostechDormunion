var express = require('express');
var router = express.Router();

router.get('/list', function(req, res){
  var shops=  [
    {
      title : '중화음식',
      shops: [
        {
          title : '홍운반점',
          rating : 3.4,
          numOfReview: 123,
         // imgUrl: require('@/static/hongun.jpg'),
          tel: '054-279-2223'
        },
        {
          title : '홍운반점',
          rating : 3.4,
          numOfReview: 123,
         // imgUrl: require('@/static/hongun.jpg'),
          tel: '054-279-2223'
        },
        {
          title : '홍운반점',
          rating : 3.4,
          numOfReview: 123,
         // imgUrl: require('@/static/hongun.jpg'),
          tel: '054-279-2223'
        }
      ]
    },
    {
      title : '정식',
      shops: []
    }
  ]
  res.send(shops)
})

router.get('/detail', function(req, res){

})

module.exports = router;