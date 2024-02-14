export interface SocialNetwork {
  id: number;
  user: string;
  name: string;
  logo: string;
  followers: number;
  newFollowers: number;
}

export interface Content {
  id: number;
  name: string;
  count: number;
  social: string;
  logo: string;
  percent: number;
}

export const data: SocialNetwork[] = [
  {
    id: 1,
    user: "@eugenio0598",
    name: "Facebook",
    logo: "/assets/icon-facebook.svg",
    followers: 1987,
    newFollowers: 12,
  },
  {
    id: 2,
    user: "@eugenio0598",
    name: "Twitter",
    logo: "/assets/icon-twitter.svg",
    followers: 1044,
    newFollowers: 99,
  },
  {
    id: 3,
    user: "@eugenio0598",
    name: "Instagram",
    logo: "/assets/icon-instagram.svg",
    followers: 11000,
    newFollowers: 1099,
  },
  {
    id: 4,
    user: "@eugenio0598",
    name: "Youtube",
    logo: "/assets/icon-youtube.svg",
    followers: 8239,
    newFollowers: -144,
  },
];

export const content: Content[] = [
  {
    id: 1,
    name: "Page Views",
    count: 87,
    logo: "/assets/icon-facebook.svg",
    social: "Facebook",
    percent: 2,
  },

  {
    id: 2,
    name: "Likes",
    count: 52,
    logo: "/assets/icon-facebook.svg",
    social: "Facebook",
    percent: -3,
  },
  {
    id: 3,
    name: "Likes",
    count: 5462,
    logo: "/assets/icon-instagram.svg",
    social: "Instagram",
    percent: 22.57,
  },

  {
    id: 4,
    name: "Profile Views",
    count: 52000,
    logo: "/assets/icon-instagram.svg",
    social: "Instagram",
    percent: 13.75,
  },
  {
    id: 5,
    name: "Retweets",
    count: 117,
    logo: "/assets/icon-twitter.svg",
    social: "Twitter",
    percent: 3.03,
  },
  {
    id: 6,
    name: "Likes",
    count: 117,
    logo: "/assets/icon-twitter.svg",
    social: "Twitter",
    percent: 5.53,
  },
  {
    id: 7,
    name: "Likes",
    count: 117,
    logo: "/assets/icon-youtube.svg",
    social: "Youtube",
    percent: -19,
  },
  {
    id: 8,
    name: "Total Views",
    count: 1407,
    logo: "/assets/icon-youtube.svg",
    social: "Youtube",
    percent: -12,
  },
];
