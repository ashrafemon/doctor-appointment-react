import React from "react";
import {LoadingImage, Wrapper} from "./styled";
import SquareImage from './../../../assets/img/square-health.png'

const SuspenseLoading = () => {
    return (
        <Wrapper>
            <LoadingImage src={SquareImage}/>
        </Wrapper>
    )
}

export default SuspenseLoading