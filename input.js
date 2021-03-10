const setupInput = function() {
  const stdin = process.stdin;
  const handleUserInput = () => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      };
    });
  }

  handleUserInput('data');
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = setupInput;