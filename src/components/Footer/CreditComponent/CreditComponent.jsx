import React from "react";

export const CreditComponent = ({ name, channelName, socials }) => {
    return (
        <div className="flex gap-2">
            <p>{name}</p>
            <p>{channelName}</p>
            <div className="flex gap-2"></div>
        </div>
    );
};
