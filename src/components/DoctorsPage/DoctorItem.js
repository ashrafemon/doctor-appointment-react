import React from "react";
import {
    DoctorAppointBtn,
    DoctorDetails,
    DoctorItemContent,
    DoctorItemImage,
    DoctorListItem,
    DoctorName,
    DoctorSpecialist
} from "./styled";
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import DoctorDefaultImage from './../../assets/img/doctor-default.jpg'

const DoctorItem = ({doctor}) => {
    const history = useHistory()

    // Destructure Doctor Object
    const {name, code, specialist, details} = doctor

    const appointBtnHandler = () => {
        // Push to Doctor Specific Page
        history.push(`/doctors/${code}`)
    }

    return (
        <DoctorListItem>
            {/* Doctor Avatar */}
            <DoctorItemImage src={DoctorDefaultImage}/>

            {/* Doctor Information */}
            <DoctorItemContent>
                <DoctorName>{name}</DoctorName>
                <DoctorSpecialist>{specialist}</DoctorSpecialist>
                <DoctorDetails>{details}</DoctorDetails>
                <DoctorAppointBtn onClick={appointBtnHandler}>Appoint with {name}</DoctorAppointBtn>
            </DoctorItemContent>
        </DoctorListItem>
    )
}

DoctorItem.propTypes = {
    doctor: PropTypes.object
}

export default DoctorItem