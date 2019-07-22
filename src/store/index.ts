import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex';
import { DateUtil } from '@/utils/dateNum';

Vue.use(Vuex);

const dateUtil = new DateUtil(new Date());

export interface RootState {
  collapsed: boolean;
  route: {
    path: string;
    params: { [key: string]: string };
    query: { [key: string]: string };
    fullPath: string;
  };
  now: any;
}

const stateOfModule: RootState = {
  collapsed: true,
  route: {
    path: '',
    params: {},
    query: {},
    fullPath: '',
  },
  now: dateUtil,
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
