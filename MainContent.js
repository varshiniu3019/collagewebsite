import React from 'react';

function MainContent() {
  return (
    <main style={mainStyle}>
      <img 
        src="data:image/jpeg;base64,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" 
        alt="College" 
        style={imageStyle}
      />
      <h2>Courses Offered:</h2>
      <ul>
        <li>Computer Science</li>
        <li>Business Administration</li>
        <li>Mechanical Engineering</li>
        <li>Electrical Engineering</li>
      </ul>
    </main>
  );
}

const mainStyle = {
  padding: '20px',
  textAlign: 'center',
  
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '20px',
};

export default MainContent;
