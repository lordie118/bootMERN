const { HfInference } = require('@huggingface/inference');
require('dotenv').config();
const hf = new HfInference({
    apiKey: process.env.HUGGING_FACE_API_KEY
});
module.exports = hf;
