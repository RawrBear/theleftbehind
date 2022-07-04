import HeaderMenu from "./components/HeaderMenu";
import Hero from "./components/Hero/Hero";
import { IntroText } from "./components/IntroText/IntroText";
import Timeline from "./components/Timeline/Timeline";

function App() {
    return (
        <main>
            <HeaderMenu />
            <Hero />
            <IntroText />
            <Timeline />
        </main>
    );
}

export default App;
