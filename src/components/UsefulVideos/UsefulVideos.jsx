import UsefulVideosComponent from "./UsefulVideoComponent"

export const UsefulVideos = () => {
    return (
        <div id="messages" className="flex flex-row justify-center">
            <div className="flex flex-col items-center space-y-4">
                <header className="w-full text-center">
                    <h2>Useful Videos</h2>
                </header>
                <p>
                    These are videos that have useful and important information
                    for your future.
                </p>
                <section className="flex flex-row flex-wrap justify-center w-full gap-4 pt-12">
                    <UsefulVideosComponent
                        videoURL={"https://youtu.be/m7THnthseEE"}
                        chanName={"Watchman On The Wall 88"}
                        vidDesc={
                            "Millions Of People Just Vanished!?!? What Just Happened!?!? - A video explaining the rapture and tribulation in more depth"
                        }
                        chanURL={
                            "https://www.youtube.com/c/WatchmanOnTheWall88"
                        }
                    />

                    <UsefulVideosComponent
                        videoURL={"https://www.youtube.com/watch?v=0oBYAvnv2oU"}
                        chanName={"Dr Barry Awe"}
                        vidDesc={
                            "Will the RAPTURE occur at THE FEAST OF TRUMPETS! - Dr Barry breaks down the Feast Of  Trumpets being a possible rapture time."
                        }
                        chanURL={
                            "https://www.youtube.com/channel/UChIhQgocSV49rGf00dD52hQ"
                        }
                    />
                </section>
            </div>
        </div>
    )
}
