import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import kits from './data';

const CardKit = ({ name, desc, href, hero_img, bg_img, backgroundColor }) => (
  <div
    className="relative overflow-hidden text-left flex flex-col text-white rounded-lg space-y-4 p-6 w-64 sm:w-80"
    style={{ height: '420px', backgroundColor }}
  >
    <img className="h-32 w-full" src={hero_img} />
    <header className="text-bold text-xl">{name}</header>
    <p className="flex-grow">{desc}</p>
    <a href={href} className="flex items-center">
      Discover
      <ChevronRightIcon className="w-8 h-8" aria-hidden="true" />
    </a>
    {bg_img && (
      <img
        className="absolute h-56 w-auto right-0 bottom-0 opacity-watermark transform -rotate-12 translate-x-8 translate-y-8"
        src={bg_img}
      />
    )}
  </div>
);

export default () => (
  <section className="text-center grid gap-8 md:gap-4 relative sm:mt-10">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl">
      Be a <span className="text-primary whitespace-nowrap">Design System</span>{' '}
      hero!
    </h2>
    <p className="text-lg text-gray-mid">
      Kickstart with one of our starter-kits. Most popular technologies
      supported.
      <br />
      Spend time building amazing products, not maintaining your Design System.
    </p>
    <div className="bg-black-divriots py-48 mt-48 overflow-hidden flex justify-center">
      <div className="scrollable-horizontal max-w-full px-8 py-16 sm:px-16 absolute bottom-0 space-x-16">
        {kits
          .filter(({ highlight }) => !highlight)
          .map((kit, idx) => (
            <CardKit className="" key={idx} {...kit} />
          ))}
        <a
          href="/starterkits"
          className="bg-secondary relative overflow-hidden grid items-center text-4xl text-bold text-center text-black-default rounded-lg gap-4 p-6 w-64 sm:w-80"
          style={{ height: '420px' }}
        >
          Explore all Starter-kits
        </a>
      </div>
    </div>
  </section>
);
