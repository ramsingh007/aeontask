import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState(null);

  const handleAddition = () => {
    if (num1 == "" || num2 == "") {
      alert("Enter first and second number")
      return;
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    setTotal(sum);
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <a href="/" className="navbar-title">AEON</a>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="/" className="nav-link">Showcase</a>
          <a href="/docs" className="nav-link">Docs</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/analytics" className="nav-link">Analytics</a>
          <a href="/enterprise" className="nav-link">Enterprise</a>
          <a href="/templates" className="nav-link">Templates</a>
        </div>
        <input type="text" className="search-input" placeholder="Search documentation" />

        <div className="navbar-right">
          {isOpen && <button className="searchicon-btn" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faSearch} />
          </button>}


          <button className="hamburger-btn" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>
      <div className="calculator">
        <h1>Adding Two Numbers</h1>
        <div className="c">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
        <button className="calcbtn" onClick={handleAddition}>Add two number</button>
        {total !== null && (
          <div className="result">
            <h2>Total: {total}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
