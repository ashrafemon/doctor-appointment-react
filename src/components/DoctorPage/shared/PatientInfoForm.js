import React from "react";
import {FormGroup, FormInput, FormSubmitBtn, FormTextarea, PortionTitle} from "../styled";
import PropTypes from "prop-types";

const PatientInfoForm = ({appointForm, setAppointForm, bookingHandler}) => {

    // Patient Information Field Value Store Handler
    const changeHandler = (e, key) => {
        setAppointForm({
            ...appointForm,
            patient: {
                ...appointForm.patient,
                [key]: e.target.value
            }
        })
    }

    return (
        <>
            <PortionTitle>Doctor Booking Information</PortionTitle>
            <FormGroup>
                <FormInput
                    value={appointForm.patient.name}
                    onChange={(e) => changeHandler(e, 'name')}
                    type="text"
                    placeholder="Enter Your Name"
                />
            </FormGroup>
            <FormGroup>
                <FormInput
                    value={appointForm.patient.phone}
                    onChange={(e) => changeHandler(e, 'phone')}
                    type="text"
                    placeholder="Enter Phone Number"
                />
            </FormGroup>
            <FormGroup>
                <FormTextarea
                    value={appointForm.patient.reason}
                    onChange={(e) => changeHandler(e, 'reason')}
                    rows="5"
                    placeholder="Describe Booking Reason"
                />
            </FormGroup>
            <FormGroup>
                <FormSubmitBtn onClick={bookingHandler}>Confirm Appointment</FormSubmitBtn>
            </FormGroup>
        </>
    )
}

PatientInfoForm.propTypes = {
    appointForm: PropTypes.object,
    setAppointForm: PropTypes.func,
}

export default PatientInfoForm