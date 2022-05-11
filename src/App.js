import React from 'react';
import './style.css';
import { ReactComponent as Service_logo } from './assets/img/logo.svg';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Paper, Stack, InputBase, Tab, Box } from '@mui/material';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SimpleImageSlider from "react-simple-image-slider"
import Modal from '@mui/material/Modal'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CampaignIcon from '@mui/icons-material/Campaign';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StadiumIcon from '@mui/icons-material/Stadium';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


function App() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    width: 300,
    height: "100%",
    bgcolor: "background.paper",
  };
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
  const images = [
    { url: require("./assets/img/slider1.png") },
    { url: require("./assets/img/slider2.png") },
    { url: require("./assets/img/slider3.png") },
    { url: require("./assets/img/slider4.png") },
    { url: require("./assets/img/slider5.png") },
    { url: require("./assets/img/slider6.png") },
    { url: require("./assets/img/slider7.png") },
    { url: require("./assets/img/slider8.png") },
    { url: require("./assets/img/slider9.png") },
  ];
  return (
    <div>
      <div class='header'>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Service_logo style={{paddingTop: "5px"}}/>
          <Stack direction="row" justifyContent="flex-end" alignItems="flex-start">
          <div id="mobile-search">
            <SearchIcon style={{paddingTop: "10px"}} />
          </div>
          <Paper id='desktop-search' component="form" sx={{ p: "1px 4px", display: "flex", alignItems: "center", width: 400 }}>
            <SearchIcon />
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="지역, 구장 이름으로 찾기"/>
          </Paper>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <MenuIcon onClick={handleOpen}/>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div style={{padding: "24px 32px"}}>
                <li style={{listStyle: "none", paddingTop: "32px", paddingBottom: "12px"}}>
                    <a href="https://www.plabfootball.com/about/" style={{textDecoration:"none", color: 'black'}}>
                      <SportsSoccerIcon />
                      <span style={{paddingLeft: "10px", fontSize: "20px"}}>플랩 풋볼 소개</span>
                    </a>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <a href="https://www.plabfootball.com/manager/apply/" style={{textDecoration:"none", color: 'black'}}>
                      <AlternateEmailIcon />
                      <span style={{paddingLeft: "10px", fontSize: "20px"}}>매니저 지원</span>
                    </a>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <a href="https://www.notion.so/plabfootball/811eae2a9f034009a1078f02d5e5ac37" style={{textDecoration:"none", color: 'black'}}>
                      <StadiumIcon />
                      <span style={{paddingLeft: "10px", fontSize: "20px"}}>구장 제휴</span>
                    </a>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <hr></hr>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <a href="https://www.plabfootball.com/cs/6/topics/" style={{textDecoration:"none", color: 'black'}}>
                      <CampaignIcon />
                      <span style={{paddingLeft: "10px", fontSize: "20px"}}>공지 사항</span>
                    </a>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <a href="https://www.plabfootball.com/cs/" style={{textDecoration:"none", color: 'black'}}>
                      <HelpOutlineIcon />
                      <span style={{paddingLeft: "10px", fontSize: "20px"}}>자주 찾는 질문</span>
                    </a>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <hr></hr>
                  </li>
                  <li style={{listStyle: "none"}}>
                    <span style={{fontSize: "12px"}}>SNS에서 플랩풋볼의 스토리를 들어보세요</span>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <a href="https://www.facebook.com/plabfootball/?eid=ARCbIV7J0pdkC-eNTR8kOKz3Ce0WYjnpR9McmLlOQheslzEURQrjx5wYdcwv0SAVs3DofNPxG6_iaY_f" style={{textDecoration:"none", color: 'black'}}>
                      <FacebookIcon />
                      <span style={{paddingLeft: "10px", fontSize: "16px"}}>페이스북</span>
                    </a>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <a href="https://www.facebook.com/groups/plabfootball/" style={{textDecoration:"none", color: 'black'}}>
                      <GroupsIcon />
                      <span style={{paddingLeft: "10px", fontSize: "16px"}}>페이스북 그룹</span>
                    </a>
                  </li>
                  <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                    <a href="https://www.instagram.com/plabfootball/" style={{textDecoration:"none", color: 'black'}}>
                      <InstagramIcon />
                      <span style={{paddingLeft: "10px", fontSize: "16px"}}>인스타그램</span>
                    </a>
                  </li>
                </div> 
              </Box>
            </Modal>
          </IconButton>
          </Stack>
        </Stack>
      </div>
      <div class='container'>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <div class='tab-bar'>
            <Box>
              <TabList onChange={handleChange}>
                  <Tab label="소셜 매치" value="1" />
                  <Tab label="구장 예약" value="2" />
                  <Tab label="팀 리그" value="3" />
              </TabList>
            </Box>
            </div>
            <div class='content-one'>
              <TabPanel value="1">
                  <Box sx={{width: 300, height: 300, backgroundColor: '#222836'}}>
                    <div class='content-one-slider'>
                      <SimpleImageSlider height={300} images={images} showBullets={true} autoPlay={true}/>
                    </div>
                  </Box>
                <hr style={{marginTop: "24px", width: "100%"}}></hr>
              </TabPanel>
            </div>
            <TabPanel value="2">Item Two</TabPanel>
            <div class='content-three'>
                <TabPanel value="3">
                  <img style={{ borderRadius: 20}} alt="" src={require('./assets/img/teamleague.png')}/>
                </TabPanel>
            </div>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default App;