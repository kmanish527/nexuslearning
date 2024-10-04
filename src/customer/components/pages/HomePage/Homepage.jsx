import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeCard from '../../HomeSectionCard/HomeCard'

export default function Homepage() {
  return (
    <div>

      <div>
      <MainCarousel/>
      </div>

      <div className='space-x-10 flex flex-col justify-center px-5 lg:px-10'>
        
        <HomeCard sectionName={"Trending Courses "}/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
      </div>

    </div>
  )
}
