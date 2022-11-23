import { lazy } from "react"

const Home = lazy(()=>import("../page/Home/Home"))
const SignUp = lazy(()=>import("../page/SignUp/SignUp"));
const SignIn = lazy(()=>import("../page/SignIn/SignIn")) 
const FilmDetail = lazy(()=>import("../page/FilmDetail/FilmDetail"))

export const homeTemplateRoutes = [
    {
        path: "" ,
        Element: Home
    },
    {
        path: "/booking" ,
        Element: Home,
    },
    {
        path: "/detail/:maPhim",
        Element: FilmDetail,
    },
    {
        path: "/events" ,
        Element: Home
    },
    {
        path: "/signin" ,
        Element: SignIn
    },
    {
        path: "/signup" ,
        Element: SignUp

    },

]