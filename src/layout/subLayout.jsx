import styled from "styled-components";
import TopLayoutButton from "../layout/layoutComponent/button";
import { Link, useNavigate } from "react-router-dom";

const Nav = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
    background-color: white;
`
const Wrapper = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
   width: 150px;
   height: 55px;
`
const LogoImage = styled.img`
    width: 100%;
    background-size: cover;
    cursor: pointer;
`
const NavBox = styled.div`
    display: flex;
`

export default function SubLayout(){
    return(
        <Nav>
            <Wrapper>
                <Logo>
                    <Link to="/">
                        <LogoImage src="./image/untityLogo.png"></LogoImage>
                    </Link>
                </Logo>
                <NavBox>
                    <Link to="/"><TopLayoutButton text={"홈"} backgroundColor={"transparent"} color={"#4e5968"}/></Link>
                    <Link to="/employment"><TopLayoutButton text={"지원"} backgroundColor={"transparent"} color={"#4e5968"}/></Link>
                    <Link to="/untity2"><TopLayoutButton text={"untity 문화"} backgroundColor={"transparent"} color={"#4e5968"}/></Link>
                </NavBox>
            </Wrapper> 
        </Nav> 
    );
}