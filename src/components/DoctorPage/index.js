import React, {useEffect} from "react";
import {Content, NotFound, Wrapper} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {fetchDoctor} from "../../store/actions/doctor/actions";
import Details from "./Details";
import AppointCalendar from "./AppointCalendar";
import Notification from "../shared/Notification";

const DoctorPage = () => {
    const history = useHistory()
    const {id} = useParams()
    const dispatch = useDispatch()

    // Get data from store
    const doctor = useSelector(state => state.doctor.doctor)
    const notFound = useSelector(state => state.doctor.notFound)
    const notification = useSelector(state => state.doctor.notification)

    // fetch specific doctor information
    useEffect(() => {
        dispatch(fetchDoctor(id))
    }, [dispatch, id])

    // If doctor not found with doctor code
    useEffect(() => {
        setTimeout(() => {
            if (notFound) {
                dispatch({type: 'TOGGLE_NOT_FOUND', payload: false})
                history.replace('/')
            }
        }, 3000)
    }, [notFound, dispatch, history])

    // Clear Notification
    useEffect(() => {
        if (notification.show) {
            setTimeout(() => {
                dispatch({type: 'TOGGLE_NOTIFICATION', payload: {show: false, type: '', text: ''}})
            }, 3000)
        }
    }, [dispatch, notification])

    return (
        <Wrapper>
            {/* Not Found Message */}
            {notFound && <NotFound>Doctor not found...</NotFound>}

            {Object.keys(doctor).length > 0 && (
                <Content>
                    {/* Doctor Details */}
                    <Details doctor={doctor}/>

                    {/* Appoint Calendar */}
                    <AppointCalendar doctor={doctor}/>
                </Content>
            )}

            <Notification notification={notification}/>
        </Wrapper>
    )
}

export default DoctorPage