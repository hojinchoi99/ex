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
import MenuList from "./util/MenuList";
import 'date-carousel/date-carousel.js'

const Login = () => {
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const style1 = {
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
            <div class='header'>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Link to='/'><Servicelogo style={{paddingTop: "5px"}}/></Link>
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

                </div>
                <div class="id-text">
                    <h2>풋살하고 싶을 땐</h2>
                    <h2>플랩풋볼</h2>
                    <form>
                        <input type="text" name="username" autofocus="" required="" id="id_username" placeholder="아이디 또는 이메일"></input>
                        <input type="password" name="password" required="" id="id_password" placeholder="비밀번호"></input>
                        <input type="checkbox" id="saveID" value="" name="#"></input><span>아이디 저장</span>
                        <button type="submit">로그인</button>
                        <span>비밀번호 찾기</span>
                        <span>회원가입</span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;