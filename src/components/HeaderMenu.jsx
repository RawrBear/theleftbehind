import { menuScroll } from "./../animations"

function HeaderMenu() {
    return (
        <div className="h-16">
            <div className="fixed z-20 px-8 navbar bg-base-200">
                <h3 className="capitalize navbar-end lg:navbar-start">
                    the left behind
                </h3>
                <div className="navbar-start">
                    <div className="flex justify-end dropdown">
                        <label
                            tabIndex="0"
                            className=" btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>

                        <ul
                            tabIndex="0"
                            className="p-4 space-y-3 border-2 shadow border-slate-400 mt-14 menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
                        >
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
                                <button onClick={() => menuScroll("#gospel")}>
                                    Salvation
                                </button>
                            </li>
                            <li>
                                <button onClick={() => menuScroll("#messages")}>
                                    Messages
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* DESKTOP */}
                <div className="hidden navbar-center lg:flex">
                    <ul className="p-0 space-x-4 menu menu-horizontal lg:text-lg">
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
                            <button onClick={() => menuScroll("#gospel")}>
                                Salvation
                            </button>
                        </li>
                        <li>
                            <button onClick={() => menuScroll("#messages")}>
                                Messages
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu
