import VideoMessageComponent from "./VideoMessageComponent"

export const VideoMessage = () => {
    return (
        <div id="messages" className="flex flex-row justify-center">
            <div className="flex flex-col items-center space-y-4">
                <header className="w-full text-center">
                    <h2>Video Messages To You</h2>
                </header>
                <p>
                    These are video messages left for you by various Biblical
                    teachers, researchers, and pastors. These are heartfelt
                    messages to you, the left behind.
                </p>
                <section className="flex flex-row flex-wrap justify-center w-full gap-4 pt-12">
                    {/* <VideoMessageComponent
                        videoURL={
                            "https://www.youtube.com/watch?v=8DploTqLstE&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=2"
                        }
                        chanName={"TEST"}
                        vidDesc={"some random blurb"}
                        chanURL={null}
                    /> */}
                    <h4>Videos Coming Soon!</h4>
                </section>
            </div>
        </div>
    )
}
