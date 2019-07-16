var pool = require('./db_connection')

module.exports = function(){
  return {
    query: function(sql, callback){
      pool.getConnection(function(err, con){
        con.query(sql, function(err, rows, fields ){
          con.release();
          if(err) return callback(err);
          callback(null, rows);
        })
      })
    }
  }
}();