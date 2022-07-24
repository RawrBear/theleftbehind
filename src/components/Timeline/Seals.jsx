import { Fragment } from "react"
import { LeftLabel } from "./TimelineLabels/LeftLabel"
import { RightLabel } from "./TimelineLabels/RightLabel"
export default function Seals() {
    return (
        <Fragment>
            <div className="flex flex-row justify-center w-full h-20 pt-8">
                <h2>Seals</h2>
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

                    {/* <!-- Start Rapture --> */}
                    <RightLabel
                        number={"1"}
                        title={"Rapture / Disappearance"}
                        content={
                            <>
                                Some people believe this is the start, other
                                people think there will be a gap of a few weeks
                                to a month before the Tribulation starts. Either
                                way, this is the starting point of this
                                timeline. You might be at this point as you're
                                reading this, or further down the line but we're
                                starting here.
                            </>
                        }
                        verse={""}
                        verseLink={""}
                        color={"text-purple-500"}
                    />
                    <RightLabel
                        number={"1.5"}
                        title={""}
                        content={
                            <>
                                {" "}
                                There are 3 major players to keep in mind with
                                this timeline: The False Prophet (a lot of
                                people think this will be the Pope at the time.
                                It could be any leader that will confirm the
                                antichrist is the messiah). The Antichrist (a
                                fake version of Jesus, powered by Satan to trick
                                people into following him. Also known as “The
                                Beast”). Satan (also known as the dragon)
                            </>
                        }
                        color={"text-purple-500"}
                    />
                    {/* <!-- End Rapture --> */}

                    {/* **** START SEALS **** */}

                    {/*  <!-- Start first Seal (Left) --> */}

                    <LeftLabel
                        number={"2"}
                        title={"The Antichrist"}
                        content={
                            <>
                                The Antichrist will be a man with a lot of
                                charisma and will have no problem quickly coming
                                to power as the ruler of the one world
                                government. You will see this man has all the
                                answers and will easily sway people to his point
                                of view. He will confirm a peace deal with
                                Israel and the Middle East to make people think
                                he is the best possible leader. This man is
                                powered by Satan, DO NOT BELIEVE HIM!
                            </>
                        }
                        verse={"Daniel 9:27"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Daniel+9%3A27&version=NKJV"
                        }
                        color={"text-secondary"}
                    />

                    <LeftLabel
                        number={"2.5"}
                        title={""}
                        content={
                            <>
                                Around this time there will be 144,000 Jews
                                saved, they will believe in Jesus and will start
                                preaching about Him. They will be 'sealed'
                                (protected) from the wrath to come so that they
                                can preach to the left behind. It also seems
                                that there will be no wind felt on the earth
                                causing it to heat up with no relief
                            </>
                        }
                        verse={"Revelation 7-7:8"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+7-7%3A8&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End first Seal (Left) */}

                    {/* Start second seal (Right) */}
                    <RightLabel
                        number={"3"}
                        title={"War"}
                        content={
                            <>
                                {" "}
                                There isn't much said about this war, only that
                                "it will take peace from the earth", so expect
                                WW3 to happen at this point. The aftermath of
                                this war will be seen in the following sections
                                as each "seal" is opened in heaven.
                            </>
                        }
                        verse={"Revelation 6:3-4"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+6%3A3-4&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End second seal (Right) */}

                    {/* Start third seal (Left) */}
                    <LeftLabel
                        number={"4"}
                        title={"Famine & Recession "}
                        content={
                            <>
                                War brings about social and economic problems
                                normally, but this is a judgement from God so
                                expect it to be worse than anything seen on
                                earth so far. This could also be the start of a
                                one world currency to help offset the damage.
                            </>
                        }
                        verse={" Revelation 6:5-6"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+6%3A5-6&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End third seal (Left) */}

                    {/* Start fourth seal (Right) */}
                    <RightLabel
                        number={"5"}
                        title={"Widespread Death"}
                        content={
                            <>
                                This event will be unlike anything ever
                                experienced. Death will be everywhere and the
                                result will be a fourth of the population will
                                die. At the time of writing, that will be around
                                1.5 billion people, animals will also die at
                                this time which just adds to the food shortage
                                crisis.
                            </>
                        }
                        verse={"Revelation 6:7-8"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+6%3A7-8&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End fourth seal (Right) */}

                    {/* Start fifth seal (Left) */}
                    <LeftLabel
                        number={"6"}
                        title={"The Killing of The Martyrs"}
                        content={
                            <>
                                Around this time the Antichrist and his false
                                religion will turn their attention to Christians
                                that have been saved (converted to Christianity)
                                since the Rapture occurred. He will start
                                killing them as examples to bring people to his
                                religion. These martyrs will go to heaven and
                                wait until the end of the Tribulation.
                            </>
                        }
                        verse={" Revelation 6:9"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+6%3A9&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End fifth seal (Left) */}

                    {/* Start sixth seal (Right) */}
                    <RightLabel
                        number={"7"}
                        title={"Cosmic Disturbances"}
                        content={
                            <>
                                So far, people could explain away the events by
                                saying its man's greed and nature. Well, man
                                can't do what is coming with this seal being
                                opened! It will start with a great earthquake,
                                the sun will turn black and the mood will turn
                                red as blood. There will be multiple meteors
                                hitting the earth like "the stars of heaven
                                falling to earth". And to finish off this great
                                display of power, the sky will "be rolled up
                                like a scroll" while mountains and islands will
                                be "moved out of their place". People at this
                                point will be trying to hide from the chaos and
                                asking mountains to fall on them to hide them
                                from God's wrath.
                            </>
                        }
                        verse={"Revelation 6:7-8"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+6%3A7-8&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End sixth seal (Right) */}

                    {/* Start seventh seal (Left) */}
                    <LeftLabel
                        number={"8"}
                        title={"Fire, Blood & Hail"}
                        content={
                            <>
                                Around this time, the Antichrist and his false
                                religion will turn their attention to people
                                that have been saved (converted to Christianity)
                                by the 144,000 since the Rapture occurred. He
                                will start killing these new converts as
                                examples to bring people to his religion. These
                                martyrs will go to heaven and wait until the end
                                of the Tribulation. This is the last seal and
                                the trumpets start the "Great Tribulation"
                            </>
                        }
                        verse={" Revelation 6:9"}
                        verseLink={
                            "https://www.biblegateway.com/passage/?search=Revelation+6%3A9&version=NKJV"
                        }
                        color={"text-secondary"}
                    />
                    {/* End seventh seal (Left) */}
                </div>

                {/* END OF CONTENT */}
            </div>
        </Fragment>
    )
}
