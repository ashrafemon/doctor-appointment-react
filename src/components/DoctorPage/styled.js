import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
  }
`

export const NotFound = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 600;
`

export const DoctorItem = styled.div`
  width: 30%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 0 5px 1px #22BDB6;
  border-radius: 5px;

  @media (max-width: 990px) {
    width: 40%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const DoctorImage = styled.img`
  width: 50%;
  display: block;
  margin: 0 auto 20px;
  border-radius: 5px;
  box-sizing: border-box;
`

export const DoctorContent = styled.div`
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`

export const DoctorCode = styled.p`
  font-size: 12px;
  color: #22BDB6;
  margin-bottom: 5px;
  text-align: right;
  font-weight: 600;
`

export const DoctorName = styled.h6`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 800;
  color: #22BDB6;
  margin-bottom: 5px;
`

export const DoctorHospitalName = styled.p`
  font-size: 14px;
  color: #22BDB6;
  margin-bottom: 5px;
  font-weight: 600;
`

export const DoctorSpecialist = styled.p`
  font-size: 13px;
  color: #22BDB6;
  padding-bottom: 8px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 15px;
  font-weight: 600;
`

export const DoctorDetails = styled.p`
  font-size: 12px;
  color: #22BDB6;
  margin-bottom: 15px;
  line-height: 1.8;
`

export const DoctorAvailability = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const DoctorAvailabilityItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DoctorAvailabilityDay = styled.h6`
  font-size: 13px;
  font-weight: 600;
  color: #22BDB6;
  text-transform: uppercase;
`

export const DoctorAvailabilityTime = styled.h6`
  font-size: 13px;
  font-weight: 600;
  color: #22BDB6;
`

export const AppointCalendarContent = styled.div`
  width: 69%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 0 5px 1px #22BDB6;
  border-radius: 5px;
  overflow-x: auto;

  @media (max-width: 990px) {
    width: 59%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Dialog = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DialogContent = styled.div`
  width: 60%;
  background-color: #ffffff;
  box-shadow: 0 0 2px 1px #ededed;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 990px) {
    width: 80%;
  }
`

export const DialogCloseBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: #22BDB6;
  border-radius: 50%;
  outline: 0;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -10px;
  transition: background-color 500ms;

  &:hover {
    background-color: red;
  }
`

export const DialogTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #ededed;
  color: #22BDB6;
  margin-bottom: 15px;
`

export const DialogContentBox = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #ededed;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #22BDB6;
    border-radius: 5px;
  }
`

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const AvailabilityBox = styled.div`
  width: 40%;
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const FormBox = styled.div`
  width: 60%;
  padding: 5px 10px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const PortionTitle = styled.h6`
  font-size: 18px;
  color: #22BDB6;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`

export const TimeList = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #ededed;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #22BDB6;
    border-radius: 5px;
  }
`
export const TimeListItem = styled.button`
  width: 100%;
  display: block;
  padding: 8px 10px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: ${props => props.isActive ? '#22BDB6' : '#ffffff'};
  color: ${props => props.isActive ? '#ffffff' : '#000000'};
  outline: 0;
  border: 0;
  text-transform: uppercase;
  box-shadow: 0 0 1px 1px #ededed;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 500ms, color 500ms;

  &:hover {
    background-color: #22BDB6;
    color: #ffffff;
  }
`

export const FormGroup = styled.div`
  width: 100%;
  padding: 5px 0;
`

export const FormInput = styled.input`
  width: 100%;
  display: block;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  padding: 10px 15px;
  box-shadow: 0 0 1px 1px #ededed;
  border-radius: 5px;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
  }
`

export const FormTextarea = styled.textarea`
  width: 100% !important;
  display: block;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  margin: 0;
  padding: 10px 15px;
  box-shadow: 0 0 1px 1px #ededed;
  border-radius: 5px;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  resize: none;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
  }
`

export const FormSubmitBtn = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: #22BDB6;
  color: #ffffff;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
`