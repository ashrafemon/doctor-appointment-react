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

    // Define Local States
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

    /* Handler for Appointment Modal
    * 1. get day name after click calendar any field
    * 2. validate doctor available day
    */
    const handleDateClick = (arg) => {
        let day = moment(arg.date).format('dddd').slice(0, 3).toLowerCase()

        if (doctor.availability[day] !== undefined) {
            setModalShow(true)
            setAppointForm({
                ...appointForm,
                day: day
            })

            // Clear Notification
            dispatch({type: 'TOGGLE_NOTIFICATION', payload: {show: false, type: '', text: ''}})
        } else {
            // Show Notification
            dispatch({
                type: 'TOGGLE_NOTIFICATION', payload: {
                    show: true, type: 'danger',
                    text: 'Doctor is not available on your selected day'
                }
            })
        }
    }

    // Appointment Confirm Handler
    const bookingHandler = () => {
        // Destructure Appointment Form
        const {day, time, patient} = appointForm

        // Checking any data is missing
        if (day !== '' && time !== '' && patient.name !== '' && patient.phone !== '' && patient.reason !== '') {
            // Add Booking
            dispatch(addBooking(appointForm))
            setModalShow(false)

            // Reset Appoint Form
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
            // Show Validate Notification
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
            {/* Calendar */}
            <FullCalendar
                dateClick={handleDateClick}
                plugins={[dayGridPlugin, interactionPlugin]}
            />

            {/* Appointment Modal */}
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