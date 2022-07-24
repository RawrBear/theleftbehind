export default function TextMessageComponent({
    name,
    message,
    socialURL,
    socialName,
}) {
    return (
        <div className="shadow-xl card w-96 bg-base-300">
            <div className="space-y-3 card-body">
                <h2 className="card-title">{name}</h2>
                <p>{message}</p>
                <div className="justify-center card-actions">
                    <button className="btn btn-sm btn-accent">
                        <a href={socialURL}>{socialName}</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
