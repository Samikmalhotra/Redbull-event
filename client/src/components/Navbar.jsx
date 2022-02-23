import React from 'react'
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


const Navbar = () => {
    const token = localStorage.getItem('redbulltoken')
    const navigate = useNavigate();

    const actions = [
      { icon: <HomeIcon />, name: "Home", link: "/questions" },
      { icon: <LeaderboardIcon />, name: "Leaderboard", link: "/leaderboard" },
    ];
    
  return (
    <StyledSpeedDial
    ariaLabel="SpeedDial playground example"
    icon={<SpeedDialIcon />}
    direction={"down"}
  >
    {actions.map((action) => (
      <SpeedDialAction
        icon={action.icon}
        key={action.name}
        tooltipTitle={action.name}
        onClick={()=>navigate(action.link)}
      />
    ))}
  </StyledSpeedDial>
  )
}

export default Navbar