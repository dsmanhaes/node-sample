import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.get('/participantes', (request, response) => {
  response.send('Hello participator!');
});

app.get('/teste', (request, response) => {
  response.send('Hello tester!');
});

app.get('/instrutor', (request, response) => {
  response.send('Hello instructor!');
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}!`);
});
