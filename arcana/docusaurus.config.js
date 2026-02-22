// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Arcana',
    tagline: 'Knowledge pile',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://manikandanx0.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/Arcana/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'manikandanx0', // Usually your GitHub org/user name.
    projectName: 'Arcana', // Usually your repo name.

    onBrokenLinks: 'throw',
    deploymentBranch: 'gh-pages', // where the built site goes
    trailingSlash: false,

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/manikandanx0/Arcana',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    headTags: [{
        tagName: 'link',
        attributes: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
    },
    {
        tagName: 'link',
        attributes: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous', // Maps to the "crossorigin" attribute in your link
        },
    },
    {
        tagName: 'link',
        attributes: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
    },],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: '',
                logo: {
                    alt: 'A',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        to: '/docs/intro',
                        label: 'Docs',
                        position: 'left',
                    },
                    {
                        to: '/docs/leetcode/intro',
                        label: 'LeetCode',
                        position: 'left',
                    },
                    {
                        to: '/docs/ml/intro',
                        label: 'Machine Learning',
                        position: 'left',
                    },
                    {
                        to: '/docs/japanese/intro',
                        label: 'Japanese',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/manikandanx0/Arcana',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
