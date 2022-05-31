import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import { ReactComponent as Servicelogo } from './assets/img/logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Paper, Stack, InputBase, Tab, Box, Button, FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Carousel } from 'react-responsive-carousel';
import Modal from '@mui/material/Modal'
import MenuList from "./util/menuList";
import CloseIcon from '@mui/icons-material/Close';
import DiamondIcon from '@mui/icons-material/Diamond';
import 'date-carousel/date-carousel.js'

const imageList = [
    require("./assets/img/slider1.png"),
    require("./assets/img/slider2.png"),
    require("./assets/img/slider3.png"),
    require("./assets/img/slider4.png"),
    require("./assets/img/slider5.png"),
    require("./assets/img/slider6.png"),
    require("./assets/img/slider7.png"),
    require("./assets/img/slider8.png"),
    require("./assets/img/slider9.png"),
];

const regionList = [
    "모든 지역",
    "서울",
    "경기/강원",
    "인천",
    "대전/세종/충청",
    "대구/경북",
    "부산/울산/경남",
    "광주/전라",
    "제주",
];

const Main = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const style1 = {
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        width: 300,
        height: "100%",
        bgcolor: "background.paper",
    };
    const modalstyle = {
        position: "fixed",
        width: "100%",
        height: "auto",
        borderRadius: "30px 30px 0px 0px",
        top: "auto",
        bottom: 0,
        bgcolor: "background.paper",
    };
    return (
        <div>
            <div class='header'>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Link to='/'><Servicelogo style={{paddingTop: "5px"}}/></Link>
                    <Stack direction="row" justifyContent="flex-end" alignItems="flex-start">
                        <div id="mobile-search">
                            <SearchIcon style={{paddingTop: "10px"}} />
                        </div>
                        <Paper id='desktop-search' component="form" sx={{ p: "1px 4px", display: "flex", alignItems: "center", width: 450 }}>
                            <SearchIcon />
                            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="지역, 구장 이름으로 찾기"/>
                        </Paper>
                        <Link to='/login'>
                            <IconButton>
                                <PersonIcon />
                            </IconButton>
                        </Link>
                        <IconButton>
                            <MenuIcon onClick={handleOpen1}/>
                            <Modal open={open1} onClose={handleClose1} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                <Box sx={style1}>
                                <div style={{ padding: "24px 32px" }}>
                                    {MenuList.map((item) => {
                                    return (
                                        <li style={{listStyle: "none", paddingTop: "32px", paddingBottom: "12px"}}>
                                            <a href={item.url} style={{ textDecoration: "none", color: "black" }}>
                                                {item.icon()}
                                                <span style={{ paddingLeft: "10px", fontSize: "20px" }}>{item.name}</span>
                                            </a>
                                        </li>
                                    );
                                    })}
                                </div>
                                {/* <li style={{listStyle: "none", paddingTop: "12px", paddingBottom: "12px"}}>
                                    <hr></hr>
                                </li>
                                <li style={{listStyle: "none"}}>
                                    <span style={{fontSize: "12px"}}>SNS에서 플랩풋볼의 스토리를 들어보세요</span>
                                </li> */}
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
                                <Carousel showIndicator={true} showThumbs={true} showStatus={false} autoPlay={true} showArrows={false} infiniteLoop={true}>
                                {imageList.map((item) => {
                                    return (
                                    <div>
                                        <img style={{ borderRadius: 20 }} alt="" src={item} />
                                    </div>
                                    );
                                })}
                                </Carousel>
                                <hr style={{marginTop: "24px", width: "100%"}}></hr>
                                <div style={{margin: "24px"}}>
                                    <date-carousel on-week-change="onWeekChange($event)" on-day-pick="onDayPick($event)"></date-carousel>
                                </div>
                                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                                    <Button onClick={handleOpen2} variant="outlined">모든 지역</Button>
                                        <Modal open={open2} onClose={handleClose2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                            <Box sx={modalstyle}>
                                                <div style={{width: "95%", margin: "0 auto"}}>
                                                    <div style={{padding: "10px 0 24px 0"}}>
                                                        <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={0}>
                                                            <p style={{fontSize: "18px", fontWeight: "bold"}}>지역</p>
                                                            <IconButton>
                                                                <CloseIcon onClick={handleClose2}/>
                                                            </IconButton>
                                                        </Stack>
                                                    </div>
                                                    {regionList.map((list) => {
                                                        return (
                                                        <div>
                                                            <li style={{margin: "10px 0px"}}>
                                                                <p style={{height: "44px"}}>{list}</p>
                                                                <hr></hr>
                                                            </li>
                                                        </div>
                                                        );
                                                    })}
                                                </div>
                                            </Box>
                                        </Modal>
                                    <Button variant="outlined"><DiamondIcon />혜택</Button>
                                    <Button variant="outlined">마감 가리기</Button>
                                    <Button onClick={handleOpen3} variant="outlined">성별</Button>
                                    <Modal open={open3} onClose={handleClose3} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <Box sx={modalstyle}>
                                            <div style={{width: "95%", margin: "0 auto"}}>
                                                <div style={{padding: "10px 0 24px 0"}}>
                                                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={0}>
                                                        <p style={{fontSize: "18px", fontWeight: "bold"}}>성별</p>
                                                        <IconButton>
                                                            <CloseIcon onClick={handleClose3}/>
                                                        </IconButton>
                                                    </Stack>
                                                </div>
                                                <FormGroup>
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="남자" /><hr />
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="여자" /><hr />
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="남녀 모두" /><hr />
                                                </FormGroup>
                                                <Button onClick={handleClose3} variant="contained" style={{width: "100%", margin: "55px 0 25px 0", padding: "14px"}}>적용하기</Button>
                                            </div>
                                        </Box>
                                    </Modal>
                                    <Button onClick={handleOpen4} variant="outlined">레벨</Button>
                                    <Modal open={open4} onClose={handleClose4} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <Box sx={modalstyle}>
                                            <div style={{width: "95%", margin: "0 auto"}}>
                                                <div style={{padding: "10px 0 24px 0"}}>
                                                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={0}>
                                                        <p style={{fontSize: "18px", fontWeight: "bold"}}>성별</p>
                                                        <IconButton>
                                                            <CloseIcon onClick={handleClose4}/>
                                                        </IconButton>
                                                    </Stack>
                                                </div>
                                                <FormGroup>
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="비기너3 이하" /><hr />
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="아마추어2 이상" /><hr />
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="일반" /><hr />
                                                </FormGroup>
                                                <Button onClick={handleClose4} variant="contained" style={{width: "100%", margin: "55px 0 25px 0", padding: "14px"}}>적용하기</Button>
                                            </div>
                                        </Box>
                                    </Modal>
                                </Stack>   
                            </TabPanel>
                        </div>
                        <TabPanel value="2">
                            <div style={{margin: "24px"}}>
                                <date-carousel on-week-change="onWeekChange($event)" on-day-pick="onDayPick($event)"></date-carousel>
                            </div>
                            <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                                    <Button onClick={handleOpen2} variant="outlined">모든 지역</Button>
                                        <Modal open={open2} onClose={handleClose2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                            <Box sx={modalstyle}>
                                                <div style={{width: "95%", margin: "0 auto"}}>
                                                    <div style={{padding: "10px 0 24px 0"}}>
                                                        <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={0}>
                                                            <p style={{fontSize: "18px", fontWeight: "bold"}}>지역</p>
                                                            <IconButton>
                                                                <CloseIcon onClick={handleClose2}/>
                                                            </IconButton>
                                                        </Stack>
                                                    </div>
                                                    {regionList.map((list) => {
                                                        return (
                                                        <div>
                                                            <li style={{margin: "10px 0px"}}>
                                                                <p style={{height: "44px"}}>{list}</p>
                                                                <hr></hr>
                                                            </li>
                                                        </div>
                                                        );
                                                    })}
                                                </div>
                                            </Box>
                                        </Modal>
                                    <Button variant="outlined">예약 가능</Button>
                                    <Button variant="outlined"><DiamondIcon />프로모션</Button>
                                </Stack>
                        </TabPanel>
                        <div class='content-three'>
                            <TabPanel value="3">
                                <img style={{ borderRadius: 20 }} alt="" src={require('./assets/img/teamleague.png')}/>
                            <div>
                                <h3 style={{padding: "32px 32px"}}>시작된 리그</h3>
                                <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={1}>
                                    <li>
                                        <img style={{ borderRadius: 20, height: "150px"}} alt="" src={require('./assets/img/std-suwon.jpg')}/>
                                        <h4>플랩 스타디움 수원</h4>
                                        <p>일요일 16시 리그</p>
                                        <p>5vs5 · 4팀 · 아마추어3</p>
                                    </li>
                                    <li>
                                        <img style={{ borderRadius: 20, height: "150px"}} alt="" src={require('./assets/img/std-suwon.jpg')}/>
                                        <h4>플랩 스타디움 수원</h4>
                                        <p>토요일 20시 리그</p>
                                        <p>5vs5 · 3팀 · 세미프로3</p>
                                    </li>
                                    <li>
                                        <img style={{ borderRadius: 20, height: "150px", width: "100%"}} alt="" src={require('./assets/img/std-incheon.jpg')}/>
                                        <h4>플랩 스타디움 인천 가좌</h4>
                                        <p>목요일 20시 리그</p>
                                        <p>6vs6 · 4팀 · 세미프로1</p>
                                    </li>
                                </Stack>
                            </div>
                            </TabPanel>
                        </div>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
};

export default Main;