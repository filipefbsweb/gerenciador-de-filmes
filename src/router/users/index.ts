import Users from "@/views/logged/users/_Users.vue";

const routes = [
  {
    path: "/users",
    name: "Users",
    component: Users,
    redirect: "/users/list",
    meta: {
      hasAutentication: true,
    },
    children: [
      {
        path: "Users",
        name: "ListUsers",
        component: () => import("@/views/logged/users/UsersList.vue"),
      },
      {
        path: "add",
        name: "AddUser",
        component: () => import("@/views/logged/users/UsersAdd.vue"),
      },
      {
        path: "edit/:id",
        name: "EditUser",
        component: () => import("@/views/logged/users/UsersEdit.vue"),
      },
    ],
  },
];

export default routes;
