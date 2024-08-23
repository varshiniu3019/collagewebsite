import React from 'react';

function Footer() {
  return (
    <footer style={FooterStyle}>
      <p>© 2024 My College. All rights reserved.</p>
    </footer>
  );
}

const FooterStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default Footer;