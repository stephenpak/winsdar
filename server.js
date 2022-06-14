const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

import bodyParser from 'body-parser';
//import product routes from product.js
import productRoutes from './controller/product.js';

app.use(bodyParser.json());
app.use('/product', productRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http//localhost:${PORT}`);
  });
});
