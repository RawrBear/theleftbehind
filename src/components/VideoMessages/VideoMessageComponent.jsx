import ReactPlayer from "react-player"

export default function VideoMessageComponent({
    videoURL,
    chanName,
    vidDesc,
    chanURL
}) {
    return (
        <div className="shadow-xl card w-96 bg-base-300">
            <ReactPlayer url={videoURL} controls={true} width={"100%"} />

            <div className="space-y-3 card-body">
                <h2 className="card-title">{chanName}</h2>
                <p>{vidDesc}</p>
                <div className="justify-center card-actions">
                    <button className="btn btn-sm btn-accent">
                        <a href={chanURL}>{chanName}</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
