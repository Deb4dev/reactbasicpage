
import './Hero.css'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'
import arrow_btn from '../../assets/arrow_btn.png'
function Hero({heroData,setheroImage,setplayStatus,playStatus,heroImage}) {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>explore the featues</p>
        <img onClick={()=>{setheroImage((count)=>{return count===2?0:count+1})}} src={arrow_btn} alt="" />
      </div>  
      <div className="hero-dot-play">
          <ul className="hero-dots">
            <li onClick={()=>{setheroImage(0)}} className={heroImage===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>{setheroImage(1)}} className={heroImage===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>{setheroImage(2)}} className={heroImage===2?"hero-dot orange":"hero-dot"}></li>
          </ul>
          <div className="hero-play">
            <img onClick={()=>{setplayStatus(!playStatus)}} src={playStatus?pause_icon:play_icon} alt="" />
            <p>{playStatus?"pause the video" : "see the video"}</p>
          </div>
      </div>  
    </div>
  )
}

export default Hero
