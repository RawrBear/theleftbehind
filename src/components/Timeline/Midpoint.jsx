import { Fragment } from "react"
import { LeftLabel } from "./TimelineLabels/LeftLabel"
import { RightLabel } from "./TimelineLabels/RightLabel"

export default function Midpoint() {
    return (
        <Fragment>
            <div className="flex flex-row justify-center w-full h-20 pt-8">
                <h2>** Midpoint **</h2>
            </div>

            {/* START CONTENT */}
            <div className="container w-full h-full mx-auto ">
                <div className="relative h-full p-10 overflow-hidden wrap">
                    {/* CENTER LINE */}
                    <div
                        className="absolute h-full border border-secondary border-2-2 border-opacity-20"
                        style={{ left: "50%" }}
                    ></div>
                    {/* END CENTER LINE */}

                    {/* Start first midpoint (Left) */}
                    <LeftLabel
                        number={"1"}
                        title={"One World Religion"}
                        content={
                            <>
                                We know that after the rapture (the
                                disappearance), there will be a merging of all
                                religions in to a one world religion, and by the
                                mid point of the tribulation (this timeline),
                                the antichrist (leader of the one world
                                government) will start attacking and killing
                                anyone following that religion.
                            </>
                        }
                        verse={" Revelation 13:4"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=revelation+13%4A3&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End first midpoint (Left) */}

                    {/* Start second midpoint (Right) */}
                    <RightLabel
                        number={"2"}
                        title={"Antichrist's Resurrection"}
                        content={
                            <>
                                During this time, the antichrist will be killed,
                                It’s speculated that he’ll be assassinated
                                during a public address, but will come back to
                                life. It’s also thought that he will be dead for
                                3 days to mimic Jesus’ resurrection. <br />
                                <br /> Once he is killed, Satan is thrown out of
                                heaven and down to the earth where he will
                                “possess” (give power to) the antichrist,
                                healing the wound and bringing him back to life.
                                <br />
                                <br />
                                Once he is back on his feet, he will call
                                himself God and force everyone who is not saved
                                by God to take “the mark of the beast”. We’re
                                not told exactly what this is but without it you
                                wont be able to buy food, hold a job, or have
                                any money. <br /> He will kill anyone who
                                doesn’t take the mark and worship him.
                            </>
                        }
                        verse={" Revelation 13:3"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=revelation+13%3A3&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End second midpoint (Right) */}
                </div>

                {/* END OF CONTENT */}
            </div>
        </Fragment>
    )
}
