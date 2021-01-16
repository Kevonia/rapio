import { createStoreWrapper } from '@/modules/core/store-wrapper';
import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { AppStore } from './app';
import { RestaurantsStore } from './restaurants-store/restaurants-store';
import { AuthStore } from './authstore/authstore';
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);
// Module Constants
// ----------------------------------------------------------------------------
const store = new Vuex.Store<any>({
  modules: {
    ...AppStore.getModule(),
    ...AuthStore.getModule(),
    ...RestaurantsStore.getModule(),
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});

const getName = (T: { getModule(): {} }) => Object.keys(T.getModule())[0];
const app = createStoreWrapper<AppStore>(store, getName(AppStore));
const auth = createStoreWrapper<AuthStore>(store, getName(AuthStore));
const restaurant = createStoreWrapper<RestaurantsStore>(store, getName(RestaurantsStore));
// Exports
// ----------------------------------------------------------------------------
export {
  store as default,
  app,
  auth,
  restaurant,
};
