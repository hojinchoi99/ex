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
                <div class="id-text">
                    <div class="id-form">
                        <div class="intro">
                            <span>풋살하고 싶을 땐</span><br />
                            <span style={{ color:"#2139B2", fontWeight: "700"}}>플랩풋볼</span>
                        </div>
                        <form method='post' action='/'>
                            <div>
                                <label style={{fontSize:"11px"}}>이메일</label>
                                <input type="text" name="username" maxlength="150" autofocus="" required="" id="id_username" />
                            </div>
                            <div style={{width: "49%", float: "left"}}>
                                <label style={{fontSize:"11px"}}>비밀번호</label>
                                <input type="password" name="password1" class="inputFull" required="" id="id_password1" style={{width: "90%"}}/>
                            </div>
                            <div style={{width: "49%", float: "left", marginLeft: "2%", marginBottom: "20px"}}>
                                <label style={{fontSize:"11px"}}>비밀번호 확인</label>
                                <input type="password" name="password1" class="inputFull" required="" id="id_password2" style={{width: "90%"}}/>
                            </div>
                            <p style={{fontSize:"11px", color:"rgb(33, 160, 100)"}}>매치 참여시 본인 확인 및 참여 안내톡을 보내드립니다.</p>
                            <p style={{fontSize:"11px", color:"rgb(33, 160, 100)"}}>이름과 휴대폰 번호를 꼭 바르게 적어주세요!</p>
                            <div style={{width: "49%", float: "left"}}>
                                <label style={{fontSize:"11px"}}>이름</label>
                                <input type="text" name="name" class="inputFull" required="" id="id_name" style={{width: "90%"}} />
                            </div>
                            <div style={{width: "49%", float: "left", marginLeft: "2%", marginTop:"1%"}}>
                                <label style={{fontSize:"11px", display: "inherit"}}>성별</label>
                                <select name="sex" class="inputFull" id="id_sex" style={{width: "100%"}}>
                                    <option value="0">선택</option>
                                    <option value="1">남성</option>
                                    <option value="-1">여성</option>
                                </select>
                            </div>
                            <div style={{float: "left"}}>
                                <label style={{fontSize:"11px"}}>휴대폰 번호</label>
                                <input type="text" name="phone" required="" id="id_phone" />
                            </div>
                            <div class="input3Wrap" style={{marginBottom: "20px"}}>
                                <label style={{fontSize:"11px", display: "inherit"}}>생년월일</label>
                                    <select name="birthday_year" required="" id="id_birthday_year" style={{width: "32%", display: "inline-block", marginRight: "2%"}}>
                                        <option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option>
                                        <option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option>
                                        <option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option>
                                        <option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option>
                                        <option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option>
                                    </select>
                                    <select name="birthday_month" required="" id="id_birthday_month" style={{width: "32%", display: "inline-block", marginRight: "2%"}}>
                                            <option value="1" selected="">1월</option><option value="2">2월</option><option value="3">3월</option><option value="4">4월</option>
                                            <option value="5">5월</option><option value="6">6월</option><option value="7">7월</option><option value="8">8월</option>
                                            <option value="9">9월</option><option value="10">10월</option><option value="11">11월</option><option value="12">12월</option>
                                    </select>
                                    <select name="birthday_day" required="" id="id_birthday_day" style={{width: "32%", display: "inline-block"}}>
                                        <option value="1" selected="">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>
                                        <option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option>
                                        <option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>
                                        <option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option>
                                        <option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option>
                                        <option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option>
                                        <option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option>
                                        <option value="29">29</option><option value="30">30</option><option value="31">31</option>
                                    </select>
                            </div>
                            <div>
                                <label style={{cursor:"pointer", fontSize: "14px"}}>
                                    <input type="checkbox" id="saveID" value="" name="#" class="checkbox"></input><span>플랩풋볼 <a href="/term/" target="_blank">서비스 이용 약관</a> 및 <a href="/privacy/" target="_blank">개인 정보 수집 및 이용</a>에 동의합니다.</span>
                                </label>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <button type="submit">회원 가입</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;