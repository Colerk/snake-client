let connection;


const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  const handleUserInput = () => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      };
    });
  }

  // conn.on('conn', () => {
  //   conn.write("Move: up")
  // })

  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write("Move: up")
    };
    if (key === 'a') {
      conn.write("Move: left")
    };
    if (key === 's') {
      conn.write("Move: down")
    };
    if (key === 'd') {
      conn.write("Move: right")
    };
  });


  handleUserInput('data');
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  


  return stdin;


}



module.exports = setupInput;