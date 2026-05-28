import{createRouter,createWebHistory} from 'vue-router'
import Home from "../views/home.vue";
import About from "../views/about.vue";
import services from "../views/service.vue";
import Contact from "../views/Contact.vue";
import eastern from '../views/eastern.vue';
import northern from '../views/northern .vue';
import southern from '../views/southern.vue';
import western from '../views/western.vue';
import kigalicity from '../views/kigalicity.vue';
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
        


]
   const router =createRouter({
       history:createWebHistory(),   
        routes,
    });
    export default router;
