import Clients from "@/views/logged/clients/_Clients.vue";

const routes = [
    {
        path: "clients",
        name: "Clients",
        component: Clients,
        redirect: "/logged/clients/list",
        meta: {
            hasAutentication: true,
        },
        children: [
            {
                path: "list",
                name: "ListClients",
                component: () => import("@/views/logged/clients/ClientsList.vue"),
            },
            {
                path: "add",
                name: "AddClients",
                component: () => import("@/views/logged/clients/ClientsAdd.vue"),
            },
            {
                path: "edit/:id",
                name: "EditClients",
                component: () => import("@/views/logged/clients/ClientsEdit.vue"),
            },
        ]
    },
]


export default routes