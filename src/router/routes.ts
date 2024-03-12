import Clients from "./clients";
import Locations from "./locations";
import Movies from "./movies";
import Users from "./users";
import HomeLogada from "@/views/logged/HomeLogged.vue"

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/logged",
        component: HomeLogada,
        children: [
            ...Clients,
            ...Locations,
            ...Users,
        ]
    },
    ...Movies,
    {
        path: "/",
        redirect: '/movies'
    },
    {
        path: "/*",
        redirect: "/movies"
    },
]

export default routes