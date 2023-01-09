import { Options, Vue } from 'vue-class-component';
import ExampleComponent from '@/components/Example/Example.component.vue';
import { Getter, State } from '@/decorators/pinia';
import { useExampleStore } from '@/store/example';

@Options({
  name: 'ExampleView',
  components: {
    ExampleComponent,
  },
})
export default class ExampleView extends Vue {
  @State(useExampleStore)
  public example!: string;
  @Getter(useExampleStore)
  public name!: string;
}
