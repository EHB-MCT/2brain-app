import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4">Welcome to AI Matcher!</h1>
          <button className="btn btn-primary">Go to AI Match</button>
          <div className="mt-5">
            <h2>Our Mission</h2>
            <p>We aim to match you with the perfect AI solution for your needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
