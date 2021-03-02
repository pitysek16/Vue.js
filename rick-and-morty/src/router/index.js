import Vue from "vue";
import VueRouter from "vue-router";
import CharactersList from "../views/CharactersList";
import SingleCharacter from "../views/SingleCharacter";
import EpisodesList from "../views/EpisodesList";
import MainPage from "../views/MainPage";
import LocationList from "../views/LocationList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/character",
    name: "CharactersList",
    component: CharactersList,
  },
  {
    path: "/character/:id",
    name: "CharacterDetails",
    component: SingleCharacter,
  },
  {
    path: "/episodes",
    name: "EpisodesList",
    component: EpisodesList,
  },
  {
    path: "/locations",
    name: "LocationList",
    component: LocationList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
