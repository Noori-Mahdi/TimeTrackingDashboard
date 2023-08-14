import { useState } from 'react'
import Work from './images/icon-work.svg'
import Play from './images/icon-play.svg'
import Study from './images/icon-study.svg'
import Exercise from './images/icon-exercise.svg'
import Social from './images/icon-social.svg'
import SeflCare from './images/icon-self-care.svg'
import userImg from './images/image-jeremy.png'
import User from './Components/User'
import CardList from './Components/CardList'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


function App() {
  const [user,setUser] = useState({userName:"jeremy robson",img:userImg})

  const [cards,setCards] = useState([
    {id:0,nameCard:"work",img:Work,lastWeek:36,thisWeek:32},
    {id:1,nameCard:"play",img:Play,lastWeek:8,thisWeek:10},
    {id:2,nameCard:"study",img:Study,lastWeek:7,thisWeek:4},
    {id:3,nameCard:"exercise",img:Exercise,lastWeek:5,thisWeek:4},
    {id:4,nameCard:"social",img:Social,lastWeek:10,thisWeek:5},
    {id:5,nameCard:"self care",img:SeflCare,lastWeek:2,thisWeek:2}
  ])
  return (
    <div className='row justify-content-between m-0 p-4'>
      <User img={user.img} userName={user.userName}/>
      <CardList cards={cards}/>

    </div>
  )
}

export default App
