import { Fragment } from "react"
import { LeftLabel } from "./TimelineLabels/LeftLabel"
import { RightLabel } from "./TimelineLabels/RightLabel"

export default function Bowls() {
    return (
        <Fragment>
            <div className="flex flex-row justify-center w-full h-20 pt-8">
                <h2>Bowls</h2>
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

                    <LeftLabel
                        number={"1"}
                        title={"Festering Sores"}
                        content={
                            <>
                                The bowl/vial judgements are called “God’s
                                wrath” and are the most severe of anything we’ve
                                seen so far
                                <br /> <br />
                                The first bowl is poured out and “ugly,
                                festering and harmful sores” will break out on
                                the people that have the mark of the beast.
                                Those who are marked by God will be spared from
                                this punishment.
                            </>
                        }
                        verse={"Revelation 16:1-2"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/16/1-2"
                        }
                        color={"text-secondary"}
                    />
                    {/* End first bowls (Right) */}

                    {/* Start second bowls (Left) */}
                    <RightLabel
                        number={"2"}
                        title={"Oceans Turn To Blood"}
                        content={
                            <>
                                So far a third of all sea life has died but this
                                bowl is poured into the sea, turning the water
                                into “blood like of a dead man” and every living
                                thing in the seas and oceans will die. At this
                                point the waters are dead and devoid of any
                                life.
                            </>
                        }
                        verse={" Revelation 13:5-9"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/16/3"
                        }
                        color={"text-secondary"}
                    />
                    {/* End second bowls (Left) */}

                    {/* Start third bowls (Right) */}
                    <LeftLabel
                        number={"3"}
                        title={"Streams Turn To Blood"}
                        content={
                            <>
                                The third bowl is poured onto the fresh
                                waterways of the earth (rivers, springs,
                                streams, etc) and they too will be turned to
                                blood. Everything living in them will die and
                                all water is no longer safe to drink.
                            </>
                        }
                        verse={"Revelation 16:4"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/16/4"
                        }
                        color={"text-secondary"}
                    />
                    {/* End third bowls (Right) */}

                    {/* Start fourth bowls (Left) */}
                    <RightLabel
                        number={"4"}
                        title={"Scorching Sun"}
                        content={
                            <>
                                This bowl is poured onto the sun, but instead of
                                putting it out like you’d think, it makes it
                                hotter than ever. The sun starts to scorch
                                people with extreme heat during the day, even
                                though the daylight hours are a third shorter
                                than we have right now.
                                <br />
                                <br />
                                The interesting thing here is that “they cursed
                                the name of God who had power over these
                                plagues. They did not repent”, even though they
                                would have been spared if they had only accepted
                                Jesus sooner.
                            </>
                        }
                        verse={"Revelation 16:8–9"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/16/8-9"
                        }
                        color={"text-secondary"}
                    />
                    {/* End fourth bowls (Left) */}

                    {/* Start fifth bowls (Right) */}
                    <LeftLabel
                        number={"5"}
                        title={"Darkness & Pain"}
                        content={
                            <>
                                Bowl number 5 is poured onto the kingdom of the
                                beast, plunging it into darkness and suffering.
                                People will be suffering so much that they will
                                “gnaw on their tongues” but still not ask
                                forgiveness for their sins.
                                <br />
                                <br />
                                This one is a little tricky to piece together as
                                we don’t know where the “Kingdom of The Beast”
                                will be. Some think he will revive the old Roman
                                Empire and call those countries his kingdom,
                                other’s say it will be the whole world. Only
                                those who go through it will know the details.
                            </>
                        }
                        verse={"Revelation 16:10–11"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/16/10-11"
                        }
                        color={"text-secondary"}
                    />
                    {/* End fifth bowls (Right) */}

                    {/* Start sixth bowls (Left) */}
                    <RightLabel
                        number={"6"}
                        title={"Three Demons"}
                        content={
                            <>
                                The next bowl is poured out onto the Euphrates
                                river, drying it up to allow passage to the
                                “kings of the east” to gather at Armageddon. We
                                don’t know for definite if Armageddon is a
                                physical location or if it translated to “the
                                place of gathering” but the armies of the east
                                will come across the dry Euphrates river and
                                gather at this place.
                                <br />
                                <br />
                                At the same time, there will be 3 demons
                                released, one from each of the antichrist, the
                                false prophet and Satan. These demons will
                                perform miracles and trick other kings into
                                going to war against God. While they’re under
                                demonic influence, they will all gather together
                                for the battle of Armageddon.
                            </>
                        }
                        verse={"Revelation 16:12–14"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/16/12-14"
                        }
                        color={"text-secondary"}
                    />
                    {/* End sixth bowls (Left) */}

                    {/* Start seventh bowls (Right) */}
                    <LeftLabel
                        number={"7"}
                        title={"Darkness & Pain"}
                        content={
                            <>
                                The final bowl is emptied into the atmosphere
                                causing a lightning storm and an earthquake so
                                bad that “no earthquake like it has ever
                                occurred since mankind has been on earth”, this
                                results in Jerusalem being split into 3 parts,
                                and all the cities of the world collapse.
                                Islands are flooded, mountains crumble and 100lb
                                hailstones start falling on people.
                            </>
                        }
                        verse={"Revelation 16:17–21"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/16/17-21"
                        }
                        color={"text-secondary"}
                    />
                    {/* End seventh bowls (Right) */}
                </div>
                <div className="flex flex-row justify-center w-full h-20 pt-8">
                    <h2 className="text-primary">Armageddon</h2>
                </div>
                <div className="container w-full h-full mx-auto ">
                    <RightLabel
                        number={"∞"}
                        title={"Armageddon"}
                        content={
                            <>
                                After this, Jesus will return with the saved,
                                and the army that Satan, the False Prophet and
                                the Antichrist have gathered will attack him and
                                his army. Jesus kills them all with a word and
                                starts ruling the earth.
                                <br />
                                <br />
                                The Antichrist and the False Prophet are
                                captured and thrown into the lake of fire, while
                                Satan is chained and thrown into the bottomless
                                pit until the end of the 1000 year reign of
                                Jesus.
                            </>
                        }
                        verse={"Revelation 19:11–21"}
                        verseLink={
                            "https://biblia.com/bible/esv/revelation/19/11-21"
                        }
                        color={"text-purple-500"}
                    />
                </div>

                {/* END OF CONTENT */}
            </div>
        </Fragment>
    )
}
