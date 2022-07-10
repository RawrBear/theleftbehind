import { CreditComponent } from "./CreditComponent/CreditComponent";

export const Footer = () => {
    return (
        <footer className="h-28">
            <section className="grid grid-cols-3 p-8 border-t-2 border-slate-600">
                <h3 className="col-span-3">Credits</h3>
                <CreditComponent
                    name={"Bob Smith"}
                    channelName={"Bob's Crab Shack"}
                    socials={{ youtube: "youtube.com", insta: "instagram.com" }}
                />
            </section>
        </footer>
    );
};
