import React from "react";

export const LeftLabel = ({ number, title, color, content }) => {
    return (
        <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 w-5/12"></div>

            {/* DOT */}
            <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
                <h2
                    className={`mx-auto text-lg font-semibold text-white ${color}`}
                >
                    {number}
                </h2>
            </div>
            {/* END DOT */}
            <div className="order-1 w-5/12 px-6 py-4 bg-gray-600 rounded-lg shadow-xl ">
                <h3 className={`mb-3 text-xl font-bold text-white ${color}`}>
                    {title}
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    {content}
                </p>
            </div>
        </div>
    );
};
