require('@babel/register')({
  ignore: ['node_modules'],
});

const express = require('express');
const config = require('./config');
const apiRouter = require('./api');
const appRouter = require('./app');

const app = express();

// Configuraciones de express
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(config.static));

// Asignar middlewares globales
// app.use(bodyParser);

app.use('/api', apiRouter);
app.use(appRouter);

app.listen(config.PORT, () => {
    console.log('Aplicación levantanda')
});