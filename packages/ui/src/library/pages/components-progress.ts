// GENERATED oleh scripts/gen-library.mjs dari sumber dokumentasi komponen (MIT). Jangan edit manual.
import type { LibraryPage } from "../types";

const page: LibraryPage = {
 "title": "Progress Bar",
 "intro": "The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.",
 "sections": [
  {
   "title": "Default progress bar",
   "level": 2,
   "description": "Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.",
   "examples": [
    {
     "html": "<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-brand h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>"
    }
   ]
  },
  {
   "title": "Sizes",
   "level": 2,
   "description": "You can also use different sizes by using various sizing utility classes from Ordinara and Tailwind CSS.",
   "examples": [
    {
     "html": "<div class=\"mb-1 text-sm font-medium text-heading\">Small</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-1.5\">\n  <div class=\"bg-brand h-1.5 rounded-full\" style=\"width: 45%\"></div>\n</div>\n<div class=\"mb-1 text-sm font-medium text-heading\">Default</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-brand h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>\n<div class=\"mb-1 text-base font-medium text-heading\">Large</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2.5\">\n  <div class=\"bg-brand h-2.5 rounded-full\" style=\"width: 45%\"></div>\n</div>",
     "class": "space-y-4"
    }
   ]
  },
  {
   "title": "With label inside",
   "level": 2,
   "description": "Here is an example of using a progress bar with the label inside the bar.",
   "examples": [
    {
     "html": "<div class=\"w-full bg-neutral-quaternary rounded-full\">\n    <div class=\"bg-brand text-xs font-medium text-white text-center p-0.5 leading-none rounded-full h-4 flex items-center justify-center\" style=\"width: 45%\"> 45%</div>\n  </div>"
    }
   ]
  },
  {
   "title": "With label outside",
   "level": 2,
   "description": "And this is an example of using a progress bar outside the bar.",
   "examples": [
    {
     "html": "<div class=\"flex justify-between mb-1\">\n  <span class=\"text-sm font-medium text-body\">Ordinara</span>\n  <span class=\"text-sm font-medium text-body\">45%</span>\n</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-brand h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>"
    }
   ]
  },
  {
   "title": "Colors",
   "level": 2,
   "description": "You can also apply any color using the <code>bg-{color}</code> utility classes from Tailwind CSS and Ordinara.",
   "examples": [
    {
     "html": "<div class=\"mb-1 text-sm font-medium text-heading\">Dark</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-dark h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>\n<div class=\"mb-1 text-sm font-medium text-fg-brand\">Brand</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-brand h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>\n<div class=\"mb-1 text-sm font-medium text-fg-success\">Success</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-success h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>\n<div class=\"mb-1 text-sm font-medium text-fg-danger\">Danger</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-danger h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>\n<div class=\"mb-1 text-sm font-medium text-fg-warning\">Danger</div>\n<div class=\"w-full bg-neutral-quaternary rounded-full h-2\">\n  <div class=\"bg-warning h-2 rounded-full\" style=\"width: 45%\"></div>\n</div>",
     "class": "space-y-4"
    }
   ]
  }
 ]
};

export default page;
