import TextMessageComponent from "./TextMessageComponent"

export const TextMessage = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center space-y-4">
                <header className="w-full text-center">
                    <h2>Messages To You</h2>
                </header>
                <p>
                    These are messages left for you by various Christians. They
                    are messages to you, the left behind.
                </p>
                <section className="flex flex-row flex-wrap justify-center w-full gap-4 pt-12">
                    <TextMessageComponent
                        name={"TEST"}
                        message={"some random blurb"}
                        socialURL={null}
                        socialName={"YOUTUBE"}
                    />
                </section>
            </div>
        </div>
    )
}
