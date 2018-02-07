import React from 'react';
import title from '../../assets/images/title.png';
import splash1 from '../../assets/images/couch.jpg';


const Splash = () => {
  return (
    <div>
      <style jsx>{`
          .spash{
            background-color: #25d7f2;
            display: flex;
            flex-wrap: wrap;
            padding-left: 50px;
            padding-right: 50px;

          }
          .hero {
            display: flex;
            width: 1180px;
            margin-left: auto;
            margin-right: aut0;
            padding-right: 65px;
            padding-left: 65px;
          }
          .hero-text{
            margin-top: 20xpx;
            line-height: 30px;
            font-size: 20px;
            width: 45%;
          }
      `}</style>
      <div className='spash'>
        <div className="hero">
          <div>
            <img src={title}/>
            <p className="hero-text">On Okay, Cupid, you’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: better.</p>
          </div>
          <img src={splash1}/>
        </div>
      </div>
    </div>
  );
};

export default Splash;
