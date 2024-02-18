let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

function getBookUrl(book) {
  // URLs for the books
  const urls = {
    local: {
      "linux_bible": "/mnt/hdd1/Computer Science/CS Books/linux_bible.pdf",
      "pragmatic_programmer": "/mnt/hdd1/Computer Science/CS Books/the_pragmatic_programmer.pdf",
      "swipe_to_unlock": "/mnt/hdd1/Product Management/PM Books/swipe_to_unlock.pdf",
      "continuous_discovery": "/mnt/hdd1/Product Management/PM Books/continuous_discovery_habits.epub",
      "dont_make_me_think": "/mnt/hdd1/Product Management/PM Books/dont_make_me_think.epub",
      "hacking_growth": "/mnt/hdd1/Product Management/PM Books/hacking_growth.epub",
      "measure_what_matters": "/mnt/hdd1/Product Management/PM Books/measure_what_matters.epub",
      "product_management_in_practice": "/mnt/hdd1/Product Management/PM Books/product_management_in_practice.epub",
      "lean_analytics": "/mnt/hdd1/Product Management/PM Books/lean_analytics.pdf"
    },
    web: {
      "linux_bible": "https://amzn.to/3SIF94y",
      "pragmatic_programmer": "https://amzn.to/4bASeWp",
      "swipe_to_unlock": "https://amzn.to/3wk2MZV",
      "continuous_discovery": "https://amzn.to/3uEytMY",
      "dont_make_me_think": "https://amzn.to/49BL6qU",
      "hacking_growth": "https://amzn.to/3OOyntb",
      "measure_what_matters": "https://amzn.to/3ULtN2u",
      "product_management_in_practice": "https://amzn.to/3UINub6",
      "lean_analytics": "https://amzn.to/49jpQqi"
    }
  };

  // Check if the website is loaded locally or on the web
  const isLocal = window.location.href.startsWith("file:");

  // Determine the environment and select the appropriate URL
  const environment = isLocal ? "local" : "web";

  // Return the URL for the specified book
  return urls[environment][book];
}


const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Toronto",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ed8796",
  },
  search: {
    engines: {
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    },
  },
  keybindings: {
    s: "search-bar",
  },
  disabled: [],
  fastlink: "",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Home",
      background_url: "src/img/banners/cbg-13.gif",
      categories: [
        {
          name: "My Stuff",
          links: [
            {
              name: "To Do",
              url: "https://to-do.office.com/tasks/today",
              icon: "list-check",
              icon_color: "#8aadf4",
            },
            {
              name: "Blog",
              url: "https://dvk02.github.io/",
              icon: "article",
              icon_color: "#cad3f5",
            },
            {
              name: "UofT",
              url: "https://acorn.utoronto.ca",
              icon: "school",
              icon_color: "#181926",
            },
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#494d64",
            },
          ],
        },
        {
          name: "Learning",
          links: [
            {
              name: "Linux Bible",
              url: getBookUrl("linux_bible"),
              icon: "terminal",
              icon_color: "#cad3f5",
            },
            {
              name: "Pragmatic Programmer",
              url: getBookUrl("pragmatic_programmer"),
              icon: "code-dots",
              icon_color: "#b7bdf8",
            },
            {
              name: "Swipe to Unlock",
              url: getBookUrl("swipe_to_unlock"),
              icon: "arrow-down-circle",
              icon_color: "#8bd5ca",
            },
          ],
        },
        {
          name: "Chill",
          links: [
            {
              name: "YouTube",
              url: "https://youtube.com/",
              icon: "brand-youtube",
              icon_color: "#ed8796",
            },
            {
              name: "Reddit",
              url: "https://reddit.com/",
              icon: "brand-reddit",
              icon_color: "#f5a97f",
            },
            {
              name: "Spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: "#a6da95",
            },
            {
              name: "9Anime",
              url: "https://9anime.pe/",
              icon: "player-play",
              icon_color: "#c6a0f6",
            },
          ],
        },
      ],
    },
    {
      name: "dev+ pm",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "Developer",
          links: [
            {
              name: "Roadmaps",
              url: "https://roadmap.sh/",
              icon: "route",
              icon_color: "#ffffff",
            },
            {
              name: "DSA",
              url: "https://github.com/teivah/algodeck",
              icon: "reorder",
              icon_color: "#f4dbd6",
            },
            {
              name: "Design Patterns",
              url: "https://github.com/kamranahmedse/design-patterns-for-humans",
              icon: "grid-dots",
              icon_color: "#f0c6c6",
            },
            {
              name: "APIs",
              url: "https://github.com/public-apis/public-apis?tab=readme-ov-file",
              icon: "api",
              icon_color: "#f5bde6",
            },
            {
              name: "Resources",
              url: "https://github.com/ripienaar/free-for-dev",
              icon: "building-warehouse",
              icon_color: "#c6a0f6",
            },
          ],
        },
        {
          name: "Product Manager",
          links: [
            {
              name: "Design",
              url: getBookUrl("dont_make_me_think"),
              icon: "brand-radix-ui",
              icon_color: "#ed8796",
            },
            {
              name: "User Research",
              url: getBookUrl("continuous_discovery"),
              icon: "user-search",
              icon_color: "#ee99a0",
            },
            {
              name: "Data",
              url: getBookUrl("lean_analytics"),
              icon: "report-analytics",
              icon_color: "#f5a97f",
            },
            {
              name: "Measure",
              url: getBookUrl("measure_what_matters"),
              icon: "box",
              icon_color: "#8bd5ca",
            },
            {
              name: "Growth",
              url: getBookUrl("hacking_growth"),
              icon: "box",
              icon_color: "#a6da95",
            },
          ],
        },
        {
          name: "Job Boards",
          links: [
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/jobs/",
              icon: "brand-linkedin",
              icon_color: "#8aadf4",
            },
            {
              name: "indeed",
              url: "https://ca.indeed.com/",
              icon: "info-circle-filled",
              icon_color: "#cad3f5",
            },
            {
              name: "JobPulse",
              url: "https://jobpulse.fyi/",
              icon: "activity-heartbeat",
              icon_color: "#939ab7",
            },
            {
              name: "Simplify",
              url: "https://simplify.jobs/dashboard",
              icon: "square-rounded-letter-s",
              icon_color: "#7dc4e4",
            },
            {
              name: "Pitt CSC",
              url: "https://github.com/SimplifyJobs/Summer2024-Internships",
              icon: "letter-p",
              icon_color: "#eed49f",
            },
          ],
        },
      ],
    },
    {
      name: "Tech",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "",
          links: [
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: "",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
