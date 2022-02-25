require('dotenv').config();
import Koa from 'koa';

const app = new Koa();

const server = app.listen(8080);