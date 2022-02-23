import React, { useEffect } from "react";
import ellipse1 from "../images/Ellipse 1.png";
import ellipse2 from "../images/Ellipse 2.png";
import piggu2 from "../images/piggu 2.png";
import piggu3 from "../images/piggu 3.png";
import fifthcan from "../images/5th can.png";
import fourthcan from "../images/4th can.png";
import thirdcan from "../images/3rd can.png";
import secondcan from "../images/2nd can.png";
import firstcan from "../images/1st can.png";
import leaderboard from "../images/LEADERBOARD.png";
import { useState } from "react";
import x from "../images/x.png";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";
import fallingimg from '../images/falling.gif'
import Navbar from "../components/Navbar";


const Leaderboard = () => {
  const [leaderboarddata, setLeaderboard] = useState(null);
  const [cans, setCans] = useState(0)
  const [falling,setFalling] = useState(true)

  setTimeout(()=>{
    setFalling(false)
  }, 1900)

  useEffect(async () => {
    const res = await axios.get("https://redbullapi.ccstiet.com/leaderboard/");
    setLeaderboard(res.data);
    console.log(res.data)
  }, [setLeaderboard]);


  useEffect(async() => {
    const resp = await axios.get('https://redbullapi.ccstiet.com/cans/')
    setCans(resp.data.cans)
    console.log(resp)
  }, [setCans])


  return (
    <div className="leaderboard">
      <Navbar/>
      <img src={leaderboard} className="leaderboard-img"></img>
      <img src={ellipse1} className="piggy"></img>
      {/* <img src={ellipse2} className='piggy'></img> */}
      <img src={piggu2} className="piggy"></img>
      <img src={piggu3} className="piggy"></img>
      <img src={piggu3} className="piggy"></img>
      <p className="numberOfCans">
        {cans &&cans} <br />
        <span className="red">C</span>A<span className="red">N</span>S
      </p>
      <img
        src={
          "https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/2ztSPBaB4NtOfQ54tCco0q/8ad062feb5d8634a9ae8ec5b88a617ac/UK_RBRE_250_Single_Unit_close_ambient_ORIGINAL_LRES__4_.png?w=150&fm=png&q=20"
        }
        className="redbull-big-can"
      />
      <img src={firstcan} className="cansimg-1"></img>
      <img src={secondcan} className="cansimg-2"></img>
      <img src={thirdcan} className="cansimg-3"></img>
      <img src={fourthcan} className="cansimg-4"></img>
      <img src={fifthcan} className="cansimg-5"></img>
      {falling?<img src={fallingimg} className="falling"/>: ''}
      <div className="logo-div">
        {leaderboarddata && leaderboarddata.length > 0 && leaderboarddata.map(team=>{
          return(
            <div className="leaderboard-block">
          <Tooltip title="teamname" placement="top" arrow>
            <div className="leaderboard-block-div">
              <h2>ABC</h2>
            </div>
          </Tooltip>
        </div>
          )
        })}
        <div className="leaderboard-block">
          <Tooltip title="teamname" placement="top" arrow>
            <div className="leaderboard-block-div">
              <h2>ABC</h2>
            </div>
          </Tooltip>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
            {/* <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b585b2edbce24c47b294d.png&f=1&nofb=1'} className='cross-img'></img> */}
            <img src={x} className="cross-img"></img>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
        <div className="leaderboard-block">
          <div className="leaderboard-block-div">
            <h2>ABC</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
