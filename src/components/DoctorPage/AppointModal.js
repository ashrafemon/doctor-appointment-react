import React from "react";
import {
    AvailabilityBox,
    Dialog,
    DialogCloseBtn,
    DialogContent,
    DialogContentBox,
    DialogTitle,
    FlexBox,
    FormBox
} from "./styled";
import PropTypes from 'prop-types'
import DoctorAvailableTimes from "./shared/DoctorAvailableTimes";
import PatientInfoForm from "./shared/PatientInfoForm";

const AppointModal = ({show, handler, appointForm, setAppointForm, bookingHandler}) => {
    return (
        show && (
            <Dialog>
                <DialogContent>
                    <DialogCloseBtn onClick={() => handler(false)}>&times;</DialogCloseBtn>
                    <DialogTitle>Appointment Dialog</DialogTitle>

                    <DialogContentBox>

                        <FlexBox>
                            <AvailabilityBox>
                                <DoctorAvailableTimes
                                    appointForm={appointForm}
                                    setAppointForm={setAppointForm}
                                />
                            </AvailabilityBox>

                            <FormBox>
                                <PatientInfoForm
                                    appointForm={appointForm}
                                    setAppointForm={setAppointForm}
                                    bookingHandler={bookingHandler}
                                />
                            </FormBox>
                        </FlexBox>
                    </DialogContentBox>
                </DialogContent>
            </Dialog>
        )
    )
}

AppointModal.propTypes = {
    show: PropTypes.bool,
    handler: PropTypes.func,
    appointForm: PropTypes.object,
    setAppointForm: PropTypes.func,
    bookingHandler: PropTypes.func
}

export default AppointModal