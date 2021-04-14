import React from "react";
import {useSelector} from "react-redux";
import {Content, DoctorList, PortionTitle, Wrapper} from "./styled";
import DoctorItem from "./DoctorItem";

const DoctorsPage = () => {
    const doctors = useSelector(state => state.doctor.doctors)

    return (
        <Wrapper>
            <Content>
                {/* Doctor List Title */}
                <PortionTitle>Doctor List</PortionTitle>

                {/* Doctor List */}
                <DoctorList>
                    {doctors && doctors.map((doctor, index) => (
                        <DoctorItem key={index} doctor={doctor}/>
                    ))}
                </DoctorList>
            </Content>
        </Wrapper>
    )
}

export default DoctorsPage