import { Fragment } from "react"
import { LeftLabel } from "./TimelineLabels/LeftLabel"
import { RightLabel } from "./TimelineLabels/RightLabel"

export default function Trumpets() {
    return (
        <Fragment>
            <div className="flex flex-row justify-center w-full h-20 pt-8">
                <h2>Trumpets</h2>
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

                    {/* Start first trumpet (Right) */}
                    <RightLabel
                        number={"1"}
                        title={"Fire, Blood & Hail"}
                        content={
                            <>
                                The first of the trumpet judgments brings
                                flaming hail mixed with blood falling from the
                                sky. This will cause global wild fires that will
                                burn up a third of all trees, grass and
                                vegetation on the planet.
                            </>
                        }
                        verse={" Revelation 8:7"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+8%3A7&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End first trumpet (Right) */}

                    {/* Start second trumpet (Left) */}
                    <LeftLabel
                        number={"2"}
                        title={"Mountain of Fire"}
                        content={
                            <>
                                At the second trumpet being blown a “mountain of
                                fire will be thrown into the sea”. I take this
                                to mean a meteor the size of a mountain will
                                land in an ocean. The result is one third of the
                                water will become blood, a third of the life in
                                the sea will die and a third of the worlds ships
                                will be destroyed. It’s my assumption that this
                                will be done by a tsunami or something of that
                                nature{" "}
                            </>
                        }
                        verse={" Revelation 8:8–9"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/8/8-9"
                        }
                        color={"text-secondary"}
                    />
                    {/* End second trumpet (Left) */}

                    {/* Start third trumpet (Right) */}
                    <RightLabel
                        number={"3"}
                        title={"Wormwood"}
                        content={
                            <>
                                {" "}
                                We’re still running with meteors with this
                                trumpet. Another one called “Wormwood” will be
                                dropped on the earth but on land this time. The
                                effect of this will poison rivers, waterways and
                                underground springs which will kill “many
                                people”. We’re not given a death count but
                                imagine it being high.
                            </>
                        }
                        verse={" Revelation 8:12"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/8/12"
                        }
                        color={"text-secondary"}
                    />
                    {/* End third trumpet (Right) */}

                    {/* Start fourth trumpet (Left) */}
                    <LeftLabel
                        number={"4"}
                        title={"Longer Nights"}
                        content={
                            <>
                                The fourth trumpet is going to cause a third
                                less light on the planet. This means a third
                                less day time, a third less starlight and the
                                moon will be a third duller. Night time will be
                                a third more with less light, that is going to
                                cause less crop produce, less vegetation
                                surviving and I imagine the crime rate will be
                                insane at this point.
                            </>
                        }
                        verse={"Revelation 8:13"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/8/13"
                        }
                        color={"text-secondary"}
                    />
                    {/* End fourth trumpet (Left) */}

                    {/* Start fifth trumpet (Right) */}
                    <RightLabel
                        number={"5"}
                        title={"Crazy Looking Insects"}
                        content={
                            <>
                                You might have heard before about some crazy
                                insect things showing up at “the end of days”,
                                well here we are. Trumpet number five starts
                                with a “star falling to earth”, which is
                                depicted as an angel coming down with a key to
                                the bottomless pit. That could be literal, or it
                                could be yet another meteor that crashes into a
                                place on the earth the breaks open a cavern
                                we’ve never found.
                                <br />
                                <br />
                                Either way, this “pit” will be opened and out of
                                it will pour smoke “like from a great furnace”
                                that will darken the sun. Out of this pit will
                                come locusts that have been given poison like a
                                scorpion. They’re told not to harm anything but
                                those people who “do not have the seal of God on
                                them”, in other words, people who have still not
                                accepted Jesus.
                            </>
                        }
                        verse={" Revelation 9:1-4"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/9/1-4"
                        }
                        color={"text-secondary"}
                    />
                    {/* End fifth trumpet (Right) */}

                    {/* Start sixth trumpet (Left) */}
                    <LeftLabel
                        number={"6"}
                        title={"Another Third Dies"}
                        content={
                            <>
                                This trumpet will “Release the four angels who
                                are bound at the great river Euphrates” and they
                                are tasked with killing another third of the
                                unsaved. It actually says that these angels have
                                “been prepared for the hour, the day, the month,
                                and the year” so this is yet more proof that God
                                had this timeline already planned out since
                                before humanity were created.
                                <br /> <br />
                                It’s not stated whether or not you will actually
                                see these angels walking around killing people
                                or if they will come as a plague, either way,
                                they will bring more death with them.
                            </>
                        }
                        verse={"Revelation 9:13"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/9/13"
                        }
                        color={"text-secondary"}
                    />
                    {/* End sixth trumpet (Left) */}

                    {/* Start seventh trumpet (Right) */}
                    <RightLabel
                        number={"7"}
                        title={"Calling For The Vials/Bowls"}
                        content={
                            <>
                                This trumpet seems to be a bit different than
                                the rest as we’re not told what happens on the
                                earth at this point. The description is
                                surrounding heaven and what is happening there
                                at the time, the most important thing is that
                                the bowls/vials are called for.
                                <br />
                                <br />
                                This is a good time to point out other things
                                that will have been in play so far but that
                                we’re not exactly sure where they fit in.
                            </>
                        }
                        verse={" Revelation 13:5-9"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/13/5-9"
                        }
                        color={"text-secondary"}
                    />

                    {/* End seventh trumpet (Right) */}
                </div>

                {/* END OF CONTENT */}
            </div>
        </Fragment>
    )
}
