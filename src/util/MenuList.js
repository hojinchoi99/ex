import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GroupsIcon from "@mui/icons-material/Groups";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CampaignIcon from "@mui/icons-material/Campaign";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import StadiumIcon from "@mui/icons-material/Stadium";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const MenuList = [
  {
    url: "https://www.plabfootball.com/about/",
    name: "플랩 풋볼 소개",
    icon: () => <SportsSoccerIcon />,
  },
  {
    url: "https://www.plabfootball.com/manager/apply/",
    name: "매니저 지원",
    icon: () => <AlternateEmailIcon />,
  },
  {
    url: "https://www.notion.so/plabfootball/811eae2a9f034009a1078f02d5e5ac37",
    name: "구장 제휴",
    icon: () => <StadiumIcon />,
  },
  {
    url: "https://www.plabfootball.com/cs/6/topics/",
    name: "공지사항",
    icon: () => <CampaignIcon />,
  },
  {
    url: "https://www.plabfootball.com/cs/",
    name: "자주 묻는 질문",
    icon: () => <HelpOutlineIcon />,
  },
  {
    url: "https://www.facebook.com/plabfootball/?eid=ARCbIV7J0pdkC-eNTR8kOKz3Ce0WYjnpR9McmLlOQheslzEURQrjx5wYdcwv0SAVs3DofNPxG6_iaY_f",
    name: "페이스북",
    icon: () => <FacebookIcon />,
  },
  {
    url: "https://www.facebook.com/groups/plabfootball/",
    name: "페이스북 그룹",
    icon: () => <GroupsIcon />,
  },
  {
    url: "https://www.instagram.com/plabfootball/",
    name: "인스타그램",
    icon: () => <InstagramIcon />,
  },
];

export default MenuList;