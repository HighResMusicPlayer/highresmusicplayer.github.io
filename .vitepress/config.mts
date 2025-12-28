import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: "hrmp",
   description: "Documentation website for hrmp",
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
         { text: "Home", link: "/" },
         { text: "About", link: "/hrmp.md" },
         { text: "Docs", link: "/docs/guides.md" },
         { text: "News", link: "/news" },
         { text: "Releases", link: "/releases" },
      ],

      footer: {
         message:
            "<span class='vp-doc'><a href='https://highresmusicplayer.github.io/'>High resolution music player</a></span>",
         copyright:
            "© 2025 <span class='vp-doc'><a href='https://highresmusicplayer.github.io/'>The hrmp community</a></span> (<span class='vp-doc'><a href='http://creativecommons.org/licenses/by/4.0/'>CC BY 4.0</a></span>)",
      },

      sidebar: [
         {
            text: "About",
            link: "/hrmp.md",
            items: [
               {
                  text: "hrmp",
                  link: "/hrmp.md",
               },
            ],
         },
         {
            text: "Getting Started",
            items: [
               {
                  text: "hrmp",
                  collapsed: false,
                  items: [
                     {
                        text: "Installation",
                        link: "/guide/hrmp/installation",
                     },
                     {
                        text: "Configuration",
                        link: "/guide/hrmp/configuration",
                     },
                  ],
               },
            ],
         },
         {
            text: "Documentation",
            items: [
               {
                  text: "hrmp",
                  collapsed: false,
                  items: [
                     {
                        text: "Command Line Flags",
                        link: "/docs/hrmp/command_line_flags.md",
                     },
                     {
                        text: "Configuration",
                        link: "/docs/hrmp/configuration.md",
                     },
                  ],
               },
            ],
         },
         {
            text: "Releases",
            link: "/releases",
            items: [
               {
                  text: "hrmp",
                  collapsed: true,
                  items: [
                     {
                        text: "hrmp 0.12.0",
                        link: "/releases/hrmp_0_12_0",
                     },
                     {
                        text: "hrmp 0.11.1",
                        link: "/releases/hrmp_0_11_1",
                     },
                     {
                        text: "hrmp 0.11.0",
                        link: "/releases/hrmp_0_11_0",
                     },
                     {
                        text: "hrmp 0.10.0",
                        link: "/releases/hrmp_0_10_0",
                     },
                     {
                        text: "hrmp 0.9.1",
                        link: "/releases/hrmp_0_9_1",
                     },
                     {
                        text: "hrmp 0.9.0",
                        link: "/releases/hrmp_0_9_0",
                     },
                     {
                        text: "hrmp 0.8.0",
                        link: "/releases/hrmp_0_8_0",
                     },
                     {
                        text: "hrmp 0.7.1",
                        link: "/releases/hrmp_0_7_1",
                     },
                     {
                        text: "hrmp 0.7.0",
                        link: "/releases/hrmp_0_7_0",
                     },
                     {
                        text: "hrmp 0.6.0",
                        link: "/releases/hrmp_0_6_0",
                     },
                     {
                        text: "hrmp 0.5.3",
                        link: "/releases/hrmp_0_5_3",
                     },
                     {
                        text: "hrmp 0.5.2",
                        link: "/releases/hrmp_0_5_2",
                     },
                     {
                        text: "hrmp 0.5.1",
                        link: "/releases/hrmp_0_5_1",
                     },
                     {
                        text: "hrmp 0.5.0",
                        link: "/releases/hrmp_0_5_0",
                     },
                  ],
               },
            ],
         },
         {
            text: "GitHub Issues",
            link: "https://github.com/HighResMusicPlayer/hrmp/issues",
         },
         {
            text: "GitHub Discussions",
            link: "https://github.com/HighResMusicPlayer/hrmp",
         },
         {
            text: "LICENSE",
            link: "https://www.gnu.org/licenses/gpl-3.0.en.html",
         },
      ],

      socialLinks: [{ icon: "github", link: "https://github.com/HighResMusicPlayer" }],
   },
});
