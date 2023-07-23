import express from 'express';
import bodyParser from 'body-parser';
import db from './db.mjs';
import router from './routes/Products.mjs';

const port = 3000;


const app = express();


app.get('/test', async (req, res) => {
  const [rows] = await db.query('SELECT "Hello World!" as text');
  res.send(rows[0].text);
});




app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(router);
  


