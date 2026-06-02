import{createRouter,createWebHistory} from 'vue-router'
import Home from "../views/home.vue";
import About from "../views/about.vue";
import services from "../views/service.vue";
import Contact from "../views/Contact.vue";
import eastern from '../views/eastern.province.vue';
import northern from '../views/northern.province.vue';
import southern from '../views/southern province.vue';
import western from '../views/western.province.vue';
import kigalicity from '../views/kigalicityprovince.vue';
import photo from '../views/photo.vue';
import video from '../views/video.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
const routes = [
    { 
        path:"/",
        name:"home",
        component:Home
    },
   {
    path:"/about",
        name:"About",
        component:About,
    },
   {
    path:"/service",
        name:"services",
        component:services,
    },
   {
    path:"/contact",
        name:"Contact",
        component:Contact,
    },
   {
    path:"/eastern",
        name:"eastern",
        component:eastern,
    },
   {
    path:"/northern",
        name:"northern",
        component:northern,
    },
   {
    path:"/southern",
        name:"southern",
        component:southern,
    },
   {
    path:"/western",
        name:"western",
        component:western,
    },
   {
    path:"/kigalicity",
        name:"kigalicity",
        component:kigalicity,
    },
        
   {
    path:"/photo",
        name:"photo",
        component:photo,
    },
        
   {
    path:"/video",
        name:"video",
        component:video,
    },
        
        
   {
    path:"/Login",
        name:"Login",
        component:Login,
    },
   {
    path:"/Register",
        name:"Register",
        component:Register,
    },
   


]
   const router =createRouter({
       history:createWebHistory(),   
        routes,
    });
    export default router;
