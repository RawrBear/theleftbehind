import HeaderMenu from "./components/HeaderMenu";
import Hero from "./components/Hero/Hero";
import { IntroText } from "./components/IntroText/IntroText";
import Timeline from "./components/Timeline/Timeline";
import { VideoMessage } from "./components/VideoMessages/VideoMessage";

function App() {
    return (
        <main>
            <HeaderMenu />
            <Hero />
            {/* ADDED SPACING BETWEEN EACH SECTION */}
            <div className="space-y-20">
                <IntroText />
                <Timeline />
                <VideoMessage />
            </div>
        </main>
    );
}

export default App;
