import Promise from './index.vue';
import './index.vue.css';
import 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

export const story1 = () => ({
  components: { Promise },
  template: `<Promise/>`,
});