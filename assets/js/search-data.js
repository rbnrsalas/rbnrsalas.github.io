// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-awards",
          title: "awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-selected-as-stavros-niarchos-foundation-paideia-graduate-fellow-for-2025-2026",
          title: 'Selected as Stavros Niarchos Foundation Paideia Graduate Fellow for 2025-2026.',
          description: "",
          section: "News",},{id: "news-received-vithala-rao-best-phd-paper-award-at-artificial-intelligence-in-management-aim-conference-at-usc-marshall",
          title: 'Received Vithala Rao Best PhD Paper Award at Artificial Intelligence in Management (AIM)...',
          description: "",
          section: "News",},{id: "news-received-best-paper-award-at-informs-conference-on-information-systems-and-technology-cist-2025-in-atlanta-ga",
          title: 'Received Best Paper Award at INFORMS Conference on Information Systems and Technology (CIST)...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
