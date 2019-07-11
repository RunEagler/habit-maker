<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-6">
          <q-input outlined label="課題" v-model="newIssue.content"></q-input>
        </div>
        <div class="col-2">
          <q-select outlined label="分野" v-model="newIssue.field" :options="fields"> </q-select>
        </div>
        <div class="col-2">
          <q-select outlined label="緊急度" v-model="newIssue.emergencySelect" :options="emergencies"></q-select>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-2">
          <q-btn color="teal-7" label="登録" size="20px" @click="entryIssue(newIssue)" />
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <q-list bordered padding v-for="issueByField in issuesByField">
        <q-item-label header>{{ issueByField.field }}</q-item-label>
        <q-item clickable v-ripple v-for="issue in issueByField.issues" active-class="bg-black text-green-1" :class="issue.statusListColor">
          <q-item-section avatar top>
            <q-avatar :icon="issue.statusIcon.icon" :color="issue.statusIcon.color" :text-color="issue.statusIcon.textColor" />
          </q-item-section>
          <q-item-section>
            <q-item-label caption>{{ issue.content }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="delete" color="bg-grey-8" @click="deleteIssue(issue.id)" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { issueModule } from '@/store/modules/issue';
import { Issue, IssueByField } from '@/models/issue';
import { Emergency } from '@/models/enum';

@Component({
  name: 'Issue',
  components: {},
})
export default class IssuePage extends Vue {
  newIssue: Issue = new Issue();
  field: string = '';
  fields: string[] = ['ピアノ', 'プログラミング', '家庭', '思考力', '仕事', '生活', '人格'];
  emergencies: any[] = [
    {
      label: '高い',
      value: Emergency.High,
    },
    {
      label: '普通',
      value: Emergency.Normal,
    },
    {
      label: '低い',
      value: Emergency.Low,
    },
  ];
  emergency: any;

  constructor() {
    super();
    // this.emergency = this.emergencies[1]
  }

  mounted() {
    issueModule.fetchIssues();
  }

  get issues(): Issue[] {
    return issueModule.issues;
  }

  get issuesByField(): IssueByField[] {
    return issueModule.issuesByField;
  }

  entryIssue(issue: Issue): void {
    issue.emergency = issue.emergencySelect.value;
    const newIssue: Issue = new Issue().deserialize(issue);
    issueModule.addIssue(newIssue);
  }

  deleteIssue(issueID: number): void {
    issueModule.deleteIssue(issueID);
  }
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
