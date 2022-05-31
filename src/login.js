import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import { ReactComponent as Servicelogo } from './assets/img/logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Paper, Stack, InputBase, Box } from '@mui/material';
import Modal from '@mui/material/Modal'
import MenuList from "./util/menuList";
import 'date-carousel/date-carousel.js'


const Login = () => {
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const style1 = {
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        width: 300,
        height: "100%",
        bgcolor: "background.paper",
    };
    const signupModal = {
        position: "fixed",
        width: "450px",
        borderRadius: "20px",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: "background.paper",
        padding: "0 15px 30px 15px",
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
            <div class="id-content">
                <div class="id-slider">
                    <img alt="" width="100%" src={require('./assets/img/logimg.jpg')}/>
                </div>
                <div class="id-text" style={{ height: "100%"}}>
                    <div class="id-form" style={{ height: "75%"}}>
                        <div class="intro">
                            <span>풋살하고 싶을 땐</span><br />
                            <span style={{ color:"#2139B2", fontWeight: "700"}}>플랩풋볼</span>
                        </div>
                        <form method='post' action='/'>
                            <div>
                                <input type="text" name="username" autofocus="" required="" id="id_username" placeholder="아이디 또는 이메일"></input>
                            </div>
                            <div>
                                <input type="password" name="password" required="" id="id_password" placeholder="비밀번호"></input>
                            </div>
                            <div class="save-id">
                                <label style={{cursor:"pointer"}}>
                                    <input type="checkbox" id="saveID" value="" name="#" class="checkbox"></input><span>아이디 저장</span>
                                </label>
                            </div>
                            <div>
                                <button type="submit">로그인</button>
                            </div>
                            <div class="id-pw">
                                <span style={{ textAlign: "right", paddingRight: "10px" }}>비밀번호 찾기</span>
                                <span style={{ textAlign: "left", paddingLeft: "10px" }}><span onClick={handleOpen2}>회원가입</span>
                                    <Modal open={open2} onClose={handleClose2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <Box sx={signupModal}>
                                            <div style={{padding: "30px 20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                <Servicelogo style={{marginBottom:"20px", width:"72px", height:"30px"}}/>
                                                <span style={{fontSize:"20px"}}>회원 가입하고 매치에 참여하세요</span>
                                            </div>
                                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                <button style={{backgroundColor:"#FEE500", padding: "15px", borderRadius: "10px", border: "none", cursor:"pointer", width: "100%", fontSize: "16px", color:"#222836"}}>카카오 계정으로 가입</button>
                                                <Link to='/signup' style={{padding: "10px", fontSize:"14px"}}>이메일로 가입할래요</Link>
                                            </div>
                                        </Box>
                                    </Modal>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;