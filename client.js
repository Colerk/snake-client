
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function(data) {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Your in baby!')
    conn.write("Name: CK")
  })


  return conn;
}

module.exports = connect;