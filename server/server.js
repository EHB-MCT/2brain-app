const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');



const app = express();

app.use(express.json());

app.use(cors());

// const apiKey = "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";
// const openai = new OpenAI(apiKey);

app.post('/api/ai-response', async (req, res) => {
  console.log("Received request:", req.body);
  // try {
  //   const prompt = req.body.prompt;
  //   console.log("Received prompt:", prompt);

  //   const aiResponse = await openai.createCompletion({
  //     prompt: prompt,
  //     max_tokens: 50
  //   });

  //   res.status(200).json(aiResponse.data.choices[0].text);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send(error);
  // }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
