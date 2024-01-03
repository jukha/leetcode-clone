import { Card } from "./Card";

export const Topbar = () => {
    return <div className="w-full bg-black align-center px-5 pb-5 pt-8">
        {/* <img src="/logo.png" className="max-w-56" /> */}
        <div className="text-8xl text-white">
            Daily Code
        </div>
        <NavBar />
    </div>
}

const topbarItems =[
    {
        title: "About",
        route: "/about"
    }, {
        title: "Acitivity",
        route: "/activity"
    }, {
        title: "Problems",
        route: "/problems"
    }, {
        title: "Leaderboard",
        route: "/leaderboar"
    }
]
function NavBar() {
    return <div className="flex mt-4">
        {topbarItems.map(item => <NavbarItem route={item.route} title={item.title} />)}
    </div>
}

function NavbarItem({title, route}: {
    title: string;
    route: string;
}) {
    return <div className="mr-10 text-slate-500	text-lg cursor-pointer hover:text-white text-base font-light">
        {title}
    </div>
}