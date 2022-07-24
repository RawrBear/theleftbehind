import Bowls from "./Bowls"
import Seals from "./Seals"
import Trumpets from "./Trumpets"

function Timeine() {
    return (
        <div>
            <h2>Timeline of The Wrath of God</h2>

            {/* <!-- component --> */}
            {/* START SEALS */}
            <Seals />
            {/* END SEALS */}

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

export default Timeine
