import { Footer } from "./components/Footer/Footer"
import Gospel from "./components/Gospel/Gospel"
import HeaderMenu from "./components/HeaderMenu"
import Hero from "./components/Hero/Hero"
import { IntroText } from "./components/IntroText/IntroText"
import { TextMessage } from "./components/TextMessages/TextMessage"
import Timeline from "./components/Timeline/Timeline"
import { VideoMessage } from "./components/VideoMessages/VideoMessage"

function App() {
    return (
        <main>
            <HeaderMenu />
            <Hero />
            {/* ADDED SPACING BETWEEN EACH SECTION */}
            <div className="px-40 space-y-32">
                <IntroText />
                <Timeline />
                {/* <VideoMessage />
                <TextMessage /> */}
                <Gospel />
                <Footer />
            </div>
        </main>
    )
}

export default App
