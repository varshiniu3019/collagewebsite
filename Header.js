import React from 'react';

function Header() {
  return (
    <header style={HeaderStyle}>
      <h1>My College Name</h1>
    </header>
  );
}

const HeaderStyle = {
  backgroundColor: '#4CAF10',
  color: 'black',
  padding: '10px 0',
  textAlign: 'center',
};

export default Header;