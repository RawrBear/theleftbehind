export const Footer = () => {
    return (
        <footer className="h-28">
            <section className="grid grid-cols-3 p-8 space-y-3 border-t-2 border-slate-600">
                <h3 className="col-span-3">Credits</h3>
                <div className="space-y-3">
                    <h4>
                        <strong>Timeline:</strong>
                    </h4>
                    <ul>
                        <li>
                            <a href="https://www.biblegateway.com/">
                                Bible Gateway
                            </a>
                        </li>
                        <li>
                            <a href="https://biblia.com/bible">Biblia</a>
                        </li>
                        <li>
                            <a href="https://www.gotquestions.org/seven-bowls-Revelation.html">
                                Got Questions
                            </a>
                        </li>
                        <li>
                            <a href="https://bible.org/illustration/events-tribulation-period">
                                Bible.Org
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
