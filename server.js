import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import Replicate from 'replicate';

dotenv.config();

const app = express();
app.use(express.json());

// SERVIRE LA PAGINA HTML FRONTEND
app.use(express.static('public'));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

const brandDatabase = {};

// ... (lascia inviariati gli endpoint /api/brand/setup e /api/post/generate messi in precedenza) ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 App attiva su http://localhost:${PORT}`);
});
