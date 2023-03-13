import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import {
  MdLocalFireDepartment,
  MdLiveTv,
  MdOutlineWatchLater,
  MdOutlineDoNotDisturbOn,
  MdDoNotDisturbAlt,
  MdOutlineQueuePlayNext
} from "react-icons/md";
import { CgMusicNote, CgPlayListAdd } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { BiShare } from "react-icons/bi";

export const category_data = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true
  }
];

export const menu_data = [
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" }
];

export const popular_data = [
  { name: "New", url: "latest" },
  { name: "Music", url: "music" },
  { name: "Satsang", url: "satsang" },
  { name: "Mixes", url: "latestMixes" },
  { name: "Kapil Sharma", url: "kapilsharma2023" },
  { name: "Live", url: "live" },
  { name: "Comedy Clubs", url: "comedyclubs" },
  { name: "Akshay Saini", url: "akshaysaini" },
  { name: "React", url: "reactjs" },
  { name: "Namaste Javascript", url: "namastejs" },
  { name: "Bollywood Music", url: "latestBollywoodmusic" },
  { name: "Tarak Mehta", url: "akshaysaini" },
  { name: "Cricket", url: "reactjs" },
  { name: "Netflix", url: "namastejs" },
  { name: "Bollywood Movies", url: "latestBollywoodmusic" },
  { name: "Music", url: "music" },
  { name: "Satsang", url: "satsang" },
  { name: "Mixes", url: "latestMixes" },
  { name: "Kapil Sharma", url: "kapilsharma2023" },
  { name: "Live", url: "live" }
];

export const dropdown_items_shortcuts = [
  { name: "Add to Queue", icon: <MdOutlineQueuePlayNext /> },
  { name: "Save to Watch later", icon: <MdOutlineWatchLater /> },
  { name: "Save to Playlist", icon: <CgPlayListAdd /> },
  { name: "Download", icon: <HiDownload /> },
  { name: "share", icon: <BiShare /> }
];

export const dropdown_items_tools = [
  { name: "Don't Recommend Channel", icon: <MdOutlineDoNotDisturbOn /> },
  { name: "Not Interested", icon: <MdDoNotDisturbAlt /> },
  { name: "Report", icon: <AiOutlineFlag /> }
];

export const dropdown_items_shortcuts_for_search = [
  { name: "Add to Queue", icon: <MdOutlineQueuePlayNext /> },
  { name: "Save to Watch later", icon: <MdOutlineWatchLater /> },
  { name: "Save to Playlist", icon: <CgPlayListAdd /> },
  { name: "share", icon: <BiShare /> }
];

export const dropdown_items_tools_for_search = [
  { name: "Report", icon: <AiOutlineFlag /> }
];

export const api_options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee78468c6bmshaf0a0c813b32c06p103305jsn2049f090173d",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
  }
};

export const viewedBy = (num) => {
  let viewedByInWords = "";
  const str = num.toString();
  const length = str.length;
  switch (length) {
    case 1:
      viewedByInWords = str;
      break;
    case 2:
      viewedByInWords = str;
      break;
    case 3:
      viewedByInWords = str;
      break;
    case 4:
      viewedByInWords = `${str[0]}.${str[1]}k`;
      break;

    case 5:
      viewedByInWords = `${str[0]}${str[1]}k`;
      break;

    case 6:
      viewedByInWords = `${str[0]}.${str[1]}Lakh`;
      break;

    case 7:
      viewedByInWords = `${str[0]}${str[1]}Lakh`;
      break;

    case 8:
      viewedByInWords = `${str[0]}.${str[1]}Crore`;
      break;

    case 9:
      viewedByInWords = `${str[0]}${str[1]}Crore`;
      break;

    default:
      viewedByInWords = `${str.substring(0, str.length - 6)}Crore`;
  }
  return viewedByInWords;
};

export const relatedVideos = {
  contents: [
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/gKFw8Y1DNe5sc5jVK8swpPrOvYREjS2ExGnudIJnos1FajFzjB3wSvafB7smmmNPUU6hTD5HvQ=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Enrique Iglesias"
        },
        isLiveNow: false,
        lengthSeconds: 287,
        publishedTimeText: "8 years ago",
        stats: {
          views: 3344128527
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/NUsoVlDFqZg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB_it4kap2IgxTHmuK4k6HcH2cYrQ",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/NUsoVlDFqZg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoUMQqcN7M6bX6FQQpbZOMcHUc8A",
            width: 336
          }
        ],
        title:
          "Enrique Iglesias - Bailando ft. Descemer Bueno, Gente De Zona (Español)",
        videoId: "NUsoVlDFqZg"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/9z8rZjFbBf2xB2nX0A24I2uVDNSEfj-rw3hkzoLwOlgp0IqmuMuTv3yvjgAN6ufP7rpQTXxPMRs=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Shakira"
        },
        isLiveNow: false,
        lengthSeconds: 211,
        publishedTimeText: "12 years ago",
        stats: {
          views: 3507763721
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBe9vXIar2HGROOpls2Pom-262zbg",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0LmpONgzuqkPEQNQYtiDnBNSCYA",
            width: 336
          }
        ],
        title:
          "Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song)",
        videoId: "pRpeEdMmmQ0"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/PJNnJg8WcCB8BnlDOfAjUPm28LLBXj0859iTSiyQ8pQyb6j1A47myGeT_cDoBptd5Wyu_Nqw2kE=s68-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [],
          title: "Flower of love"
        },
        isLiveNow: false,
        lengthSeconds: 862,
        publishedTimeText: "1 day ago",
        stats: {
          views: 1882626
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/bH3YvwskvpA/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFEgISh_MA8=&rs=AOn4CLAjNBNRJssf4fN4E_GmenGvMf24tA",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/bH3YvwskvpA/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhRICEofzAP&rs=AOn4CLAZsFh9nNbZpFcLAFja1Rbca5oY3Q",
            width: 336
          }
        ],
        title: "Rema, Selena Gomez   Calm Down Long ,Tik Tik, Lyrics",
        videoId: "bH3YvwskvpA"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/gKFw8Y1DNe5sc5jVK8swpPrOvYREjS2ExGnudIJnos1FajFzjB3wSvafB7smmmNPUU6hTD5HvQ=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Enrique Iglesias"
        },
        isLiveNow: false,
        lengthSeconds: 272,
        publishedTimeText: "8 years ago",
        stats: {
          views: 556052829
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/b8I-7Wk_Vbc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcZO98fV4YedtWUT-piuQ6krZENg",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/b8I-7Wk_Vbc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApzRyPBwFFgHzr3JQniY1OqI6gXw",
            width: 336
          }
        ],
        title:
          "Enrique Iglesias - Bailando (English Version) ft. Sean Paul, Descemer Bueno, Gente De Zona",
        videoId: "b8I-7Wk_Vbc"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/gLVxWfSjIZ0mVwPmIfqR3b_OqbdTsA2s9K7G8Ucjd3U-Geu0mhmdGNIv8GqnsbSPFKuiyXLRDA=s68-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [],
          title: "LETRA HOUSE"
        },
        isLiveNow: false,
        lengthSeconds: 862,
        publishedTimeText: "2 days ago",
        stats: {
          views: 79278
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/pM3lQ8ctUd0/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFEgISh_MA8=&rs=AOn4CLD524rop4T5w3IiD7cLn2CvpbVwgQ",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/pM3lQ8ctUd0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhRICEofzAP&rs=AOn4CLDI1YapZc0WOGpWPyJknlyS1tJwnQ",
            width: 336
          }
        ],
        title: "Rema, Selena Gomez - Calm Down / Long ,Tik Tik, Lyrics",
        videoId: "pM3lQ8ctUd0"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/8lwMAYZDKUCyLRi0jAF4wyjA09b3lvPZ_fr8BSnQ56uhq8zCzWla8rmjZ3nfFyII5e9hbCb8ekY=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Ed Sheeran"
        },
        isLiveNow: false,
        lengthSeconds: 264,
        publishedTimeText: "6 years ago",
        stats: {
          views: 5939736801
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAQgWljUi0tmmXYUsme9SV-fnZkKA",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlT6L0sEzlJ81zLRYRh9Ja0fXW3g",
            width: 336
          }
        ],
        title: "Ed Sheeran - Shape of You (Official Music Video)",
        videoId: "JGwWNGJdvx8"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/gKFw8Y1DNe5sc5jVK8swpPrOvYREjS2ExGnudIJnos1FajFzjB3wSvafB7smmmNPUU6hTD5HvQ=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Enrique Iglesias"
        },
        isLiveNow: false,
        lengthSeconds: 233,
        publishedTimeText: "6 years ago",
        stats: {
          views: 1453125558
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/9sg-A-eS6Ig/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5AvB9XLbiiOZMRfl8Hzbwgg92_g",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/9sg-A-eS6Ig/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcqj4x1P0IedUfqMnK1mtbLknRig",
            width: 336
          }
        ],
        title:
          "Enrique Iglesias - SUBEME LA RADIO (Official Video) ft. Descemer Bueno, Zion & Lennox",
        videoId: "9sg-A-eS6Ig"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/8Lwf4LCR2VmxD2JKiozRu7Lo2jGdnhRs42NawHmMN_xJ8TdW-30e3J9DhumEksivp1Esog4A=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Luis Fonsi"
        },
        isLiveNow: false,
        lengthSeconds: 211,
        publishedTimeText: "5 years ago",
        stats: {
          views: 2252073522
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/TyHvyGVs42U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDw1NehKTFdPzzixvoCjlnwTW4AWA",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/TyHvyGVs42U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ_5WUbaytenOtsvtQqF94PrinXw",
            width: 336
          }
        ],
        title: "Luis Fonsi, Demi Lovato - Échame La Culpa",
        videoId: "TyHvyGVs42U"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/mGthkE1IHcHycG7OAj6AvaD0Iv2PtpaBsawjnFYiyTQFIKyy9p43tc68eglMeuZ-PUaQDf-jXw=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Jeet Creation (Top)"
        },
        isLiveNow: false,
        lengthSeconds: 314,
        publishedTimeText: "2 days ago",
        stats: {
          views: 886421
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/ES4I2aiNUK0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC-CgPfJmqxf7cGv1eMS9kSrWApxQ",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/ES4I2aiNUK0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdZDduRAxnRPOA5rEkcIp8MxRqPA",
            width: 336
          }
        ],
        title:
          "Baby Calm Down FULL HD | Selena Gomez & Rema Official Music Video 2023",
        videoId: "ES4I2aiNUK0"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/w2ZsaB239B1dyZIapQWlrdgyyjmTyT0Z8EWp9-X30KHSZDhThH2VlzwOzv_aLwRlF4tqJexr=s68-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [],
          title: "No Love"
        },
        isLiveNow: false,
        lengthSeconds: 865,
        publishedTimeText: "5 days ago",
        stats: {
          views: 251064
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/3kvztUKErfU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCDlqhR5e_hh09alFIfPRtrJi5CVg",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/3kvztUKErfU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUb1ia59EUihywIEbStLZ7s7wwZA",
            width: 336
          }
        ],
        title:
          "Señorita - Shawn Mendes | Ed Sheeran, One Direction, Ali Gatie (Lyrics)",
        videoId: "3kvztUKErfU"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/cH39svjRn9lwt9cfoJdSrzx_cI6ZsDjusemC82YKcvfE7833p4JjjH_Z6l60hCLrb7xdS5xc=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Jennifer Lopez"
        },
        isLiveNow: false,
        lengthSeconds: 267,
        publishedTimeText: "12 years ago",
        stats: {
          views: 2082667247
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/t4H_Zoh7G5A/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAKMhuSm39TGM5W0Z4O9OoSa7lTrg",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/t4H_Zoh7G5A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf2p7qNDfgItl8jQhIVXB0sC-2aQ",
            width: 336
          }
        ],
        title: "Jennifer Lopez - On The Floor ft. Pitbull",
        videoId: "t4H_Zoh7G5A"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/mGthkE1IHcHycG7OAj6AvaD0Iv2PtpaBsawjnFYiyTQFIKyy9p43tc68eglMeuZ-PUaQDf-jXw=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Jeet Creation (Top)"
        },
        isLiveNow: false,
        lengthSeconds: 332,
        publishedTimeText: "1 day ago",
        stats: {
          views: 640167
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/xflb50OrJP4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJfqiFhiLVcSukNhPHY0khFWoVIg",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/xflb50OrJP4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI1TJQHhhVmPwoex-DSglSEOXYuw",
            width: 336
          }
        ],
        title:
          "Baby Calm Down FULL HD | Selena Gomez & Rema Official Music Video 2023",
        videoId: "xflb50OrJP4"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/kfw_1eOpjdYASmlAnSPa7XmXrYpaKjuW4k7_oB-hD5ljRSlT7yThew72ZxgW1UrAJ1e8vX1G=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "DJ Snake"
        },
        isLiveNow: false,
        lengthSeconds: 232,
        publishedTimeText: "4 years ago",
        stats: {
          views: 2427011003
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/ixkoVwKQaJg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBaVaxHzOQASjPuVExhaUr94DboLQ",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/ixkoVwKQaJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObpYM_JYfscrEOgTKMs1kKxenvw",
            width: 336
          }
        ],
        title:
          "DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B (Official Music Video)",
        videoId: "ixkoVwKQaJg"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/gLVxWfSjIZ0mVwPmIfqR3b_OqbdTsA2s9K7G8Ucjd3U-Geu0mhmdGNIv8GqnsbSPFKuiyXLRDA=s68-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [],
          title: "LETRA HOUSE"
        },
        isLiveNow: false,
        lengthSeconds: 862,
        publishedTimeText: "3 days ago",
        stats: {
          views: 420178
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/R6XEQylVx1U/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFAgISh_MA8=&rs=AOn4CLA9lCSH1v0oR8xLVywcFPW1s-Eouw",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/R6XEQylVx1U/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhQICEofzAP&rs=AOn4CLC1Y0oVZT3jhLonaMMLBZjOb2V0Vg",
            width: 336
          }
        ],
        title: "Rema & Selena Gomez - Calm Down (Long ,Tik Tik, Lyrics)",
        videoId: "R6XEQylVx1U"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/mGthkE1IHcHycG7OAj6AvaD0Iv2PtpaBsawjnFYiyTQFIKyy9p43tc68eglMeuZ-PUaQDf-jXw=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Jeet Creation (Top)"
        },
        isLiveNow: false,
        lengthSeconds: 319,
        publishedTimeText: "3 days ago",
        stats: {
          views: 3653870
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/czpPwMB8s3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBOptI_3DHe2j2bWjTdW56Jpbl2Kw",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/czpPwMB8s3o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKcNAeJJXkwqNsWwVI1NmhbS2pyQ",
            width: 336
          }
        ],
        title:
          "Baby Calm Down FULL HD | Selena Gomez & Rema Official Music Video 2023",
        videoId: "czpPwMB8s3o"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/RJZmXxfbSO2fPO-8HWsZSMymQCAmIkIxeReZ2sKVa6nL0SekbyWLzp2t4QsBFk3McPwLoEX19A=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "LK King"
        },
        isLiveNow: false,
        lengthSeconds: 299,
        publishedTimeText: "2 years ago",
        stats: {
          views: 305292117
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/11e4sW-Q4Ns/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDmkge3orz2KuHPRtJ9EdEeSjiKhg",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/11e4sW-Q4Ns/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsRafiC7EOTDYbpAeziKN1-hDC2g",
            width: 336
          }
        ],
        title: "LK - Jerusalema  Chorégraphie Officiel.",
        videoId: "11e4sW-Q4Ns"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/ZzIeagIqkoUB28nslGqDk16KqRPqwAEvqiAwQP9lom_GCydLrkONPRsedyJKZYXmzXJfmTjo=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Ricky Martin"
        },
        isLiveNow: false,
        lengthSeconds: 289,
        publishedTimeText: "6 years ago",
        stats: {
          views: 1837475884
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/iOe6dI2JhgU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC0GYsP4mQeNxc9n45rQr6fVDbxSQ",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/iOe6dI2JhgU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcaPm_Fz5jV_gkVLaYpiIrFRUnAg",
            width: 336
          }
        ],
        title: "Ricky Martin - Vente Pa' Ca (Official Video) ft. Maluma",
        videoId: "iOe6dI2JhgU"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/0QtvlQ0c-h-Z1YTIxYZ_0NjBVvVQtpmolIhJfWGtXMa_sC3WqvfDx8XHsqz_6cuGrKDRvBjD3g=s68-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [],
          title: "The Sound Spot"
        },
        isLiveNow: false,
        lengthSeconds: 868,
        publishedTimeText: "1 month ago",
        stats: {
          views: 1896998
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/9N2LvG1dArA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBduNd1UloOubmlF7OroPWkU4kBPg",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/9N2LvG1dArA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBilDOKAZ7QW8U6UhSf7onxuYeaAQ",
            width: 336
          }
        ],
        title:
          "Señorita - Shawn Mendes [Lyrics] | Ed Sheeran, One Direction, Ali Gatie",
        videoId: "9N2LvG1dArA"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/ngsSNacaotP_6KLU6VudiMdGtW6NPIcY0lrm8xPcys2U22KAsTdPpLLkpMsLWb0ExDTHl7MzpQ=s88-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL"
            }
          ],
          title: "Daddy Yankee"
        },
        isLiveNow: false,
        lengthSeconds: 211,
        publishedTimeText: "4 years ago",
        stats: {
          views: 2641633149
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/DiItGE3eAyQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBNySpuybqeLn4sMPvJHl2AsKU5QQ",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/DiItGE3eAyQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZO7ddzx9l0CevCjD3X47-pNn-Dw",
            width: 336
          }
        ],
        title: "Daddy Yankee & Snow - Con Calma (Official Video)",
        videoId: "DiItGE3eAyQ"
      }
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url:
                "https://yt3.ggpht.com/95zgG2eEtF9lDw_5z4DMeMSf7W0Sh7TJMQqVW5egukyjUe_qLxW8MU1TTZej7yXIoiCdekGM=s68-c-k-c0x00ffffff-no-rj",
              width: 68
            }
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL"
            }
          ],
          title: "ClubMusic80s"
        },
        isLiveNow: false,
        lengthSeconds: 207,
        publishedTimeText: "8 years ago",
        stats: {
          views: 475237486
        },
        thumbnails: [
          {
            height: 94,
            url:
              "https://i.ytimg.com/vi/iyLdoQGBchQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAuzVEx2os-vXfwGtrLhSJ8D-mETA",
            width: 168
          },
          {
            height: 188,
            url:
              "https://i.ytimg.com/vi/iyLdoQGBchQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgrmIru_IsT-5JuniOxTbop5JJ-Q",
            width: 336
          }
        ],
        title: "Kaoma - Lambada (Official Video) 1989 HD",
        videoId: "iyLdoQGBchQ"
      }
    }
  ],
  cursorNext:
    "CBQSDRILa0pRUDdraXc1RmsYACqMBjJzNkw2d3pDQkFxX0JBb0Q4ajRBQ2czQ1Bnb0ltTk9XaHVXS3lxVTFDZ1B5UGdBS0RzSS1Dd2lOc3BxWm5jS1hqYVVCQ2dQeVBnQUtEY0ktQ2dpUV9aTFo4SmYydm13S0FfSS1BQW9Od2o0S0NMZXJfY25XM1lfaGJ3b0Q4ajRBQ2c3Q1Bnc0kzYU8xdWJ5by1lYWtBUW9EOGo0QUNnM0NQZ29Jbl83MmtzYkdoYllrQ2dQeVBnQUtEc0ktQ3dpSTBjdTh2c0NQNVBZQkNnUHlQZ0FLRGNJLUNnamx4ck9yaHZuN2tFOEtBX0ktQUFvTndqNEtDSzJodGNTYW00S1hFUW9EOGo0QUNnN0NQZ3NJOWR1U2xOVDJfS1hlQVFvRDhqNEFDZzdDUGdzSWtMZnN3LWpzXzhDM0FRb0Q4ajRBQ2c3Q1Bnc0lfc21zbmZUODF2ekZBUW9EOGo0QUNnN0NQZ3NJbU5IQmxQQ0t5b3lMQVFvRDhqNEFDZzNDUGdvSTFZN1h5cktJOGRKSENnUHlQZ0FLRGNJLUNnajY1dktEalBpVG5YTUtBX0ktQUFvT3dqNExDTnZCd195V2x1NnIxd0VLQV9JLUFBb093ajRMQ0lXTXB1ekl6dTd6aUFFS0FfSS1BQW9Pd2o0TENMQ0Y5T3JHOS1MdTlBRUtBX0ktQUFvTndqNEtDS1NHLU82RW80dVJEZ29EOGo0QUNnN0NQZ3NJbE9TRmpKQzB0NUdMQVJJVUFBSUVCZ2dLREE0UUVoUVdHQm9jSGlBaUpDWWFCQWdBRUFFYUJBZ0NFQU1hQkFnRUVBVWFCQWdHRUFjYUJBZ0lFQWthQkFnS0VBc2FCQWdNRUEwYUJBZ09FQThhQkFnUUVCRWFCQWdTRUJNYUJBZ1VFQlVhQkFnV0VCY2FCQWdZRUJrYUJBZ2FFQnNhQkFnY0VCMGFCQWdlRUI4YUJBZ2dFQ0VhQkFnaUVDTWFCQWdrRUNVYUJBZ21FQ2NxRkFBQ0JBWUlDZ3dPRUJJVUZoZ2FIQjRnSWlRbWoPd2F0Y2gtbmV4dC1mZWVk"
};
