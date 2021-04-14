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
import {motion} from "framer-motion";

const AppointModal = ({show, handler, appointForm, setAppointForm, bookingHandler}) => {
    const variants = {
        open: {opacity: 1, visibility: 'visible'},
        closed: {opacity: 0, visibility: "hidden"},
    }

    return (
        <motion.div
            animate={show ? "open" : "closed"}
            variants={variants}
        >
            <Dialog>
                <DialogContent>
                    <DialogCloseBtn onClick={() => handler(false)}>&times;</DialogCloseBtn>
                    <DialogTitle>Appointment Dialog</DialogTitle>

                    <DialogContentBox>

                        <FlexBox>
                            <AvailabilityBox>
                                {/* Doctor Available Time Generate by Visit Duration */}
                                <DoctorAvailableTimes
                                    appointForm={appointForm}
                                    setAppointForm={setAppointForm}
                                />
                            </AvailabilityBox>

                            <FormBox>
                                {/* Patient Information Form */}
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
        </motion.div>
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