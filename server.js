const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Ferengi Tanga Game!');
});

app.listen(port, () => {
  console.log(`Ferengi Tanga Game server listening at http://localhost:${port}`);
});

const rollDie = () => Math.floor(Math.random() * 6) + 1;

app.get('/play', (req, res) => {
  const player1Roll = rollDie();
  const player2Roll = rollDie();

  if (player1Roll > player2Roll) {
    res.send(`Player 1 wins with a roll of ${player1Roll} against Player 2's roll of ${player2Roll}`);
  } else if (player2Roll > player1Roll) {
    res.send(`Player 2 wins with a roll of ${player2Roll} against Player 1's roll of ${player1Roll}`);
  } else {
    res.send(`It's a draw, both players rolled a ${player1Roll}`);
  }
});
