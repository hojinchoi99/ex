import React from "react";
import "./style.css";
import { ReactComponent as Servicelogo } from "./assets/img/logo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Paper, Stack, InputBase, Tab, Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Carousel } from "react-responsive-carousel";
import Modal from "@mui/material/Modal";
import menuList from "./util/menuList";

const imageList = [
  require("./assets/img/slider1.png"),
  require("./assets/img/slider2.png"),
  require("./assets/img/slider3.png"),
  require("./assets/img/slider4.png"),
];

const Main = () => {
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
  return (
    <div>
      <div class="header">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Servicelogo style={{ paddingTop: "5px" }} />
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <div id="mobile-search">
              <SearchIcon style={{ paddingTop: "10px" }} />
            </div>
            <Paper
              id="desktop-search"
              component="form"
              sx={{
                p: "1px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <SearchIcon />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="지역, 구장 이름으로 찾기"
              />
            </Paper>
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <MenuIcon onClick={handleOpen} />
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div style={{ padding: "24px 32px" }}>
                    {menuList.map((item) => {
                      return (
                        <li
                          style={{
                            listStyle: "none",
                            paddingTop: "32px",
                            paddingBottom: "12px",
                          }}
                        >
                          <a
                            href={item.url}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {item.icon()}
                            <span
                              style={{ paddingLeft: "10px", fontSize: "20px" }}
                            >
                              {item.name}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </div>
                </Box>
              </Modal>
            </IconButton>
          </Stack>
        </Stack>
      </div>
      <div class="container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <div class="tab-bar">
              <Box>
                <TabList onChange={handleChange}>
                  <Tab label="소셜 매치" value="1" />
                  <Tab label="구장 예약" value="2" />
                  <Tab label="팀 리그" value="3" />
                </TabList>
              </Box>
            </div>
            <div class="content-one">
              <TabPanel value="1">
                <Carousel
                  showIndicator={true}
                  showThumbs={true}
                  showStatus={false}
                  autoPlay={true}
                  showArrows={false}
                  infiniteLoop={true}
                >
                  {imageList.map((item) => {
                    return (
                      <div>
                        <img style={{ borderRadius: 20 }} alt="" src={item} />
                      </div>
                    );
                  })}
                </Carousel>
                <hr style={{ marginTop: "24px", width: "100%" }}></hr>
              </TabPanel>
            </div>
            <TabPanel value="2">Item Two</TabPanel>
            <div class="content-three">
              <TabPanel value="3">
                <img
                  style={{ borderRadius: 20 }}
                  alt=""
                  src={require("./assets/img/teamleague.png")}
                />
              </TabPanel>
            </div>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Main;
