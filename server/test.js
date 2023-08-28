const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = "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";
console.log("API Key:", apiKey);

const axios = require('axios');
const port = 3001;

app.use(cors());



async function getOpenAICompletion(model, messages, temperature) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model,
      messages,
      temperature,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`, // Replace with your own API key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

app.post('/getAdvice', async (req, res) => {
  
  try {
    const model = "gpt-3.5-turbo";
    
    const userNeeds = req.body.prompt
    console.log("User needs: ", userNeeds);
    console.log("User needs promt: ", req.body);
    console.log("User needs promt-2: ", req.body.prompt);
    console.log("User needs promt-3: ", req.body.prompt[0]);
    console.log("User needs promt-4: ", req.body.prompt[1]);

    const messages = [
      {
        "role": "system",
        "content": "You're an Artificial intelligence program adviser, give 6 apps based on the users needs. answer back with the name, description (Max 3 sentences) en google search link with name after. you're answer will be in a json array called apps,  each app will be returned in a json object containing. name, description and link. "
      },
      {
        "role": "user",
        "content": userNeeds
      },
    ];
    // const temperature = 1;

    // const response = await getOpenAICompletion(model, messages, temperature);
    
    // console.log("Data from API: ", JSON.stringify(response, null, 2));
    // const assistantMessage = JSON.parse(response.choices[0].message.content);
    // console.log("Assistant message: ", assistantMessage);
    const assistantMessage = {
      "apps": [
        
            {
              name: 'Adobe Illustrator',
              description: 'Adobe Illustrator is a vector graphics editor that can be used to create high-quality video animations and motion graphics. It offers a wide range of tools and features for creating stunning visuals.',
              link: 'https://www.adobe.com/products/illustrator.html'
            },
            {
              name: 'Powtoon',
              description: 'Powtoon is a cloud-based platform that enables users to create animated videos and presentations with ease. It offers a variety of pre-designed templates, characters, and animation effects to make video creation a breeze.',
              link: 'https://www.powtoon.com/'
            },
            {
              name: 'Vyond',
              description: 'Vyond (formerly GoAnimate) is an online video animation tool that allows users to create professional animated videos without the need for advanced design skills. It offers a library of customizable characters, templates, and drag-and-drop features to simplify the video creation process.',
              link: 'https://www.vyond.com/'
            },
            {
              name: 'Animaker',
              description: 'Animaker is a DIY animation software that enables users to create animated videos, infographics, and other visual content. It offers a user-friendly interface, a wide range of pre-animated characters, and a variety of customizable templates to help users bring their ideas to life.',
              link: 'https://www.animaker.com/'
            },
            {
              name: 'Moovly',
              description: 'Moovly is an online video creation platform that allows users to create animated videos, presentations, and other multimedia content. It offers a library of templates, stock images, and audio files, as well as a drag-and-drop interface for easy video editing.',
              link: 'https://www.moovly.com/'
            },
            {
              name: 'Biteable',
              description: 'Biteable is a video maker that enables users to create professional-looking videos using customizable templates, animated scenes, and stock footage. It offers a simple drag-and-drop interface and a library of ready-to-use assets for quick and easy video creation.',
              link: 'https://biteable.com/'
            }
       
        
      ]
    };
    

    res.json({ recommendation: assistantMessage }); 
  } catch (error) { 
    console.error('Error:', error);
    throw new Error(`Failed to retrieve data from API: ${error.message}`);
  }
});

// // Example of how to call get4 and handle its promise

//   .then(response => {
//     console.log("Response from API ehhhhhhhhhh: ", response);
//   })
//   .catch(error => {
//     // Handle the error
//   });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

