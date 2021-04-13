import React from "react";
import {Logo, LogoBox} from "./styled";
import {Link} from "react-router-dom";
import LogoImage from "../../../assets/img/square-health.png";

const Header = () => {
    return (
        <LogoBox>
            <Link to="/">
                <Logo src={LogoImage}/>
            </Link>
        </LogoBox>
    )
}

export default Header