import React from "react";

function HeaderMenu() {
    return (
        <div className="border-b-2 navbar bg-base-100/75 border-slate-800 z-50 sticky top-0">
            <div className="flex-1">
                <a className="text-xl normal-case btn btn-ghost">
                    <h3>THE LEFT BEHIND</h3>
                </a>
            </div>
            <div className="flex-none">
                <ul className="p-0 menu menu-horizontal">
                    <li>
                        <a>Disappearance</a>
                    </li>

                    <li>
                        <a>Timeline</a>
                    </li>
                    <li>
                        <a>Messages</a>
                    </li>
                    <li>
                        <a>Salvation</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;
