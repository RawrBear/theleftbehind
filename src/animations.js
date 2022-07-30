import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const menuScroll = (sectionId) => {
    console.log("animation sectionId :>> ", sectionId)
    gsap.to(window, {
        duration: 1.5,
        scrollTo: {
            y: sectionId,
            offsetY: 70
        }
    })
}
