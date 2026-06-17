// Single source of truth for all page content.
// Edit here to update projects, stack, or links — the UI maps over these.

const IMG = "/images";

export type Project = {
  name: string;
  blurb: string;
  note?: string;
  image: string;
  alt: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const stack = ["C#", ".NET", "React", "Node", "Express"];

export const projects: Project[] = [
  {
    name: "discCanvas",
    blurb: "Find inspiration for your next album design.",
    image: `${IMG}/dc-covers.jpg`,
    alt: "Grid of album cover designs from discCanvas",
    tags: ["JavaScript", "jQuery"],
    links: [
      { label: "Demo", href: "https://leesyang.github.io/discCanvas/" },
      { label: "Code", href: "https://github.com/leesyang/discCanvas/" },
    ],
  },
  {
    name: "churchBand",
    blurb:
      "A platform for band leaders to connect with bandmates — recommend new songs and review previous sets.",
    note: "Deployed for use at a non-profit. Support and development is ongoing.",
    image: `${IMG}/cd-sets.jpg`,
    alt: "churchBand set list management interface",
    tags: [
      "JavaScript",
      "jQuery",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "AWS S3",
      "Bootstrap",
    ],
    links: [
      { label: "Demo", href: "https://churchbbanddemo.herokuapp.com/" },
      { label: "Code", href: "https://github.com/leesyang/churchBand" },
    ],
  },
  {
    name: "donePeriod",
    blurb:
      "A React/Redux project and issue-tracking app for your team. Stop worrying and get things done.",
    image: `${IMG}/dp-ticket.JPG`,
    alt: "donePeriod issue ticket view",
    tags: [
      "JavaScript",
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "AWS S3",
    ],
    links: [
      { label: "Demo", href: "https://doneperiodapp.herokuapp.com/" },
      { label: "Code", href: "https://github.com/leesyang/donePeriod-client" },
      {
        label: "Info",
        href: "https://drive.google.com/file/d/1Z1y51lGd2OyaMq_83yDwYGQRW5WL1Ksm/view?usp=sharing",
      },
    ],
  },
];

export const profileImage = `${IMG}/lee-sharp.jpeg`;
export const email = "leesyang@gmail.com";
export const resumeUrl =
  "https://leefiles6718.s3-us-west-1.amazonaws.com/Resume_LeeYang_20200729.pdf";

export const socials = [
  { label: "Email", href: "mailto:leesyang@gmail.com" },
  { label: "GitHub", href: "https://github.com/leesyang" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leeyanglinked/" },
  { label: "Twitter", href: "https://twitter.com/LeeSYang2" },
];
