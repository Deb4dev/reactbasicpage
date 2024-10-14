import {useEffect, useState} from "react"
import Background from "./components/Background/Background"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/HeroImage/Hero"

function App() {
  const heroData = [{text1:"Dive into",text2:"what you love"},{text1:"Indulge",text2:"your passion"},{text1:"Give into",text2:"your passion"}]
  const  [playStatus,setplayStatus] = useState(false)
  const  [heroImage,setheroImage] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setheroImage((count)=>{return count===2?0:count+1 })
    },3000)
  },[])

  return (
    <div>
      <Background playStatus = {playStatus} heroImage={heroImage}/>
      <Navbar/>
      <Hero heroData = {heroData[heroImage]} setheroImage = {setheroImage} setplayStatus ={setplayStatus} playStatus ={playStatus} heroImage={heroImage} />
    </div>
  )
}

export default App
