import React from 'react';

const AIMatchPage = () => {
  return (
    <div className="container">
      <h1 className="display-4">AI Match</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">What is the task you want to fulfill?</label>
          <select className="form-select" id="task">
            <option>Video Creation</option>
            <option>Image Creation</option>
            <option>Copywriting</option>
            <option>Data Analysis</option>
            {/* Add more options here */}
          </select>
        </div>
        {/* Repeat this form group for other questions */}
      </form>
    </div>
  );
}

export default AIMatchPage;
