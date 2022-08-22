import React from "react"

export const RightLabel = ({
    number,
    title,
    color,
    content,
    verse,
    verseLink
}) => {
    return (
        <div className="flex items-center justify-between w-full mb-8 right-timeline ">
            <div className="order-1 lg:w-5/12"></div>

            {/* DOT */}
            <div className="absolute z-20 flex items-center order-1 w-8 h-8 bg-gray-900 rounded-full shadow-xl left-4 lg:static">
                <h2 className={`mx-auto text-lg font-bold text-secondary`}>
                    {number}
                </h2>
            </div>
            {/* END DOT */}

            {/* LABEL CONTENT */}
            <div className="order-1 px-6 py-4 rounded-lg shadow-xl lg:w-5/12 bg-base-200">
                <h3 className={`mb-3 text-xl font-bold ${color}`}>{title}</h3>
                <p className="tracking-wide text-opacity-100 ">
                    {verse === "" ? (
                        " "
                    ) : (
                        <a
                            href={verseLink}
                            className="pr-2 font-bold text-blue-400 brightness-90 hover:brightness-110"
                        >
                            {verse}
                        </a>
                    )}
                    {content}
                </p>
            </div>

            {/* END LABEL CONTENT */}
        </div>
    )
}
