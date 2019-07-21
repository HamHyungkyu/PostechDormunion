var express = require('express');
var router = express.Router();
var query = require('../db_query')
router.get('/list', function(req, res){
      //Database Select query 
      query.query('select name, category, tel, opening_hour, closing_hour from shop_list WHERE is_deleted = 0 AND market_status = 0', function(err, rows){
      if(err){ 
        console.log(err)
        res.status(500)
        return
      }
      var data = {}
      //Category별 분류
      for(row of rows){
        row.status = calculateStatus(row)
        if( data[row.category] === undefined){
          data[row.category] = []
        }
        data[row.category].push(row)
      }
      res.send(data)})
})

router.get('/detail', function(req, res){
  var shop = req.query.shop;
  query.query('SELECT * FROM shop_list WHERE is_deleted = 0 AND name = \"' + shop + '\"', function(err, rows){
    var data = {}
    if(err){ 
      console.log(err)
      res.status(500)
      return
    }
    data.info = rows[0]
    data.info.status = calculateStatus(rows[0])
    data.foods = {}
    query.query('SELECT * FROM food_list WHERE is_deleted = 0 AND shop = \"'+ shop + '\"', function(err, rows){
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

//추천 1개 추가
router.get('/thumbup', function(req, res){
  var id = req.query.id
  if(!req.session.user){
    req.session.user = {
      ids : []
    }
  } 
  else if( req.session.user.ids.includes(id)){ //Session에 id가 이미 저장되어있면 중복불가
    res.status(200)
    res.send('DUPLLICATED_ID')
    return
  }
  query.query('UPDATE food_list SET thumb_up = thumb_up + 1 WHERE id = ' + id, function(err, result){
    if(err){
      res.status(400)
      res.send(err)
      return
    }
    req.session.user.ids.push(id)
    res.status(200)
    res.send('SUCCESS')
  })
})

//비추천 1개 추가
router.get('/thumbdown', function(req, res){
  var id = req.query.id
  if(!req.session.user){
    req.session.user = {
      ids : []
    }
  } 
  else if( req.session.user.ids.includes(id)){ //Session에 id가 이미 저장되어있면 중복불가
    res.status(200)
    res.send('DUPLLICATED_ID')
    return
  }
  query.query('UPDATE food_list SET thumb_down = thumb_down + 1 WHERE id = ' + id, function(err, result){
    console.log(result)
    if(err){
      res.status(400)
      res.send(err)
      return
    }
    req.session.user.ids.push(id)
    res.status(200)
    res.send('SUCCESS')
  })
})

var calculateStatus = function(row){
  var date = new Date()
  var hour = date.getHours()
  var minutes = date.getMinutes()
  var timeNow = hour * 60 + minutes

  var opening = row.opening_hour.split(':')
  var openTime = parseInt(opening[0])*60 + parseInt(opening[1])
  var closing = row.closing_hour.split(':')
  var closeTime = parseInt(closing[0]) * 60 + parseInt(closing[1])
  if (openTime > closeTime) {
    closeTime += 24 * 60
  }

  if(openTime <= timeNow && timeNow <= closeTime){
    return "영업중"
  }
  else{
    return "영업종료"
  }
}
module.exports = router;