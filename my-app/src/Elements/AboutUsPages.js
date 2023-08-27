import React from 'react';

const AboutUsPage = () => {
  const styles = {
    container: {
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "2em",
    },
    header: {
      color: "#333",
      marginBottom: "20px"
    },
    text: {
      color: "#555",
      fontSize: "18px",
      lineHeight: "1.6"
    },
    contactHeader: {
      color: "#333",
      marginTop: "30px",
      marginBottom: "10px"
    },
    contactText: {
      color: "#777",
      fontSize: "16px"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header} className="display-4">About Us</h1>
      <p style={styles.text}>
        We are a team of AI enthusiasts committed to helping you find the best AI solutions.
      </p>
      <h2 style={styles.contactHeader}>Contact Information</h2>
      <p style={styles.contactText}>Email: info@ai-matcher.com</p>
    </div>
  );
}

export default AboutUsPage;
