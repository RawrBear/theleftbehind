import { Fragment } from "react"
import { LeftLabel } from "./TimelineLabels/LeftLabel"
import { RightLabel } from "./TimelineLabels/RightLabel"

function Timeine() {
    return (
        <div>
            <h2>Timeline of The Wrath of God</h2>
            {/* <!-- component --> */}
            <div className="flex flex-row justify-center w-full h-20 pt-8">
                <h2>Seals</h2>
            </div>
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

                {/* **** END SEALS **** */}

                {/* **** START TRUMPETS **** */}

                <div className="flex flex-row justify-center w-full h-20 pt-8">
                    <h2>Trumpets</h2>
                </div>
                <div className="container w-full h-full mx-auto ">
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

                    <RightLabel
                        number={"7.5"}
                        title={""}
                        content={
                            <>
                                We know that after the rapture (the
                                disappearance), there will be a merging of all
                                religions in to a one world religion, and by the
                                mid point of the tribulation (this timeline),
                                the antichrist (leader of the one world
                                government) will start attacking and killing
                                anyone following that religion.
                                <br />
                                <br />
                                During this time, the antichrist will be killed,
                                It’s speculated that he’ll be assassinated
                                during a public address, but will come back to
                                life. It’s also thought that he will be dead for
                                3 days to mimic Jesus’ resurrection. Once he is
                                killed, Satan is thrown out of heaven and down
                                to the earth where he will “possess” (give power
                                to) the antichrist, healing the wound and
                                bringing him back to life.
                                <br />
                                <br />
                                Once he is back on his feet, he will call
                                himself God and force everyone who is not saved
                                by God to take “the mark of the beast”. We’re
                                not told exactly what this is but without it you
                                wont be able to buy food, hold a job, or have
                                any money. He will kill anyone who doesn’t take
                                the mark and worship him.
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

                {/* **** END TRUMPETS **** */}
                <div className="flex flex-row justify-center w-full h-20 pt-8">
                    <h2>Bowls</h2>
                </div>
                {/* **** START BOWLS **** */}
                <div className="container w-full h-full mx-auto ">
                    {/* Start first bowls (Right) */}
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
                                Those who re marked by God will be spared from
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
                        color={"text-primary"}
                    />
                </div>
            </div>
        </div>
        /* **** END BOWLS **** */
    )
}

export default Timeine
