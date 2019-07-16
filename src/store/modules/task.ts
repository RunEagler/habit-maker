import { TaskStatus } from '@/models/enum';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { store } from '@/store/index';
import { Task, TaskByGoalID } from '@/models/task';
import { mockJSON } from '@/main';
import { Issue, IssueByField } from '@/models/issue';

@Module({ dynamic: true, store, name: 'task', namespaced: true })
class TaskModule extends VuexModule {
  tasks: Task[] = [];

  get tasksByStatus(): Task[][] {
    return [
      this.tasks.filter((task: Task) => {
        task.status === TaskStatus.NotCompleted;
      }),
      this.tasks.filter((task: Task) => {
        task.status === TaskStatus.InProgress;
      }),
      this.tasks.filter((task: Task) => {
        task.status === TaskStatus.Completed;
      }),
    ];
  }

  get tasksByGoalID(): TaskByGoalID[] {
    return this.tasks.reduce((result: TaskByGoalID[], task: Task, _: number): TaskByGoalID[] => {
      const index = result.findIndex((value: TaskByGoalID) => {
        if (task.goalID === value.goalID) {
          return true;
        }
        return false;
      });
      if (index < 0) {
        result.push({ goalID: task.goalID, tasks: [task] });
      } else {
        result[index].tasks.push(task);
      }
      return result;
    }, []);
  }

  @Mutation
  entryTask(task: Task) {
    this.tasks.push(task);
  }

  @Mutation
  sortSubject(isReverse: boolean) {
    this.tasks.sort((a: Task, b: Task) => {
      const condition = isReverse ? a.subject > b.subject : a.subject < b.subject;
      if (condition) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  @Mutation
  sortPriority(isReverse: boolean) {
    this.tasks.sort((a: Task, b: Task) => {
      const condition = isReverse ? a.priority > b.priority : a.priority < b.priority;
      if (condition) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  @Mutation
  sortTime(isReverse: boolean) {
    this.tasks.sort((a: Task, b: Task) => {
      const condition = isReverse ? a.estimateTime > b.estimateTime : a.estimateTime < b.estimateTime;
      if (condition) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  @Mutation
  setTask(changeTask: Task) {
    const index = this.tasks.findIndex((task: Task) => task.id === changeTask.id);
    this.tasks[index] = changeTask;
  }

  @Mutation
  deleteTask(taskID: number) {
    const deleteIndex = this.tasks.findIndex((task, i) => {
      if (task.id === taskID) {
        return true;
      }
      return false;
    });
    this.tasks.splice(deleteIndex, 1);
  }

  @Mutation
  updateTask(task: Task) {
    const index: number = this.tasks.findIndex((t): boolean => {
      if (task.id === t.id) {
        return true;
      } else {
        return false;
      }
    });
    this.tasks[index] = task;
  }

  @Mutation
  setTasks(tasks: Task[]) {
    this.tasks = tasks;
  }

  @Action
  async fetchTask() {
    const mock: any = require('@/assets/mock-json/tasks.json');
    const tasks: Task[] = mockJSON.List(Task, mock);
    this.setTasks(tasks);
  }

  @Mutation
  convertTasks(tasksByGoal: Task[][]) {
    this.tasks = tasksByGoal.flat(1);
  }
}

export const taskModule = getModule(TaskModule);
