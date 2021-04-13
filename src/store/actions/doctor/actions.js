import * as types from './types'
import data from '../../../utils/data.json'

export const fetchDoctors = () => dispatch => {
    const doctors = data.doctors
    dispatch({type: types.FETCH_DOCTORS, payload: doctors})
}

export const fetchDoctor = doctorCode => (dispatch, getState) => {
    const state = getState()
    let doctor = {};

    // Use this
    state.doctor.doctors.forEach(item => {
        if (item.code === parseInt(doctorCode)) return doctor = item
    })

    // or this
    // data.doctors.forEach(item => {
    //     if (item.code === parseInt(doctorCode)) return doctor = item
    // })

    dispatch({type: types.FETCH_DOCTOR, payload: doctor})
}

export const addBooking = data => dispatch => {
    dispatch({type: types.ADD_BOOKING, payload: data})
    dispatch({
        type: 'TOGGLE_NOTIFICATION', payload: {
            show: true, type: 'success',
            text: 'Booking added successfully'
        }
    })
}