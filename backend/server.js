const express= require('express');
const policialRoutes = require('./routes/policialRoutes');
const cors= require('cors');
require('dotenv').config();


const app= express();

app.use(express.json());
app.use(cors({
  origin: '*', // libera para todas as origens
  credentials: true 
}));

app.use('/api', policialRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = Number(process.env.APP_PORT) || 3000;
app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}`));

module.exports= app;