// Importamos el módulo 'net' que permite trabajar con redes TCP en Node.js
const net = require('net');

// net.createServer() crea un servidor TCP.
// Cada vez que un cliente se conecta, se ejecuta esta función
// y se crea un objeto 'socket' que representa esa conexión.
const server = net.createServer((socket) => {

    console.log('Cliente conectado');

    // Mostramos la dirección IP del cliente conectado
    console.log('IP del cliente:', socket.remoteAddress);

    // Mostramos el puerto del cliente
    console.log('Puerto del cliente:', socket.remotePort);

    // Este evento se ejecuta cuando el cliente envía datos al servidor
    socket.on('data', (data) => {

        // Convertimos los datos a texto para poder leerlos
        console.log('Datos recibidos:', data.toString());

        // socket.write() envía datos desde el servidor al cliente
        // En este caso devolvemos el mensaje recibido (Echo Server)
        socket.write('[ECHO-SERVER] > ' + data);
    });

    // Este evento se ejecuta cuando el cliente finaliza la conexión
    socket.on('end', () => {
        console.log('Cliente desconectado con evento end');
    });

    // Este evento se ejecuta cuando la conexión se cierra completamente
    socket.on('close', () => {
        console.log('Conexión cerrada con evento close');
    });
});

// server.listen() pone al servidor a escuchar conexiones en un puerto
server.listen(3000, () => {

    // server.address() devuelve la dirección y puerto del servidor
    const address = server.address();

    console.log('Servidor iniciado correctamente');
    console.log('Dirección:', address.address);
    console.log('Puerto:', address.port);
});