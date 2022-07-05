import { LeftLabel } from "./TimelineLabels/LeftLabel";
import { RightLabel } from "./TimelineLabels/RightLabel";

function Timeine() {
    return (
        <div>
            {/* <!-- component --> */}
            <div className="flex flex-row justify-center w-full h-20 pt-8">
                <h2>Timeline of Events</h2>
            </div>
            <div className="container w-full h-full mx-auto ">
                <div className="relative h-full p-10 overflow-hidden wrap">
                    {/* CENTER LINE */}
                    <div
                        className="absolute h-full border border-secondary border-2-2 border-opacity-20"
                        style={{ left: "50%" }}
                    ></div>
                    {/* END CENTER LINE */}

                    {/* <!-- First right label --> */}
                    <RightLabel
                        title={"TEST"}
                        color={"text-secondary"}
                        number={"1"}
                        content={"THIS IS A TEST"}
                    />
                    {/* <!-- End first right label --> */}

                    {/*  <!-- First left label --> */}

                    <LeftLabel
                        title={"TEST"}
                        number={"2"}
                        color={"text-secondary"}
                        content={"THIS IS A TEST"}
                    />
                    {/* End first left label */}
                </div>
            </div>
        </div>
    );
}

export default Timeine;
