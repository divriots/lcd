import Footer from '../src/index.vue';
import '~/tailwind';

export default {
  parameters: {
    // backgrounds: { default: '#F3F4F6' },
  },
};

const Template = (args) => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: `<div><Footer v-bind="args"/></div>`,
});

const baseArgs = {
  subscribe: 'https://somewhere.com/subscribe/post?u=UID&id=ID',
  contact: 'hello@backlight.dev',
};

const routes = {
  linksRoutes: [
    {
      pathname: 'whatever',
      label: 'DS Mastery',
    },
    {
      pathname: 'whatever',
      label: 'DS Sessions',
    },
    {
      pathname: 'whatever',
      label: 'Doc',
    },
    {
      pathname: 'whatever',
      label: 'Blog',
    },
    {
      pathname: 'whatever',
      label: 'Pricing',
    },
  ],
  supportRoutes: [
    {
      pathname: 'whatever',
      label: 'Community',
    },
    {
      pathname: 'whatever',
      label: 'Send us an email',
    },
    {
      pathname: 'whatever',
      label: 'Terms of Service',
    },
    {
      pathname: 'whatever',
      label: 'Privacy Policy',
    },
  ],
};

export const base_version = Template.bind({});
base_version.args = {
  ...routes,
  ...baseArgs,
};

export const home_version = Template.bind({});
home_version.args = {
  ...routes,
  ...baseArgs,
  imgSrc: '/img/landing/hero.png',
  version: 'homepage',
};

export const plain_version = Template.bind({});
plain_version.args = {
  ...routes,
  ...baseArgs,
  imgSrc: '/img/landing/hero.png',
  version: 'plain',
};

export const picture_sets = Template.bind({});
picture_sets.args = {
  ...routes,
  ...baseArgs,
  imgSrc: '',
  version: 'homepage',
  // Last item should be the fallback, otherwise first supported format is chosen
  pictureSets: [
    {
      type: 'webp',
      src: '/img/landing/Footer_illustration.webp',
    },
    {
      type: 'png',
      src: '/img/landing/hero.png',
    },
  ],
};
