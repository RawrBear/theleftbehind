import Bowls from "./Bowls"
import Midpoint from "./Midpoint"
import Seals from "./Seals"
import Trumpets from "./Trumpets"

function Timeline() {
    return (
        <div id="timeline">
            <div className="text-center">
                {" "}
                <h2 className="text-secondary">Timeline of The Wrath of God</h2>
            </div>

            {/* <!-- component --> */}
            {/* START SEALS */}
            <Seals />
            {/* END SEALS */}

            {/* START MIDPOINT */}
            <Midpoint />
            {/* END MIDPOINT */}

            {/* START TRUMPETS */}
            <Trumpets />
            {/* END TRUMPETS */}

            {/* START BOWLS */}
            <Bowls />
            {/* END BOWLS */}

            {/* END OF TIMELINE */}
        </div>
    )
}

export default Timeline
