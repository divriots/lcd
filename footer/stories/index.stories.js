import Footer from '../src/index.vue';
import '~/tailwind/src/styles.css';

export default {
  parameters: {
    // backgrounds: { default: '#F3F4F6' },
  },
};
export const story1 = () => ({
  components: { Footer },
  template: `<div><Footer/></div>`,
});
