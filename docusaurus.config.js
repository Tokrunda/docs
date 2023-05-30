// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DegenX Documentation",
  tagline:
    "Degen ecosystem promotes safety & education, drives innovation, and provides valuable services for all participants",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.dgnx.finance",
  // url: "https://degentokenteam.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "DegenX", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/DEGENTOKENTEAM/docs/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          routeBasePath: "blog/",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/DEGENTOKENTEAM/docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      navbar: {
        title: "DegenX",
        logo: {
          alt: "DegenX Ecosystem Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            to: "/ecosystem/overview",
            label: "The Ecosystem",
            activeBaseRegex: "/(ecosystem)",
          },
          // {
          //   position: "left",
          //   to: "/guides/intro",
          //   label: "Guides",
          //   activeBaseRegex: "/(guides)",
          // },
          // {
          //   position: "left",
          //   to: "/marketing/overview",
          //   label: "Marketing",
          //   activeBaseRegex: "/(marketing)",
          // },
          {
            position: "left",
            to: "https://dgnx.finance/dapp/buy/",
            label: "Buy DGNX",
            className: "button button--primary",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/DEGENTOKENTEAM",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "DegenX",
            items: [
              {
                label: "Tokenomics",
                to: "/ecosystem/tokenomics",
              },
              {
                label: "Contracts & Audits",
                to: "/ecosystem/contracts-and-audits",
              },
              {
                label: "Roadmap",
                to: "/ecosystem/roadmap",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/DegenXportal",
              },
              {
                label: "Discord",
                href: "https://discord.gg/BMaVtEVkgC",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/DegenEcosystem",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "CoinMarketCap",
                href: "https://coinmarketcap.com/currencies/degenx",
              },
              {
                label: "Coingecko",
                href: "https://www.coingecko.com/en/coins/degenx",
              },
              {
                label: "GitHub",
                href: "https://github.com/DEGENTOKENTEAM",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DegenX Ecosystem`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
