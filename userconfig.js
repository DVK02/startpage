let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

function getBookUrl(book) {
  // URLs for the books
  const urls = {
    local: {
      "Linux Bible": "/run/media/dan/hdd1/Computer Science/CS Books/Christopher Negus - Linux Bible - the comprehensive tutorial resource.pdf",
      "Pragmatic Programmer": "/run/media/dan/hdd1/Computer Science/CS Books/Andrew Hunt, David Thomas - The Pragmatic Programmer_ From Journeyman to Master-Addison-Wesley Professional (1999).pdf",
      "Swipe to Unlock": "/run/media/dan/hdd1/Product Management/PM Books/Parth Detroja_ Neel Mehta_ Aditya Agashe - Swipe to Unlock_ The Primer on Technology and Business Strategy-Createspace Independent Publishing Platform (2018).pdf",
    },
    web: {
      "Linux Bible": "https://amzn.to/3SIF94y",
      "Pragmatic Programmer": "https://amzn.to/4bASeWp",
      "Swipe to Unlock": "https://amzn.to/3wk2MZV"
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
              url: getBookUrl("Linux Bible"),
              icon: "terminal",
              icon_color: "#cad3f5",
            },
            {
              name: "Pragmatic Programmer",
              url: getBookUrl("Pragmatic Programmer"),
              icon: "code-dots",
              icon_color: "#b7bdf8",
            },
            {
              name: "Swipe to Unlock",
              url: getBookUrl("Swipe to Unlock"),
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
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Developer",
          links: [
            {
              name: "Roadmaps",
              url: "https://roadmap.sh/",
              icon: "timeline",
              icon_color: "#ffffff",
            },
            {
              name: "DSA",
              url: "https://github.com/teivah/algodeck",
              icon: "reorder",
              icon_color: "",
            },
            {
              name: "Design Patterns",
              url: "https://github.com/kamranahmedse/design-patterns-for-humans",
              icon: "grid-dots",
              icon_color: "",
            },
            {
              name: "APIs",
              url: "https://github.com/public-apis/public-apis?tab=readme-ov-file",
              icon: "api",
              icon_color: "",
            },
            {
              name: "Resources",
              url: "https://github.com/ripienaar/free-for-dev",
              icon: "building-warehouse",
              icon_color: "",
            },
          ],
        },
        {
          name: "Product Manager",
          links: [
            {
              name: "UI/UX",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "User Research",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "Statistics",
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
      name: "",
      background_url: "src/img/banners/cbg-1.gif",
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
