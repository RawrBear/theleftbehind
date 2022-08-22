import { Footer } from "./components/Footer/Footer"
import Gospel from "./components/Gospel/Gospel"
import HeaderMenu from "./components/HeaderMenu"
import Hero from "./components/Hero/Hero"
import { IntroText } from "./components/IntroText/IntroText"
import { TextMessage } from "./components/TextMessages/TextMessage"
import Timeline from "./components/Timeline/Timeline"
import { UsefulVideos } from "./components/UsefulVideos/UsefulVideos"
import { VideoMessage } from "./components/VideoMessages/VideoMessage"

function App() {
    return (
        <>
            <HeaderMenu />
            <Hero />
            {/* ADDED SPACING BETWEEN EACH SECTION */}
            <div className="px-8 space-y-32 lg:px-40">
                <IntroText />
                <Timeline />
                <Gospel />
                <VideoMessage />
                <UsefulVideos />
                {/* <TextMessage /> */}
                <Footer />
            </div>
        </>
    )
}

export default App
