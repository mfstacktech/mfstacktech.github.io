import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const BASE_URL =
  process.env.PR_NUMBER !== undefined
    ? `/pr-preview/pr-${process.env.PR_NUMBER}/`
    : "/";

const config: Config = {
  title: "MF Stack",
  tagline: "Tech Stack for MF distribution",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://mfstack.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mfstacktech", // Usually your GitHub org/user name.
  projectName: "mfstacktech.github.io", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",

  plugins: [
    "docusaurus-tailwindcss-loader",
    [
      "@ohimg/ohimg-docusaurus-plugin",
      {
        enabledPlugins: [
          "docusaurus-plugin-content-docs",
          "docusaurus-plugin-content-pages",
          "docusaurus-plugin-content-blog",
        ],
        debug: false,
        publishableKey: process.env.OMG_PUBLISHABLE_KEY,
        signatureSecret: process.env.OMG_SIGNATURE_SECRET,
        imageOptions: {
          logoSrc: "https://mfstack.com/img/mfstack-logo-1.png",
        },
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@300;400;500;600;700;800;900&family=Lexend:wght@100..900&display=swap",
  ],

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-XEQCDM3KYG",
          anonymizeIP: true,
        },
        docs: false,
        // docs: {
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        // blog: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: "script",
      attributes: {
        // async: "true",
        "data-uid": "b5925d1137",
        src: "https://mf-stack.kit.com/b5925d1137/index.js",
      },
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      hideOnScroll: true,
      title: "MF Stack",
      logo: {
        alt: "MF Stack Logo",
        src: "img/mfstack-logo-1.png",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Tutorial",
    //           to: "/docs/intro",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Stack Overflow",
    //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //         },
    //         {
    //           label: "Discord",
    //           href: "https://discordapp.com/invite/docusaurus",
    //         },
    //         {
    //           label: "X",
    //           href: "https://x.com/docusaurus",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "Blog",
    //           to: "/blog",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/facebook/docusaurus",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
