const mysql = require('mysql2');
const pool = mysql.createPool({
  host: "localhost",
  user: "mubasshir",
  password: "Mubasshir#00",
  database: "test_live_stream",
});

let sql = "SELECT * FROM users";
pool.execute(sql,function(err,result){
    if(err) {
        console.log(err);
    } 
    console.log(result);
})

module.exports = pool