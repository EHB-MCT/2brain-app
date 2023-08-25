import React, { useState, useEffect } from 'react';
import axios from 'axios';
const cors = require('cors');




const AIMatchPage = () => {
  const [formData, setFormData] = useState({
    task: '',
    app: '',
    budget: '',
    familiarity: ''
  });
  
  const [recommendedApps, setRecommendedApps] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const prompt = `Based on the user's needs for ${formData.task} using ${formData.app} with a budget of ${formData.budget}, what AI tools would you recommend?`;
    const test = `say this is a test`;
  
    try {
      const response = await axios.post('http://localhost:3001/api/ai-response', {
        prompt: test
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log("Data from API: ", response.data);
      
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };
  



  const getCompletion = async () => {
    // Define the request payload
    const payload = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": "Say this is a test!" }],
      temperature: 0.7
    };

    try {
      // Make a POST request to the backend server
      const response = await axios.post('http://localhost:3001/getCompletion', payload);
      console.log("API Response:", response.data);

      // Extract the assistant's message
      const assistantMessage = response.data.choices[0].message.content;
      alert(`Assistant says: ${assistantMessage}`);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };


  useEffect(() => {
    if (!buttonClicked) return;  // Exit if the button was not clicked
    const fetchData = async () => {
     
    };
    fetchData();
    setButtonClicked(false);  // Reset to default state
  }, [buttonClicked, formData]);  // The effect depends on `buttonClicked` and `formData`
  
  const getAI = async (event) => {
    if (event) {
      event.preventDefault();
    }
  
    setButtonClicked(true);

    
  
    const prompt = `Based on the user's needs for ${formData.task} using ${formData.app} with a budget of ${formData.budget}, what AI tools would you recommend?`;
    const test = `say this is a test`;
    console.log("Prompt: ", prompt);


    try {
      // Make a POST request to the backend server
      const response = await axios.post('http://localhost:3001/getAdvice', { prompt: prompt });
      console.log("API Response:", response.data);

      // Extract the assistant's message
      const assistantMessage = response.data;
       // Update the state variable

     
      console.log("Assistant message front end : ", assistantMessage);
      setRecommendedApps(response.data.recommendation.apps);
       // Update the state variable
 // Update the state variable

    } catch (error) {
      console.error("Error fetching data:", error);
  if (error.response) {
    console.error("Data:", error.response.data);
    console.error("Status:", error.response.status);
    console.error("Headers:", error.response.headers);
  }
    
    }
  };


  



  return (
<div className="container">
  <h1 className="display-4">AI Match</h1>

  <form onSubmit={getAI}>
    <div className="mb-3">
      <label htmlFor="task" className="form-label">What is the task you want to fulfill?</label>
      <select className="form-select" id="task" name="task" onChange={handleChange}>
        <option value="">Select task</option>
        <option value="Video Creation">Video Creation</option>
        <option value="Image Creation">Image Creation</option>
        <option value="Copywriting">Copywriting</option>
        <option value="Data Analysis">Data Analysis</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="app" className="form-label">Which app do you already use for this task?</label>
      <select className="form-select" id="app" name="app" onChange={handleChange}>
        <option value="">Select app</option>
        <option value="Adobe Illustrator">Adobe Illustrator</option>
        <option value="Excel">Excel</option>
        <option value="Premiere Pro">Premiere Pro</option>
        {/* Add more options here */}
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="budget" className="form-label">What is your budget?</label>
      <select className="form-select" id="budget" name="budget" onChange={handleChange}>
        <option value="">Select budget</option>
        <option value="Free">Free</option>
        <option value="Midrange">Midrange</option>
        <option value="High">High</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="familiarity" className="form-label">Are you already familiar with AI?</label>
      <select className="form-select" id="familiarity" name="familiarity" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  <button onClick={getCompletion}>
      Get Completion
    </button>
   

  <div className="container mt-5">
    <h2>Recommended Apps:</h2>
    <div className="row">
      {recommendedApps.map((app, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <strong>{app.name}</strong>
            </div>
            <div className="card-body">
              <p className="card-text">{app.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  


  );
}

export default AIMatchPage;
