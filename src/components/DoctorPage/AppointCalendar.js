import React, {useState} from "react";
import {AppointCalendarContent} from "./styled";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import PropTypes from 'prop-types'
import AppointModal from "./AppointModal";
import {useDispatch} from "react-redux";
import {addBooking} from "../../store/actions/doctor/actions";

const AppointCalendar = ({doctor}) => {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false)
    const [appointForm, setAppointForm] = useState({
        day: '',
        time: '',
        doctorInfo: doctor,
        patient: {
            name: '',
            phone: '',
            reason: ''
        },
    })

    const handleDateClick = (arg) => {
        let day = moment(arg.date).format('dddd').slice(0, 3).toLowerCase()

        if (doctor.availability[day] !== undefined) {
            setModalShow(true)
            setAppointForm({
                ...appointForm,
                day: day
            })
            dispatch({type: 'TOGGLE_NOTIFICATION', payload: {show: false, type: '', text: ''}})
        } else {
            dispatch({
                type: 'TOGGLE_NOTIFICATION', payload: {
                    show: true, type: 'danger',
                    text: 'Doctor is not available on your selected day'
                }
            })
        }
    }

    const bookingHandler = () => {
        const {day, time, patient} = appointForm

        if (day !== '' && time !== '' && patient.name !== '' && patient.phone !== '' && patient.reason !== '') {
            dispatch(addBooking(appointForm))
            setModalShow(false)
            setTimeout(() => {
                setAppointForm({
                    day: '',
                    time: '',
                    doctorInfo: doctor,
                    patient: {
                        name: '',
                        phone: '',
                        reason: ''
                    },
                })
            }, 2000)
        } else {
            dispatch({
                type: 'TOGGLE_NOTIFICATION', payload: {
                    show: true, type: 'danger',
                    text: 'Please fill up all required field!'
                }
            })
        }
    }

    return (
        <AppointCalendarContent>
            <FullCalendar
                dateClick={handleDateClick}
                plugins={[dayGridPlugin, interactionPlugin]}
            />

            <AppointModal
                appointForm={appointForm}
                setAppointForm={setAppointForm}
                show={modalShow}
                handler={setModalShow}
                bookingHandler={bookingHandler}
            />
        </AppointCalendarContent>

    )
}

AppointCalendar.propTypes = {
    doctor: PropTypes.object
}

export default AppointCalendar