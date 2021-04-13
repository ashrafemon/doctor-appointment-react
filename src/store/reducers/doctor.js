import * as types from '../actions/doctor/types'

const initialState = {
    doctors: [],
    doctor: {},
    notFound: false,
    notification: {
        show: false,
        type: '',
        text: ''
    },
    bookings: []
}

const DoctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DOCTORS:
            return {
                ...state,
                doctors: action.payload,
            }
        case types.FETCH_DOCTOR:
            return {
                ...state,
                doctor: action.payload,
                notFound: Object.keys(action.payload).length <= 0
            }
        case types.TOGGLE_NOT_FOUND:
            return {
                ...state,
                notFound: action.payload
            }
        case types.TOGGLE_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            }
        case types.ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            }
        default:
            return state
    }
}

export default DoctorReducer