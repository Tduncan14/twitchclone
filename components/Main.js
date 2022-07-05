import LiveChannels from "./LiveChannels"
import Hero from './Hero'
import Iconbar from './Iconbar'
import Caterogies from './Caterogies'

function Main() {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <LiveChannels />
      <Iconbar />
    <Caterogies />
     
    </div>
  )
}

export default Main
