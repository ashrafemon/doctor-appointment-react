import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const Content = styled.div`
  width: 50%;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;

  @media (max-width: 990px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 95%;
  }
`

export const PortionTitle = styled.h4`
  font-size: 20px;
  color: #22BDB6;
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const DoctorList = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const DoctorListItem = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 5px 1px #22BDB6;
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.1);

    @media (max-width: 600px) {
      transform: scale(1.05);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const DoctorItemImage = styled.img`
  width: 30%;
  border-radius: 5px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 50%;
    margin: auto;
  }
`

export const DoctorItemContent = styled.div`
  width: 70%;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const DoctorName = styled.h6`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 800;
  color: #22BDB6;
  margin-bottom: 5px;
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

export const DoctorAppointBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: #22BDB6;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #64AEC7;
  }

  @media (max-width: 600px) {
    display: block;
    width: 100%;
  }
`