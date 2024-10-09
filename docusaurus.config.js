// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs - Superduper',
  tagline: 'Bringing AI to your data-store',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.superduper.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'superduper.io', // Usually your GitHub org/user name.
  projectName: 'superduper', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('/docs')) {
            // Redirect from /docs/docs/X to /docs/X
            // This is to avoid broken links on existing sites that are pointing to superduper docs.
            return [existingPath.replace('/docs', '/docs/docs')];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  scripts: [
    // {
    //   src: 'https://main.d1eg28j9pwrt0l.amplifyapp.com/widget.js',
    //   id: 'my-api',
    //   'data-api-key': 'superduper',
    //   async: true,
    // },
    {
      src: 'https://tag.clearbitscripts.com/v1/pk_0beed107418c6889a934fd8a58e1054e/tags.js',
      referrerPolicy: 'strict-origin-when-cross-origin',
      async: true,
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-Q97F3ZHCQD',
      strategy: 'lazyOnload',
      id: 'gtag-script_2',
      async: true,
    },
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        id: 'gtm-script_1',
        strategy: 'lazyOnload',
      },
      innerHTML: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5BXCZJTF');
              `,
    },
    {
      tagName: 'script',
      attributes: {
        id: 'gtag-config',
        strategy: 'lazyOnload',
      },
      innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q97F3ZHCQD'); `,
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
      !function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t] = function () { var n = [].slice.call(arguments); return n.unshift(t), ko.push(n), ko }});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_92927e86e628c69d1ec3b7b4e887e6997bab/sdk.js"),(document.body || document.head).appendChild(n)}();
              `,
    },
    {
      tagName: 'iframe',
      attributes: {
        src: 'https://www.googletagmanager.com/ns.html?id=GTM-5BXCZJTF',
        height: '0',
        width: '0',
        style: 'display: none; visibility: hidden;',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/superduper-io/superduper/edit/main/docs/',
          versions: {current: {label: 'Main branch'}},
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'superduper.io',
          src: 'img/SuperDuperDB_logo_color.svg',
          srcDark: 'img/SuperDuperDB_logo_white.svg',
          href: 'https://superduper.io',
          target: '_self',
          // width: 250,
          // height: 34,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/category/templates/',
            position: 'left',
            label: 'Templates',
          },
          {
            href: '/docs/category/api/',
            label: 'API',
            position: 'left',
          },
          {
            to: 'https://blog.superduper.io/',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // Optional, can rename the label
            dropdownItemsBefore: [],
            dropdownItemsAfter: [
              {
                to: '/versions',
                label: 'All versions',
              },
            ],
          },
          {
            href: 'https://github.com/superduper-io/superduper',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Website',
                href: 'https://superduper.io',
              },
              {
                label: 'Documentation',
                to: '/docs/category/get-started',
              },
              {
                label: 'Templates',
                to: '/docs/category/templates',
              },
              {
                label: 'Blog',
                to: 'https://blog.superduper.io/',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/superduper-io/superduper',
              },
              {
                label: 'Issues',
                href: 'https://github.com/superduper-io/superduper/issues',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/superduper-io/superduper/discussions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join.com / Careers',
                href: 'https://join.com/companies/superduper',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/superduper-io',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/superduper-public/shared_invite/zt-1yodhtx8y-KxzECued5QBtT6JFnsSNrQ',
              },
              {
                label: 'X / Twitter',
                href: 'https://twitter.com/superduperdb',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@superduper-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} superduper.io, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: 'og:image',
          content: 'https://docs.superduper.io/img/og-image.png',
        },
        {
          name: 'title',
          content: 'Docs - Superduper',
        },
        {
          name: 'description',
          content:
            "Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize SuperDuper technologies in your projects. (Formerly SuperDuperDB)",
        },
        {
          name: 'keywords',
          content:
            'superduper docs, Superduper Docs, Superduper documentation, SuperduperDB documentation, SuperduperDB docs, SuperduperDB, Superduper, Superduper API, Superduper tutorials, Superduper guides, Superduper use cases',
        },
      ],
      announcementBar: {
        id: 'support_us',
        content:
          '📣 SuperDuperDB is now Superduper! Check out our new website superduper.io 📣',
        backgroundColor: '#3074B7',
        textColor: '#fff',
        isCloseable: true,
      },
    }),
};

module.exports = config;
