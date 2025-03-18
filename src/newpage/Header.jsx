import React from 'react';

  const Header = () => {
    return (
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <nav>
            <ul className="nav-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <style jsx>{`
          .header {
            background-color:black;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            padding: 1.2rem 2.5rem;
            position: sticky;
            align-items: top;      
            margin-top:0px;
            z-index: 1000;
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
          }
          .header-container {
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo h1 {
            font-size: 2rem;
            color: #2d3436;
            margin: 0;
            font-weight: 700;
            letter-spacing: -0.5px;
            background: linear-gradient(45deg, #2d3436, #636e72);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .nav-menu {
            display: flex;
            gap: 2.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .nav-menu li a {
            text-decoration: none;
            color: #2d3436;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            position: relative;
            padding-bottom: 5px;
          }
          .nav-menu li a:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #00b894;
            transition: width 0.3s ease;
          }
          .nav-menu li a:hover {
            color: #00b894;
          }
          .nav-menu li a:hover:after {
            width: 100%;
          }
        `}</style>
      </header>
    );
  };

  export default Header;