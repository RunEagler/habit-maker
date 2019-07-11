import { Mutation, VuexModule, Action, Module, getModule } from 'vuex-module-decorators';
import { store } from '@/store/index';
import { Issue, IssueByField } from '@/models/issue';
import { mockJSON } from '@/main';

@Module({ dynamic: true, store, name: 'Issue', namespaced: true })
class IssueModule extends VuexModule {
  issues: Issue[] = [];

  get issuesByField(): IssueByField[] {
    return this.issues.reduce((result: IssueByField[], issue: Issue, _: number): IssueByField[] => {
      const index = result.findIndex((value: IssueByField) => {
        if (issue.field === value.field) {
          return true;
        }
        return false;
      });
      if (index < 0) {
        result.push({ field: issue.field, issues: [issue] });
      } else {
        result[index].issues.push(issue);
      }
      return result;
    }, []);
  }

  @Mutation
  setIssues(issues: Issue[]) {
    this.issues = issues;
  }

  @Mutation
  addIssue(issue: Issue) {
    this.issues.push(issue);
  }

  @Mutation
  deleteIssue(issueID: number) {
    const deleteIssueID = this.issues.findIndex((issue: Issue) => issue.id === issueID);
    this.issues.splice(deleteIssueID, 1);
  }

  @Action
  async fetchIssues() {
    const mock = await require('@/assets/mock-json/issues.json');
    const issues: Issue[] = mockJSON.List(Issue, mock);
    this.setIssues(issues);
  }
}

export const issueModule = getModule(IssueModule);
