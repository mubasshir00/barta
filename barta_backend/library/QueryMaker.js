const db = require("../config/mysql");

const Update = (table, data, where) => {
  console.log({ data });
  console.log({where});
  var update_sql =
    `Update ${table} SET ` +
    Object.keys(data)
      .map(key => `${key} = ?`)
      .join(`, `) +
    ` WHERE ` +
    Object.keys(where)
      .map(key => `${key} = ?`)
      .join(` AND `);

  const parameters = [...Object.values(data), ...Object.values(where)];

  console.log({update_sql});
  console.log({parameters});
  return new Promise((resolve, reject) => {
    db.execute(update_sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log({result});
    });
  });
};


Create = (table, data) => {
  var insert_sql =
    "INSERT INTO " +
    table +
    "(" +
    Object.keys(data) +
    ") VALUES (" +
    Object.keys(data).map(key => `?`) +
    ")";
  const parameters = [...Object.values(data)];

  return new Promise((resolve, reject) => {
    db.getConnection("WRITE", (err, connection) => {
      connection.query(insert_sql, parameters, (error, results) => {
        connection.release();
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  });
};

Select = query => {
  return new Promise((resolve, reject) => {
    db.getConnection("READ*", "RANDOM", function (err, connection) {
      connection.query(
        { sql: query, timeout: timeConfig },
        function (error, results) {
          //connection.query(query, (error, results)=>{
          connection.release();
          if (error) {
            return reject(error);
          }
          return resolve(results);
        }
      );
    });
  });
};

First = query => {
  // console.log({ query });
  return new Promise((resolve, reject) => {
    db.getConnection("READ*", "RANDOM", function (err, connection) {
      connection.query(
        { sql: query, timeout: timeConfig },
        function (error, results) {
          //connection.query(query, (error, results)=>{
          connection.release();
          if (error) {
            return reject(error);
          }
          return resolve(results[0]);
        }
      );
    });
  });
};

FirstFromMasterDB = query => {
  return new Promise((resolve, reject) => {
    db.getConnection("WRITE", function (err, connection) {
      connection.query(
        { sql: query, timeout: timeConfig },
        function (error, results) {
          //connection.query(query, (error, results)=>{
          connection.release();
          if (error) {
            return reject(error);
          }
          return resolve(results[0]);
        }
      );
    });
  });
};

CallSP = (sp_name, data) => {
  var insert_sql =
    "CALL " + sp_name + "(" + Object.keys(data).map(key => `?`) + ")";
  const parameters = [...Object.values(data)];
  return new Promise((resolve, reject) => {
    db.getConnection("WRITE", (err, connection) => {
      connection.query(insert_sql, parameters, (error, results) => {
        connection.release();
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  });
};

Increment = (table, data, where) => {
  var update_sql =
    `Update ${table} SET ` +
    Object.keys(data)
      .map(key => `${key} = ${key} + ?`)
      .join(`, `) +
    ` WHERE ` +
    Object.keys(where)
      .map(key => `${key} = ?`)
      .join(` AND `);
  const parameters = [...Object.values(data), ...Object.values(where)];

  return new Promise((resolve, reject) => {
    db.getConnection("WRITE", (err, connection) => {
      connection.query(update_sql, parameters, (error, results) => {
        connection.release();
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  });
  // return update_sql;
};

Decrement = (table, data, where) => {
  var update_sql =
    `Update ${table} SET ` +
    Object.keys(data)
      .map(key => `${key} = ${key} - ?`)
      .join(`, `) +
    ` WHERE ` +
    Object.keys(where)
      .map(key => `${key} = ?`)
      .join(` AND `);
  const parameters = [...Object.values(data), ...Object.values(where)];

  return new Promise((resolve, reject) => {
    db.getConnection("WRITE", (err, connection) => {
      connection.query(update_sql, parameters, (error, results) => {
        connection.release();
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  });
  // return update_sql;
};

CustomeSQL = query => {
  return new Promise((resolve, reject) => {
    db.getConnection("WRITE", (err, connection) => {
      connection.query(query, (error, results) => {
        connection.release();
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  });
};

module.exports = {
  Update,
  Create,
  Select,
  CallSP,
  Increment: Increment,
  Decrement: Decrement,
  CustomeSQL: CustomeSQL,
  First: First,
  FirstFromMasterDB: FirstFromMasterDB,
};
