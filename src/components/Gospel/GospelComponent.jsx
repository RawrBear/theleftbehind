import React from "react"

export default function GospelComponent({
    title,
    color,
    content,
    verse,
    verseLink
}) {
    return (
        <div className="w-1/2 px-6 py-4 rounded-lg shadow-xl bg-gray-600/60 ">
            <h3 className={`mb-3 text-xl font-bold ${color}`}>{title}</h3>
            <p className="text-sm leading-5 tracking-wide text-white text-opacity-100">
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
    )
}
