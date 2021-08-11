import { DoubleCtaVue } from '~/double-cta';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const double_cta_web_components_href = () => /*html*/ `
  <double-cta
    primaryText="Request early access"
    primaryHref="/request-earlyaccess"
    secondaryText="Book a demo"
    secondaryHref="https://calendly.com/gg_/backlight"
  ></double-cta>`;

export const double_cta_web_components_click = () => /*html*/ `
  <double-cta
    primaryText="Request early access"
    primaryOnClick="alert('primary clicked!')"
    secondaryText="Book a demo"
    secondaryOnClick="alert('secondary clicked!')"
  ></double-cta>`;

export const double_cta_vue_href = () => ({
  components: { DoubleCtaVue },
  data: () => ({
    primaryText: 'Request early access',
    primaryHref: '/request-earlyaccess',
    secondaryText: 'Book a demo',
    secondaryHref: 'https://calendly.com/gg_/backlight',
  }),
  template: `
    <DoubleCtaVue
      :primaryText="primaryText"
      :primaryHref="primaryHref"
      :secondaryText="secondaryText"
      :secondaryHref="secondaryHref"/>
  `,
});

export const double_cta_vue_click = () => ({
  components: { DoubleCtaVue },
  data: () => ({
    primaryText: 'Request early access',
    primaryOnClick: 'alert("primary clicked!")',
    secondaryText: 'Book a demo',
    secondaryOnClick: 'alert("secondary clicked!")',
  }),
  template: `
    <DoubleCtaVue
      :primaryText="primaryText"
      :primaryOnClick="primaryOnClick"
      :secondaryText="secondaryText"
      :secondaryOnClick="secondaryOnClick"/>
  `,
});