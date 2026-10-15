// GENERATED oleh scripts/gen-library.mjs dari sumber dokumentasi komponen (MIT). Jangan edit manual.
import type { LibraryPage } from "../types";

const page: LibraryPage = {
 "title": "Tooltip",
 "intro": "Ordinara allows you to use the Tailwind CSS tooltip component to show extra information when hovering or focusing over an element in multiple positions, styles, and animations. Before continuing, make sure that you have the &lt;a href=\"\"&gt;Ordinara JavaScript file&lt;/a&gt; included in your project in order to make the tooltip component work.",
 "sections": [
  {
   "title": "Default tooltip example",
   "level": 2,
   "description": "To get started with using tooltips all you need to do is add the <code>data-tooltip-target=\"{elementId}\"</code> data attribute to an element where <code>elementId</code> is the id of the tooltip component. In the following example you can see the button that will trigger the <code>tooltip-default</code> element to be shown when hovered or focused.",
   "examples": [
    {
     "html": "<button data-tooltip-target=\"tooltip-default\" type=\"button\" class=\"text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Default tooltip</button>\n\n<div id=\"tooltip-default\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip content\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>",
     "class": "flex justify-center pt-8"
    }
   ]
  },
  {
   "title": "Tooltip styles",
   "level": 2,
   "description": "You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the <code>data-tooltip-style=\"{light|dark}\"</code> data attribute.",
   "examples": [
    {
     "html": "<!-- Light style tooltip -->\n\n<button data-tooltip-target=\"tooltip-light\" data-tooltip-style=\"light\" type=\"button\" class=\"text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Light tooltip</button>\n\n<div id=\"tooltip-light\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-heading bg-neutral-primary-medium border border-default rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip content\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>\n\n<!-- Dark style tooltip -->\n\n<button data-tooltip-target=\"tooltip-dark\" type=\"button\" class=\"ms-3 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Dark tooltip</button>\n\n<div id=\"tooltip-dark\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip content\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>",
     "class": "flex justify-center pt-8 "
    }
   ]
  },
  {
   "title": "Placement",
   "level": 2,
   "description": "The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the <code>data-tooltip-placement=\"{top|right|bottom|left}\"</code> data attribute.",
   "examples": [
    {
     "html": "<!-- Show tooltip on top -->\n\n<button data-tooltip-target=\"tooltip-top\" data-tooltip-placement=\"top\" type=\"button\" class=\"mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Tooltip top</button>\n\n<div id=\"tooltip-top\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip on top\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>\n\n<!-- Show tooltip on right -->\n\n<button data-tooltip-target=\"tooltip-right\" data-tooltip-placement=\"right\" type=\"button\" class=\"ms-3 mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Tooltip right</button>\n\n<div id=\"tooltip-right\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip on right\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>\n\n<!-- Show tooltip on bottom -->\n\n<button data-tooltip-target=\"tooltip-bottom\" data-tooltip-placement=\"bottom\" type=\"button\" class=\"ms-3 mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Tooltip bottom</button>\n\n<div id=\"tooltip-bottom\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip on bottom\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>\n\n<!-- Show tooltip on left -->\n\n<button data-tooltip-target=\"tooltip-left\" data-tooltip-placement=\"left\" type=\"button\" class=\"ms-3 mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Tooltip left</button>\n\n<div id=\"tooltip-left\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip on left\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>",
     "class": "flex flex-wrap justify-center py-8"
    }
   ]
  },
  {
   "title": "Triggering",
   "level": 2,
   "description": "You can choose the triggering event by using the <code>data-tooltip-trigger=\"{hover|click}\"</code> data attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to <code>hover</code>.",
   "examples": [
    {
     "html": "<!-- Show tooltip on hover -->\n\n<button data-tooltip-target=\"tooltip-hover\" data-tooltip-trigger=\"hover\" type=\"button\" class=\"text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Tooltip hover</button>\n\n<div id=\"tooltip-hover\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip content\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>\n\n<!-- Show tooltip on click -->\n\n<button data-tooltip-target=\"tooltip-click\" data-tooltip-trigger=\"click\" type=\"button\" class=\"ms-3 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Tooltip click</button>\n\n<div id=\"tooltip-click\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip content\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>",
     "class": "flex justify-center pt-8"
    }
   ]
  },
  {
   "title": "Animation",
   "level": 2,
   "description": "You can set tooltip animation styles by using the transition utility classes from Tailwind CSS. Make sure that you add <code>transition-opacity</code> and <code>duration-{x}</code> to set the animation duration.",
   "examples": [
    {
     "html": "<button data-tooltip-target=\"tooltip-animation\" type=\"button\" class=\"text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Animated tooltip</button>\n\n<div id=\"tooltip-animation\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip content\n    <div class=\"tooltip-arrow\" data-popper-arrow></div>\n</div>",
     "class": "flex justify-center pt-8"
    }
   ]
  },
  {
   "title": "Disable arrow",
   "level": 2,
   "description": "You can also disable the tooltip arrow by not including the <code>data-popper-arrow</code> element.",
   "examples": [
    {
     "html": "<button data-tooltip-target=\"tooltip-no-arrow\" type=\"button\" class=\"text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none\">Default tooltip</button>\n\n<div id=\"tooltip-no-arrow\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n    Tooltip content\n</div>",
     "class": "flex justify-center pt-8"
    }
   ]
  }
 ]
};

export default page;
