import React, {useEffect, useState} from "react";
import {PortionTitle, TimeList, TimeListItem} from "../styled";
import PropTypes from "prop-types";
import {timeGenerator} from "../../../utils/helpers";

const DoctorAvailableTimes = ({appointForm, setAppointForm}) => {
    // Local State
    const [times, setTimes] = useState([])


    const selectHandler = (item) => {
        setAppointForm({
            ...appointForm,
            time: item
        })
    }

    // Generate Doctor Available Time by Visit Duration
    useEffect(() => {
        if (appointForm.day) {
            setTimes(timeGenerator(appointForm.day, appointForm.doctorInfo.visitDurationInMin, appointForm.doctorInfo.availability))
        }
    }, [appointForm])

    return (
        <>
            <PortionTitle>Doctor Availability ({appointForm.day.toUpperCase()})</PortionTitle>
            <TimeList>
                {times.map((item, index) => (
                    <TimeListItem
                        key={index}
                        isActive={appointForm.time === item}
                        onClick={() => selectHandler(item)}
                    >
                        {item}
                    </TimeListItem>
                ))}
            </TimeList>
        </>
    )
}

DoctorAvailableTimes.propTypes = {
    appointForm: PropTypes.object,
    setAppointForm: PropTypes.func
}

export default DoctorAvailableTimes