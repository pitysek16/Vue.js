import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/api/index";
import {
  CHARACTERS_BY_PAGE,
  CHARACTERS_BY_ID,
  EPISODES_BY_PAGE,
  LOCATIONS_BY_PAGE,
} from "@/api/routes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: {},
    pages: 0,
    episodes: {},
    episodesPages: 0,
    locations: {},
    locationsPages: 0,
  },
  mutations: {
    setCharacters(state, { page, characters }) {
      state.characters[page] = characters;
    },
    setPages(state, pages) {
      state.pages = pages;
    },

    setEpisodes(state, { page, episodes }) {
      state.episodes[page] = episodes;
    },
    setEpisodesPages(state, episodesPages) {
      state.episodesPages = episodesPages;
    },

    setLocations(state, { page, locations }) {
      state.locations[page] = locations;
    },
    setLocationsPages(state, locationsPages) {
      state.locationsPages = locationsPages;
    },
  },
  actions: {
    fetchCharacters({ state, commit }, page) {
      const pageCharacters = state.characters[page];
      if (pageCharacters) {
        return Promise.resolve(pageCharacters);
      }
      return axiosInstance
        .get(CHARACTERS_BY_PAGE(page))
        .then(({ data }) => {
          const { info, results } = data;
          commit("setCharacters", { page, characters: results });
          commit("setPages", info.pages);
        })
        .catch((err) => console.log(err));
    },

    fetchSingleCharacter(_, id) {
      return axiosInstance.get(CHARACTERS_BY_ID(id));
    },

    fetchEpisodes({ state, commit }, page) {
      const pageEpisodes = state.episodes[page];
      if (pageEpisodes) {
        return Promise.resolve(pageEpisodes);
      }
      return axiosInstance
        .get(EPISODES_BY_PAGE(page))
        .then(({ data }) => {
          const { info, results } = data;
          commit("setEpisodes", { page, episodes: results });
          commit("setEpisodesPages", info.pages);
        })
        .catch((err) => console.log(err));
    },

    fetchLocations({ state, commit }, page) {
      const pageLocation = state.locations[page];
      if (pageLocation) {
        return Promise.resolve(pageLocation);
      }
      return axiosInstance
        .get(LOCATIONS_BY_PAGE(page))
        .then(({ data }) => {
          const { info, results } = data;
          commit("setLocations", { page, locations: results });
          commit("setLocationsPages", info.pages);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    getCharacterById: (state) => ({ id, page }) => {
      const pageCharacters = state.characters[page];
      if (pageCharacters) {
        return pageCharacters.find((item) => item.id === id);
      }
      return null;
    },
    getCharactersByPage: (state) => (page) => {
      const pageCharacters = state.characters[page];
      return pageCharacters;
    },

    getEpisodesByPage: (state) => (page) => {
      const pageEpisodes = state.episodes[page];
      return pageEpisodes;
    },

    getLocationsByPage: (state) => (page) => {
      const pageLocations = state.locations[page];
      console.log("pageLocations: ", pageLocations);

      return pageLocations;
    },
  },
  modules: {},
});
