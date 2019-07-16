var express = require('express');
var router = express.Router();
var query = require('../db_query')
router.get('/list', function(req, res){
      //Database Select query 
      query.query('select name, category, tel, opening_hour, closing_hour from shop_list', function(err, rows){
      if(err){ 
        console.log(err)
        res.status(500)
        return
      }
      var data = {}
      //Category별 분류
      for(row of rows){
        if( data[row.category] === undefined){
          data[row.category] = []
        }
        data[row.category].push(row)
      }
      res.send(data)})
})

router.get('/detail', function(req, res){
  var shop = req.query.shop;
  query.query('select * from shop_list where name = \"' + shop + '\"', function(err, rows){
    var data = {}
    if(err){ 
      console.log(err)
      res.status(500)
      return
    }
    data.info = rows[0]
    data.foods = {}
    query.query('select * from food_list where shop = \"'+ shop + '\"', function(err, rows){
      for(row of rows){
        if(row.category === null) continue
        if( data.foods[row.category] === undefined){
          data.foods[row.category] = []
        }
        data.foods[row.category].push(row)
      }
      res.send(data)
    })
  })

})

module.exports = router;