import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'

const Diary = () => {
  const {id}=useParams()
  const nav = useNavigate()
  
  return (
    <div>
      <Header
        title={"yyyy-mm-dd기록"}
        leftchild={<Button text={"<뒤로가기"}/>}
        rightchild={<Button text={"수정하기"}/>}
      />
       <Viewer/>
    </div>
  )
}

export default Diary