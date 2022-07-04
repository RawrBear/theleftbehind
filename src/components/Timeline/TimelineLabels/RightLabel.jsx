import React from "react";

export const RightLabel = ({ number, title, color, content }) => {
    return (
        <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 w-5/12"></div>

            {/* DOT */}
            <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-900 rounded-full shadow-xl">
                <h2 className={`mx-auto text-lg font-semibold ${color}`}>
                    {number}
                </h2>
            </div>
            {/* END DOT */}

            <div className="order-1 w-5/12 px-6 py-4 bg-gray-600 rounded-lg shadow-xl">
                <h3 className={`mb-3 text-xl font-bold ${color}`}>{title}</h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    {content}
                </p>
            </div>
        </div>
    );
};
