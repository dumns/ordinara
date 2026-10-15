// GENERATED oleh scripts/gen-library.mjs dari sumber dokumentasi komponen (MIT). Jangan edit manual.
import type { LibraryPage } from "../types";

const page: LibraryPage = {
 "title": "Horizontal Line (HR)",
 "intro": "The HR component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.",
 "sections": [
  {
   "title": "Default HR",
   "level": 2,
   "description": "Use this example to separate text content with a <code>&lt;hr&gt;</code> horizontal line.",
   "examples": [
    {
     "html": "<p class=\"text-body\">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>\n<hr class=\"h-px my-8 bg-neutral-quaternary border-0\">\n<p class=\"text-body\">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>"
    }
   ]
  },
  {
   "title": "Trimmed",
   "level": 2,
   "description": "Use this example to show a shorter version of the horizontal line.",
   "examples": [
    {
     "html": "<p class=\"text-body\">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>\n<hr class=\"w-48 h-1 mx-auto my-4 bg-neutral-quaternary border-0 rounded-sm md:my-10\">\n<p class=\"text-body\">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>"
    }
   ]
  },
  {
   "title": "Icon HR",
   "level": 2,
   "description": "This example can be used to set a custom SVG icon in the middle of the HR element.",
   "examples": [
    {
     "html": "<p class=\"text-body\">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>\n<div class=\"inline-flex items-center justify-center w-full\">\n    <hr class=\"w-64 h-1 my-8 bg-neutral-quaternary border-0 rounded-sm\">\n    <div class=\"absolute px-4 -translate-x-1/2 bg-neutral-primary left-1/2\">\n        <svg class=\"w-6 h-6 text-body\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1\"/></svg>\n    </div>\n</div>\n<p class=\"text-body\">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>",
     "class": "text-center"
    }
   ]
  },
  {
   "title": "HR with text",
   "level": 2,
   "description": "Use this example to add a text in the middle of the HR component.",
   "examples": [
    {
     "html": "<p class=\"text-body\">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>\n<div class=\"inline-flex items-center justify-center w-full\">\n    <hr class=\"w-64 h-px my-8 bg-neutral-quaternary border-0\">\n    <span class=\"absolute px-3 font-medium text-heading -translate-x-1/2 bg-neutral-primary left-1/2\">or</span>\n</div>\n<p class=\"text-body\">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>",
     "class": "text-center"
    }
   ]
  },
  {
   "title": "HR shape",
   "level": 2,
   "description": "This example can be used to separate content with a HR tag as a shape instead of a line.",
   "examples": [
    {
     "html": "<p class=\"text-body\">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>\n<hr class=\"w-8 h-8 mx-auto my-8 bg-neutral-quaternary border-0 rounded-sm md:my-12\">\n<blockquote class=\"text-xl italic font-semibold text-center text-heading\">\n    <p>\"Ordinara is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.\"</p>\n</blockquote>"
    }
   ]
  }
 ]
};

export default page;
