import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
  background-color: #ffc533;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
  background-color: #272c47;
`
export const RightTop = styled.div`
  height: 25vh;
  width: 50vw;
  background-color: #ffbf1f;
`

export const RightBottom = styled.div`
  height: 75vh;
  width: 50vw;
`
export const Image = styled.img`
  height: 50vh;
  width: 50vw;
`

export const Para = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: #0f172a;
  font-weight: bold;
  text-align: center;
`
export const RightPara = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: #ffbf1f;
  font-weight: bold;
  text-align: center;
`
export const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
`
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #ffbf1f;
  color: #0f172a;
  height: 35px;
  width: 90px;
  margin-left: 10px;
`
export const Item = styled.li`
  font-size: 25px;
  font-family: 'Roboto';
  color: #0f172a;
  padding: 10px;
`

export const Paragraph = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  color: #0f172a;
  padding: 10px;
`
export const List = styled.ul`
  list-style-type: none;
`
