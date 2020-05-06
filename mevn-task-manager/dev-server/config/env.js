import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export function setEnvironment(app){
  if(process.env.NODE_ENV!=='production'){
    setDevEnv(app);
  }else{
    setProdEnv(app);
  }
}

function setDevEnv(app){
  process.env.NODE_ENV = 'development';
  process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
  process.env.TOKEN_SECRET = '27946982a9a4408996607fe95a6299f9';
}

function setProdEnv(app){
  process.env.NODE_ENV = 'production';
  process.env.DB_URL = 'mongodb+srv://mevntaskmanager:mevnpassword@mevntaskmanager-yg9xv.mongodb.net/test';
  process.env.TOKEN_SECRET = '9f4d50bfa6b2450a9ec766fc5104948e';
  app.use(express.static(__dirname + '/../../dist'));
  app.use(bodyParser.json());
}
