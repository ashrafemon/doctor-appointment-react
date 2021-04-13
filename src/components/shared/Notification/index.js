import React from "react";
import {ToastMessage, ToastMessageClose, ToastMessageText} from "./styled";
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";

const Notification = ({notification}) => {
    const {show, type, text} = notification
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch({
            type: 'TOGGLE_NOTIFICATION', payload: {
                show: false,
                type: '',
                text: ''
            }
        })
    }

    return (
        show && (
            <ToastMessage type={type}>
                <ToastMessageText>{text}</ToastMessageText>
                <ToastMessageClose onClick={closeHandler}>&times;</ToastMessageClose>
            </ToastMessage>
        )

    )
}

Notification.propTypes = {
    notification: PropTypes.object
}

export default Notification