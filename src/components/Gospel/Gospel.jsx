import React from "react"
import GospelComponent from "./GospelComponent"

export default function Gospel() {
    return (
        <div
            id="gospel"
            className="flex flex-col items-center w-full px-6 space-y-6 "
        >
            <h2 className="text-secondary">Salvation</h2>
            <div className="w-1/2 space-y-2 text-white">
                <p>
                    If you are here before the rapture, you can still be saved
                    from the tribulation by reading the gospel below and
                    believing that Jesus died on the cross to pay for your sins,
                    that's it. Nothing more, nothing less.
                </p>
                <p>
                    If the rapture has already happened, you can be saved from
                    an eternity in the lake of fire. In your case, you have to
                    read and believe the gospel just the same as before but you
                    also have an extra step. You have to refuse to take the
                    "mark of the beast" as doing so will mark you as a follower
                    of Satan. And no, you can't just say you're taking the mark
                    to survive and "not really" believe it, you have to choose
                    your side.
                </p>
                <p>
                    God promises an eternity in heaven and on the new earth.
                    Satan will give you a place next to him for eternity in the
                    lake of fire. As tough as it may be, choose God and have an
                    after life in heaven.
                </p>
            </div>

            <GospelComponent
                title={"The Gospel"}
                content={
                    <>
                        ...if you confess with your mouth the Lord Jesus and
                        believe in your heart that God has raised Him from the
                        dead, you will be saved. 10 For with the heart one
                        believes unto righteousness, and with the mouth
                        confession is made unto salvation. 11 For the Scripture
                        says, “Whoever believes on Him will not be put to
                        shame.” 12 For there is no distinction between Jew and
                        Greek, for the same Lord over all is rich to all who
                        call upon Him. 13 For “whoever calls on the name of the
                        Lord shall be saved".
                    </>
                }
                verse={"Romans 10:9-13"}
                verseLink={
                    "https://www.biblegateway.com/passage/?search=romans+10%3A9-13&version=NKJV"
                }
                color={"text-secondary"}
            />
        </div>
    )
}
