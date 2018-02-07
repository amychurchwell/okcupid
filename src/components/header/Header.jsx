import React from 'react';
import logo from '../../assets/images/logo.png';

const Header= () => {
  return (
    <div>
      <style jsx global>{`
          .header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 75px;
            padding-right: 75px;
          }
          p {
            font-size: 14px;
            line-height: 31px;
          }
          .signin{
            font-size: 13px;
            font-weight: 500;
            padding: 5px 14px;
            border: 1px solid #000;
            border-radius: 3px;
            cursor: pointer;
          }
      `}</style>
      <div className="header">
        <img src={logo}/>
        <p>Have an account? <span className="signin">Sign in</span></p>
      </div>
    </div>
  );
};

export default Header;
