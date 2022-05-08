import React from 'react';
import { ReactComponent as Service_logo } from './assets/img/logo.svg';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Paper, Stack, InputBase, Tab, Box } from '@mui/material';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SimpleImageSlider from "react-simple-image-slider"

function App() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: String) => {
    setValue(newValue);
  };
  const images = [
    { url: "./assets/img/slider1.png" },
    { url: "./assets/img/slider2.png" },
    { url: "./assets/img/slider3.png" },
    { url: "./assets/img/slider4.png" },
    { url: "./assets/img/slider5.png" },
    { url: "./assets/img/slider6.png" },
    { url: "./assets/img/slider7.png" },
    { url: "./assets/img/slider8.png" },
    { url: "./assets/img/slider9.png" },
  ];
  return (
    <div>
      <div style={{paddingTop: "10px", marginLeft:'25%', marginRight:'25%'}}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Service_logo />
          <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={2}>
          <Paper component="form" sx={{ p: "1px 4px", display: "flex", alignItems: "center", width: 400 }}>
            <SearchIcon />
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="지역, 구장 이름으로 찾기"/>
          </Paper>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
          </Stack>
        </Stack>
      </div>
      <div style={{marginLeft:'25%', marginRight:'25%'}}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label="소셜 매치" value="1" />
                <Tab label="구장 예약" value="2" />
                <Tab label="팀 매치" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div>
                <SimpleImageSlider style={{borderRadius: 20}} bgColor='black' width={900} height={300} images={images} showBullets={true} autoPlay={true}/>
              </div>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">
              <img style={{borderRadius: 20, width:900, height: 300}} alt="" src={require('./assets/img/teamleague.png')}/>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default App;