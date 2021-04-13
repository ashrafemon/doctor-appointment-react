import React, {useState} from "react";
import {PortionTitle, TimeList, TimeListItem} from "../styled";
import PropTypes from "prop-types";

const DoctorAvailableTimes = ({appointForm, setAppointForm}) => {
    const [times] = useState([
        '10:00 PM', '10:15 PM', '10:30 PM'
    ])

    const selectHandler = (item) => {
        setAppointForm({
            ...appointForm,
            time: item
        })
    }

    return (
        <>
            <PortionTitle>Doctor Availability (Sun)</PortionTitle>
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