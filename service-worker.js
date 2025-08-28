<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fusion</title>
  <link rel="manifest" href="manifest.json">
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #111;
      color: white;
      text-align: center;
      padding: 20px;
    }
    header {
      font-size: 28px;
      font-weight: bold;
      color: #ffcc00;
      margin-bottom: 20px;
    }
    audio {
      margin-top: 20px;
      width: 100%;
      max-width: 400px;
    }
  </style>
</head>
<body>
  <header>FUSION FM</header>
  <p>🎶 Tocando Agora</p>
  <audio controls autoplay>
    <source src="https://stream.zeno.fm/5h2m1muayy8uv" type="audio/mpeg">
    Seu navegador não suporta áudio.
  </audio>
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js');
    }
  </script>
</body>
</html>