// Chamada das dependências
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server'); // dependência para auxiliar com o debug

// Função responsável por nomalizar a porta que a aplicação vai estar disponível
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)) return val;
    if(port >= 0) return port;

    return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

// Evento para tratar em caso de erro
function onError(error){
    if(error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' é necessário um level elevado de privilégios');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' já está em uso');
            process.exit(1);
            break;
        default:
            throw error;

    }
}

// Evento para quando o servidor conseguir se conectar com sucesso
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
    debug('Acessível em ' + bind);
}

// Abrir o servidor
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API acessível na porta ${port}!`)