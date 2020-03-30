const express = require('express');
const app = express();

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Test2 = require('./src/Test_2.jsx');

app.get('/',(req,res)=>{
    var html1 = ReactDOMServer.renderToString(
        React.createElement(Test2)
    );
    res.send(html1);
});

app.listen(3000,function(){
    console.log('server on port 3000');
});
//se encarga de ejecutar express y enviarle a nuestro
//cliente todo lo que esta en la carpeta public