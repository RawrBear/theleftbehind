import React from "react";
import ReactPlayer from "react-player";

export const VideoMessage = () => {
    return (
        <div className="flex flex-row justify-cente">
            <div className="flex flex-col items-center p-16 space-y-4">
                <header>
                    <h2>Messages To You</h2>
                </header>
                <p>
                    These are video messages left for you by various YouTubers
                    and Biblical researchers. They are messages to you, the left
                    behind.
                </p>
                <section className="flex flex-row flex-wrap justify-center w-full gap-4 pt-12">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=8DploTqLstE&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=2"
                        controls="true"
                    />
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=8DploTqLstE&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=2"
                        controls="true"
                    />
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=8DploTqLstE&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=2"
                        controls="true"
                    />
                </section>
            </div>
        </div>
    );
};
