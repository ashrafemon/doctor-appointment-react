import styled from "styled-components";

export const ToastMessage = styled.div`
  width: 40%;
  min-width: 300px;
  padding: 10px 30px 10px 10px;
  box-sizing: border-box;
  background-color: ${props => props.type === 'success' ? '#4BB543 ' : '#F32013'};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  border-radius: 5px;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
`

export const ToastMessageText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`

export const ToastMessageClose = styled.button`
  border: 0;
  outline: 0;
  padding: 2px 5px;
  font-size: 20px;
  background-color: transparent;
  color: #ffffff;
  font-weight: bold;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 9999;
  cursor: pointer;
`