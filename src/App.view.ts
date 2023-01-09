import { Options, Vue } from 'vue-class-component';
import ExampleView from '@/views/Example/Example.view.vue';
import { Action } from './decorators/pinia';
import { useExampleStore } from './store/example';

@Options({
  name: 'App',
  components: {
    ExampleView,
  },
})
export default class App extends Vue {
  @Action(useExampleStore)
  public setName!: (name: string) => void;
}
