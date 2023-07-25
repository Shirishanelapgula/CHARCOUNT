import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import {
  Container,
  RightContainer,
  LeftContainer,
  RightTop,
  Para,
  InputContainer,
  Button,
  RightPara,
  Image,
  RightBottom,
  Input,
  List,
  Item,
  Paragraph,
} from './StyledComponent'

const CharCount = () => {
  const [charList, updateCharList] = useState([])

  const [text, changeText] = useState('')

  const onChangeText = event => {
    changeText(event.target.value)
  }

  const addItem = () => {
    const newObj = {
      id: uuidV4(),
      name: text,
      count: text.length,
    }

    const newList = [...charList, newObj]
    updateCharList(newList)
    changeText('')
  }

  return (
    <Container>
      <RightContainer>
        <RightTop>
          <Para>Count the characters like a Boss...</Para>
        </RightTop>
        <RightBottom>
          {charList.length === 0 ? (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <List>
              {charList.map(each => (
                <Item key={each.id}>
                  <Paragraph>{`${each.name} : ${each.count}`}</Paragraph>
                </Item>
              ))}
            </List>
          )}
        </RightBottom>
      </RightContainer>
      <LeftContainer>
        <RightPara>Character Counter</RightPara>
        <InputContainer>
          <Input
            type="text"
            value={text}
            onChange={onChangeText}
            placeholder="Enter the Characters here"
          />
          <Button type="button" onClick={addItem}>
            Add
          </Button>
        </InputContainer>
      </LeftContainer>
    </Container>
  )
}

export default CharCount
