# KubeGames
A free online gaming platform where users can play games directly in the browser without any downloads
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pelisivuni</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px;
        }

        .game-bar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        .game-bar {
            background-color: #4CAF50;
            color: white;
            font-size: 24px;
            width: 300px;
            margin: 10px;
            padding: 15px;
            text-align: center;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .game-bar:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Tervetuloa Pelisivulleni!</h1>
        <p>Paina palkkia aloittaaksesi pelin</p>
    </div>

    <div class="game-bar-container">
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli1'">
            Peli 1
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli2'">
            Peli 2
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli3'">
            Peli 3
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli4'">
            Peli 4
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli5'">
            Peli 5
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli6'">
            Peli 6
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli7'">
            Peli 7
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli8'">
            Peli 8
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli9'">
            Peli 9
        </div>
        <div class="game-bar" onclick="window.location.href='https://linkkisi.com/peli10'">
            Peli 10
        </div>
    </div>
</body>
</html>
