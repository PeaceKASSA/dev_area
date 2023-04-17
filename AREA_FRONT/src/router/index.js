/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ("../views/AUTH/Landing_page2.vue"),
        },
        {
            path: "/connexion",
            name: "First_connexion",
            props: true,
            component: () =>
                import ("../views/AUTH/connexion_page.vue"),
        },
        {
            path: "/connexion_verification",
            name: "verification_page",
            props: true,
            component: () =>
                import ("../views/AUTH/verification_page.vue"),
        },
        {
            path: "/login",
            name: "login",
            props: true,
            component: () =>
                import ("../views/AUTH/login_page2.vue"),
        },
        {
            path: "/service",
            name: "service",
            props: true,
            component: () =>
                import ("../views/SERVICE/service_view.vue"),
        },
        {
            path: "/service2",
            name: "service2",
            props: true,
            component: () =>
                import ("../views/SERVICE/service_view2.vue"),
        },
        {
            path: "/google",
            name: "google",
            props: true,
            component: () =>
                import ("../views/SERVICE/google_view.vue"),
        },
        {
            path: "/pinterest",
            name: "pinterest",
            props: true,
            component: () =>
                import ("../views/SERVICE/pinterest_view.vue"),
        },
        {
            path: "/drive",
            name: "drive",
            props: true,
            component: () =>
                import ("../views/SERVICE/drive_view.vue"),
        },
        {
            path: "/youtube",
            name: "youtube",
            props: true,
            component: () =>
                import ("../views/SERVICE/you_tube_view.vue"),
        },
        {
            path: "/spotify",
            name: "spotify",
            props: true,
            component: () =>
                import ("../views/SERVICE/spotify_view.vue"),
        },
        {
            path: "/reddit",
            name: "reddit",
            props: true,
            component: () =>
                import ("../views/SERVICE/reddit_view.vue"),
        },
        {
            path: "/reddit_google",
            name: "reddit_google",
            props: true,
            component: () =>
                import ("../views/SERVICE/REDDIT_SERVICE/reddit_google.vue"),
        },
    ],
});

export default router;