import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex';

Vue.use(Vuex);

export interface RootState {
  collapsed: boolean;
  route: {
    path: string;
    params: { [key: string]: string };
    query: { [key: string]: string };
    fullPath: string;
  };
}

const stateOfModule: RootState = {
  collapsed: true,
  route: {
    path: '',
    params: {},
    query: {},
    fullPath: '',
  },
};

const gettersOfModule: GetterTree<RootState, RootState> = {};

const mutations: MutationTree<RootState> = {};

const actions: ActionTree<RootState, RootState> = {};

export const store = new Vuex.Store<RootState>({
  state: stateOfModule,
  getters: gettersOfModule,
  mutations,
  actions,
  modules: {},
});
