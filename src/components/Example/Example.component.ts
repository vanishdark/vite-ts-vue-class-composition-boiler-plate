import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'ExampleComponent',
})
export default class ExampleComponent extends Vue {
  public name: string = 'Example Component';
}
