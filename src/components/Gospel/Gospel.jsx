import React from "react"
import GospelComponent from "./GospelComponent"

export default function Gospel() {
    return (
        <div id="gospel">
            <GospelComponent
                title={"The Gospel"}
                content={
                    <>
                        if you confess with your mouth the Lord Jesus and
                        believe in your heart that God has raised Him from the
                        dead, you will be saved. 10 For with the heart one
                        believes unto righteousness, and with the mouth
                        confession is made unto salvation. 11 For the Scripture
                        says, “Whoever believes on Him will not be put to
                        shame.” 12 For there is no distinction between Jew and
                        Greek, for the same Lord over all is rich to all who
                        call upon Him. 13 For “whoever calls on the name of the
                        Lord shall be saved
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
