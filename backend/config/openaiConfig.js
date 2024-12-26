// const {Configuration,OpenAIApi} = require('openai')

// require('dotenv').config()

// const configuration =new Configuration({
//     apiKey : process.env.OPENAI_API_KEY
// })

// const openai = new OpenAIApi(configuration)

// module.exports = openai
// const { OpenAI } = require('openai'); // Assurez-vous d'importer OpenAI, pas Configuration

// require('dotenv').config();

// // Créez une instance de OpenAI
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// module.exports = openai;
const { GoogleGenerativeAI } = require('@google/generative-ai');

require('dotenv').config();

// Créez une instance de OpenAI
const genAI = new GoogleGenerativeAI(
   process.env.OPENAI_API_KEY
)

module.exports = genAI;
