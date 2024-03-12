import Movies from "@/views/loggedOut/movies/_Movies.vue";

const routes = [
    {
        path: "/movies",
        name: "Movies",
        component: Movies,
        redirect: "/movies/list",
        children: [
            {
                path: "list",
                name: "ListMovies",
                component: () =>
                    import("@/views/loggedOut/movies/MoviesList.vue"),
            },
        ]
    },
]


export default routes