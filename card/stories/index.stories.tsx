import Card from '../src/Card.vue';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const card = (args) => ({
  components: { Card },
  template: /*html*/ `
    <Card url="/request-earlyaccess" class="bg-primary">
      <div class="w-full h-full flex items-center text-3xl sm:text-4xl text-bold text-center text-black-default">
        Many other Starter-kits available in different technologies
      </div>
    </Card>
  `,
});
