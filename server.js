<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ferengi Tanga Game</title>
</head>
<body>
    <h1>Ferengi Tanga Game</h1>
    <button id="play-button">Play</button>
    <p id="game-result"></p>

    <script>
        document.getElementById('play-button').addEventListener('click', function() {
            fetch('http://localhost:3000/play')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('game-result').textContent = data;
                })
                .catch(error => console.error('Error:', error));
        });
    </script>
</body>
</html>
