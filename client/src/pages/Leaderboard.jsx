import React from 'react';
import ellipse1 from '../images/Ellipse 1.png'
import ellipse2 from '../images/Ellipse 2.png'
import piggu2 from '../images/piggu 2.png'
import piggu3 from '../images/piggu 3.png'


const Leaderboard = () => {
  return <div className='leaderboard'>
        <img src={ellipse1} className='piggy'></img>
        <img src={ellipse2} className='piggy'></img>
        <img src={piggu2} className='piggy'></img>
        <img src={piggu3} className='piggy'></img>

        


  </div>;
};

export default Leaderboard;
