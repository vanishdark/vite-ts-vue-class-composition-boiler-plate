import { mount } from '@vue/test-utils';
import { wrap } from 'module';
import ExampleComponent from './Example.component.vue';

test('mount component', () => {
  expect(ExampleComponent).toBeTruthy();
  const wrapper = mount(ExampleComponent, {
    props: {
      name: 'Example Component',
    },
  });
  expect(wrapper.text()).toContain('Example Component');
  expect(wrapper.html()).toMatchSnapshot();
});
