# KubeGames
A free online gaming platform where users can play games directly in the browser without any downloads
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KubeGames - Pelisivusi</title>
    <style>
        /* Taustaväri ja yleinen ulkoasu */
        body {
            background-color: #1E90FF; /* Sininen tausta */
            font-family: Arial, sans-serif;
            color: white;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .header {
            text-align: center;
            padding: 20px;
            margin-bottom: 30px;
        }

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.2rem;
        }

        /* Palkkien muotoilu */
        .game-bar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
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

        /* Responsiivisuus */
        @media (max-width: 600px) {
            .game-bar {
                width: 80%;
                font-size: 20px;
            }

            h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Tervetuloa KubeGames-pelisivullesi!</h1>
        <p>Valitse alla olevista palkkeista peli aloittaaksesi.</p>
    </div>

    <div class="game-bar-container">
        <!-- Palkit, jotka vievät eri peleihin -->
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
