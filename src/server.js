import express from "express"; // Importa o módulo express, que é um framework para construir aplicações web em Node.js.
import { config } from "dotenv"; // Importa a função config do módulo dotenv, que carrega variáveis de ambiente de um arquivo .env.
import rotas from "./routes/indexRoutes.js"; // Importa as rotas definidas em um arquivo externo.

config(); // Executa a função config para carregar as variáveis de ambiente do arquivo .env.

const portaServidor = process.env.PORT || 4000; // Define a porta do servidor, usando a variável de ambiente PORT se estiver definida, ou 4000 como padrão.
const app = express(); // Cria uma instância da aplicação Express.

app.use(express.json()); // Middleware que permite que a aplicação interprete requisições com o corpo em formato JSON.
app.use(rotas); // Middleware que registra as rotas importadas para que sejam usadas pela aplicação.

app.listen(portaServidor, () => { // Inicia o servidor e faz com que ele escute na porta definida.
  console.log(`🎉 Servidor iniciado em http://localhost:${portaServidor} 🎉`); // Exibe uma mensagem no console indicando que o servidor está em execução e em qual URL pode ser acessado.
});