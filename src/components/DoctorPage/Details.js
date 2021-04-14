import React from "react";
import {
    DoctorAvailability,
    DoctorAvailabilityDay,
    DoctorAvailabilityItem,
    DoctorAvailabilityTime,
    DoctorCode,
    DoctorContent,
    DoctorDetails,
    DoctorHospitalName,
    DoctorImage,
    DoctorItem,
    DoctorName,
    DoctorSpecialist
} from "./styled";
import DoctorDefaultImage from './../../assets/img/doctor-default.jpg'
import PropTypes from 'prop-types'

const Details = ({doctor}) => {
    // Destructure doctor information
    const {name, code, specialist, org, details, visitDurationInMin, availability} = doctor

    return (
        <DoctorItem>
            {/* Doctor Avatar */}
            <DoctorImage src={DoctorDefaultImage}/>

            {/* Doctor Information */}
            <DoctorContent>
                <DoctorCode>Doctor Code: {code}</DoctorCode>
                <DoctorName>{name}</DoctorName>
                <DoctorHospitalName>{org}</DoctorHospitalName>
                <DoctorSpecialist>{specialist}</DoctorSpecialist>
                <DoctorDetails>{details}</DoctorDetails>
                <DoctorDetails>Duration: {visitDurationInMin} Minutes</DoctorDetails>
                <DoctorAvailability>
                    {/* Doctor Available Time */}
                    {Object.keys(availability).map((key, index) => (
                        <DoctorAvailabilityItem key={index}>
                            <DoctorAvailabilityDay>{key}</DoctorAvailabilityDay>
                            <DoctorAvailabilityTime>{availability[key]}</DoctorAvailabilityTime>
                        </DoctorAvailabilityItem>
                    ))}
                </DoctorAvailability>
            </DoctorContent>
        </DoctorItem>
    )
}

Details.propTypes = {
    doctor: PropTypes.object
}

export default Details