import Locations from "@/views/logged/locations/_Locations.vue";

const routes = [
    {
        path: "locations",
        name: "Locations",
        component: Locations,
        redirect: "/logged/locations/list",
        meta: {
            hasAutentication: true,
        },
        children: [
            {
                path: "list",
                name: "ListLocations",
                component: () => import("@/views/logged/locations/LocationsList.vue"),
            },
            {
                path: "new-location/:id",
                name: "NewLocation",
                component: () => import("@/views/logged/locations/LocationsAdd.vue"),
            },
        ]
    },
]


export default routes