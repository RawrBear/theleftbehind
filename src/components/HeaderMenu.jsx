import { menuScroll } from "./../animations"

function HeaderMenu() {
    return (
        <div className="sticky top-0 z-50 border-b-2 navbar bg-base-100/75 border-slate-800">
            <div className="flex-1">
                <button className="text-xl normal-case btn btn-ghost">
                    <h3>THE LEFT BEHIND</h3>
                </button>
            </div>
            <div className="flex-none">
                <ul className="p-0 menu menu-horizontal">
                    <li>
                        <button onClick={() => menuScroll("#intro")}>
                            Disappearance
                        </button>
                    </li>

                    <li>
                        <button onClick={() => menuScroll("#timeline")}>
                            Timeline
                        </button>
                    </li>
                    <li>
                        <button onClick={() => menuScroll("#messages")}>
                            Messages
                        </button>
                    </li>
                    <li>
                        <button onClick={() => menuScroll("#gospel")}>
                            Salvation
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderMenu
