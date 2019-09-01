import { Mutation, VuexModule, Action, Module, getModule } from 'vuex-module-decorators';
import { store } from '@/store/index';
import { Goal } from '@/models/goal';
import { mockJSON } from '@/main';
import { Tree } from '@/models/quasar/tree';

@Module({ dynamic: true, store, name: 'goalModule', namespaced: true })
class GoalModule extends VuexModule {
  goals: Goal[] = [];

  get goalsTree(): Tree[] {
    const result: Tree[] = [];
    const works: Tree[] = [];
    const map: any = {};

    this.goals.forEach((goal: Goal, i: number) => {
      map[goal.id] = i;
      works.push(new Tree(goal.id, goal.parentID, goal.content));
    });
    works.forEach((work: Tree) => {
      if (work.parentID > -1) {
        works[map[work.parentID]].children.push(work);
      } else {
        result.push(work);
      }
    });

    return result;
  }

  // search(tree: Tree, parentID: number): Tree | undefined {
  //   const targetTree: Tree = tree.children.find((tree: Tree) => {
  //     if (tree.id === parentID) {
  //       return true;
  //     }
  //
  //     return false;
  //   });
  //   return targetTree;
  // }

  @Mutation
  setGoals(goals: Goal[]) {
    this.goals = goals;
  }

  @Mutation
  addGoal(goal: Goal) {
    this.goals.push(goal);
  }

  @Action
  fetchGoals() {
    const mock: any = require('@/assets/mock-json/goals.json');
    const goals: Goal[] = mockJSON.List(Goal, mock);
    this.setGoals(goals);
  }
}

export const goalModule = getModule(GoalModule);
