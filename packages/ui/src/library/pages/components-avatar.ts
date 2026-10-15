// GENERATED oleh scripts/gen-library.mjs dari sumber dokumentasi komponen (MIT). Jangan edit manual.
import type { LibraryPage } from "../types";

const page: LibraryPage = {
 "title": "Avatar",
 "intro": "The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from Ordinara to modify the styles and sizes of these components using the utility classes from Tailwind CSS.",
 "sections": [
  {
   "title": "Default avatar",
   "level": 2,
   "description": "Use this example to create a circle and rounded avatar on an image element.",
   "examples": [
    {
     "html": "<img class=\"w-10 h-10 rounded-full\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Rounded avatar\">\n<img class=\"w-10 h-10 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Default avatar\">",
     "class": "flex justify-center gap-4"
    }
   ]
  },
  {
   "title": "Bordered",
   "level": 2,
   "description": "Apply a border around the avatar component you can use the <code>ring-{color}</code> class from Tailwind CSS.",
   "examples": [
    {
     "html": "<img class=\"w-10 h-10 p-1 rounded-full ring-2 ring-default\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Bordered avatar\">",
     "class": "flex justify-center"
    }
   ]
  },
  {
   "title": "Placeholder icon",
   "level": 2,
   "description": "Use this example as a placeholder icon for the user profile when there is no custom image available.",
   "examples": [
    {
     "html": "<div class=\"relative w-10 h-10 overflow-hidden bg-neutral-secondary-medium rounded-full\">\n    <svg class=\"absolute w-12 h-12 text-body-subtle -left-1\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z\" clip-rule=\"evenodd\"></path></svg>\n</div>",
     "class": "flex justify-center"
    }
   ]
  },
  {
   "title": "Placeholder initials",
   "level": 2,
   "description": "This example can be used to show the initials of the user's first and last name as a placeholder when no profile picture is available.",
   "examples": [
    {
     "html": "<div class=\"relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-neutral-tertiary rounded-full\">\n    <span class=\"font-medium text-body\">JL</span>\n</div>",
     "class": "flex justify-center"
    }
   ]
  },
  {
   "title": "Avatar tooltip",
   "level": 2,
   "description": "Use this example to show a tooltip when hovering over the avatar.",
   "examples": [
    {
     "html": "<div>\n  <div id=\"tooltip-jese\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n      Jese Leos\n      <div class=\"tooltip-arrow\" data-popper-arrow></div>\n  </div>\n  <img data-tooltip-target=\"tooltip-jese\" class=\"w-10 h-10 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Medium avatar\">\n</div>\n<div>\n  <div id=\"tooltip-roberta\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n      Roberta Casas\n      <div class=\"tooltip-arrow\" data-popper-arrow></div>\n  </div>\n  <img data-tooltip-target=\"tooltip-roberta\" class=\"w-10 h-10 rounded-base\" src=\"/docs/images/people/profile-picture-4.jpg\" alt=\"Medium avatar\">\n</div>\n<div>\n  <div id=\"tooltip-bonnie\" role=\"tooltip\" class=\"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip\">\n      Bonnie Green\n      <div class=\"tooltip-arrow\" data-popper-arrow></div>\n  </div>\n  <img data-tooltip-target=\"tooltip-bonnie\" class=\"w-10 h-10 rounded-base\" src=\"/docs/images/people/profile-picture-3.jpg\" alt=\"Medium avatar\">\n</div>",
     "class": "flex items-center justify-center pt-8 gap-4"
    }
   ]
  },
  {
   "title": "Dot indicator",
   "level": 2,
   "description": "Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).",
   "examples": [
    {
     "html": "<div class=\"relative\">\n    <img class=\"w-10 h-10 rounded-full\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"\">\n    <span class=\"top-0 left-7 absolute  w-3.5 h-3.5 bg-success border-2 border-buffer rounded-full\"></span>\n</div>\n<div class=\"relative\">\n    <img class=\"w-10 h-10 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"\">\n    <span class=\"absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-danger border-2 border-buffer rounded-full\"></span>\n</div>\n<div class=\"relative\">\n    <img class=\"w-10 h-10 rounded-full\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"\">\n    <span class=\"bottom-0 left-7 absolute  w-3.5 h-3.5 bg-success border-2 border-buffer rounded-full\"></span>\n</div>\n<div class=\"relative\">\n    <img class=\"w-10 h-10 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"\">\n    <span class=\"absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-success border-2 border-buffer rounded-full\"></span>\n</div>",
     "class": "flex justify-center gap-4"
    }
   ]
  },
  {
   "title": "Stacked",
   "level": 2,
   "description": "Use this example if you want to stack a group of users by overlapping the avatar components.",
   "examples": [
    {
     "html": "<div class=\"flex -space-x-4 rtl:space-x-reverse\">\n    <img class=\"w-10 h-10 border-2 border-buffer rounded-full\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"\">\n    <img class=\"w-10 h-10 border-2 border-buffer rounded-full\" src=\"/docs/images/people/profile-picture-2.jpg\" alt=\"\">\n    <img class=\"w-10 h-10 border-2 border-buffer rounded-full\" src=\"/docs/images/people/profile-picture-3.jpg\" alt=\"\">\n    <img class=\"w-10 h-10 border-2 border-buffer rounded-full\" src=\"/docs/images/people/profile-picture-4.jpg\" alt=\"\">\n</div>\n<div class=\"flex -space-x-4 rtl:space-x-reverse\">\n    <img class=\"w-10 h-10 border-2 border-buffer rounded-full\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"\">\n    <img class=\"w-10 h-10 border-2 border-buffer rounded-full\" src=\"/docs/images/people/profile-picture-2.jpg\" alt=\"\">\n    <img class=\"w-10 h-10 border-2 border-buffer rounded-full\" src=\"/docs/images/people/profile-picture-3.jpg\" alt=\"\">\n    <a class=\"flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-dark-strong border-2 border-buffer rounded-full\" href=\"#\">+99</a>\n</div>",
     "class": "flex justify-center gap-4 rtl:gap-8"
    }
   ]
  },
  {
   "title": "Avatar text",
   "level": 2,
   "description": "This example can be used if you want to show additional information in the form of text elements such as the user's name and join date.",
   "examples": [
    {
     "html": "<div class=\"flex items-center gap-2.5\">\n    <img class=\"w-10 h-10 rounded-full\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"\">\n    <div class=\"font-medium text-heading\">\n        <div>Jese Leos</div>\n        <div class=\"text-sm font-normal text-body\">Joined in August 2014</div>\n    </div>\n</div>",
     "class": "flex justify-center"
    }
   ]
  },
  {
   "title": "User dropdown",
   "level": 2,
   "description": "Use this example if you want to show a dropdown menu when clicking on the avatar component.",
   "examples": [
    {
     "html": "<img id=\"avatarButton\" type=\"button\" data-dropdown-toggle=\"userDropdown\" data-dropdown-placement=\"bottom-start\" class=\"w-10 h-10 rounded-full cursor-pointer\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"User dropdown\">\n\n<!-- Dropdown menu -->\n<div id=\"userDropdown\" class=\"z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44\">\n    <div class=\"px-4 py-3 border-b border-default-medium text-sm text-heading\">\n      <div class=\"font-medium\">Bonnie Green</div>\n      <div class=\"truncate\">name@example.com</div>\n    </div>\n    <ul class=\"p-2 text-sm text-body font-medium\" aria-labelledby=\"avatarButton\">\n      <li>\n        <a href=\"#\" class=\"block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md\">Dashboard</a>\n      </li>\n      <li>\n        <a href=\"#\" class=\"block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md\">Settings</a>\n      </li>\n      <li>\n        <a href=\"#\" class=\"block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md\">Earnings</a>\n      </li>\n      <li>\n        <a href=\"#\" class=\"block w-full p-2 hover:bg-neutral-tertiary-medium text-fg-danger rounded-md\">Sign out</a>\n      </li>\n    </ul>\n</div>",
     "class": "flex justify-center gap-4",
     "iframeHeight": "360"
    }
   ]
  },
  {
   "title": "Sizes",
   "level": 2,
   "description": "Choose from multiple sizing options for the avatar component from this example.",
   "examples": [
    {
     "html": "<img class=\"w-4.5 h-4.5 rounded-sm\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Extra small avatar\">\n<img class=\"w-6 h-6 rounded-sm\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Small avatar\">\n<img class=\"w-8 h-8 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Base avatar\">\n<img class=\"w-11 h-11 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"Large avatar\">\n<img class=\"w-14 h-14 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"xl avatar\">\n<img class=\"w-16 h-16 rounded-base\" src=\"/docs/images/people/profile-picture-5.jpg\" alt=\"2xl avatar\">",
     "class": "flex flex-wrap items-center justify-center gap-6"
    }
   ]
  }
 ]
};

export default page;
