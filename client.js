
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

  // message on entering

  conn.on('connect', () => {
    console.log('Your in baby!')
    conn.write("Name: CK")
  })

  //movement block

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 300)
  // });



  return conn;
}

module.exports = connect;