/*
** 간단한 데이터베이스 커넥션 모듈
*/
var mysql = require('mysql');

module.exports = function(){
  var config = require('./db_config')
  var pool = mysql.createPool(config);
  return {
    getConnection : function(callback){
      pool.getConnection(callback)
    },
    end: function(callback){
      pool.end(callback)
    }
  }
}();

