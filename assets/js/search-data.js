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
          section: "News",},{id: "news-featured-in-the-daily-pennsylvanian-penn-public-interest-technology-initiative-hosts-virtual-fireside-talk-on-ai-applications-discussed-the-importance-of-having-the-human-in-the-loop-in-ai-development",
          title: 'Featured in The Daily Pennsylvanian: Penn Public Interest Technology initiative hosts virtual fireside...',
          description: "",
          section: "News",},{id: "news-featured-in-wharton-magazine-wharton-s-ai-doctors-are-in-spring-summer-2026-discussing-ai-and-creativity-research",
          title: 'Featured in Wharton Magazine: Wharton’s AI Doctors Are In (Spring/Summer 2026), discussing AI...',
          description: "",
          section: "News",},{id: "news-will-serve-as-invited-panelist-at-the-informs-annual-meeting-informs-2026-in-san-francisco-ca",
          title: 'Will serve as Invited Panelist at the INFORMS Annual Meeting (INFORMS 2026) in...',
          description: "",
          section: "News",},{id: "news-will-serve-as-invited-panelist-at-the-academy-of-management-annual-meeting-aom-2026-in-philadelphia-pa",
          title: 'Will serve as Invited Panelist at the Academy of Management Annual Meeting (AOM...',
          description: "",
          section: "News",},{id: "news-awarded-the-winkelman-fellowship-in-applied-economics-by-the-wharton-school-a-highly-prestigious-fellowship-recognizing-the-phd-student-across-all-departments-who-shows-the-greatest-promise-for-an-outstanding-research-and-teaching-career-at-the-world-s-leading-schools-of-management",
          title: 'Awarded the Winkelman Fellowship in Applied Economics by The Wharton School, a highly...',
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
