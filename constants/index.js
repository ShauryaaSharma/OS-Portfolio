const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Kotlin"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "PHP"],
  },
  {
    category: "ML & DL",
    items: ["Tensor Flow", "PyTorch", "Hugging Face"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ShauryaaSharma",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://shauryasharma.vercel.app/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/ShauryaSharma27",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/shaurya-sharmaa/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    img: "/images/gal4.png",
  },
  {
    id: 4,
    img: "/images/gal3.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "$pendr - AI Optimized budget allocator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "$pendr.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed an AI-powered marketing budget allocator, $pendr, which automatically distributed budget across 12+ channels and increased allocation accuracy by 10% based on company data.",
            "Reengineered a strategy planner enabling companies to generate personalized marketing plans within 60 seconds, and compare previous budgets to newly optimized recommendations.",
            "Implemented an ad simulation feature allowing users to preview how ads appear across 10+ real app & platform mockups, reducing design iteration time by 30%",
            "Created an AI-powered tool to assess ad content against 7+ criteria including copy quality and CTA strength, resulting in a measurable 0.5% improvement in ad click-through rates",
          ],
        },
        {
          id: 2,
          name: "$pendr.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://pendr-seven.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "$pendr.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/spendr.png",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/ShauryaaSharma/-pendr",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "ERP Portal",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "ERP Portal.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Engineered a full-stack academic ERP platform utilized by 35+ departments to manage 79+ KPIs tied to QS & NIRF ranking metrics, replacing manual spreadsheet workflows.",
            "Designed 4 role-based portals (QOAC, HOD, Faculty Coordinator, Faculty) enabling structured KPI assignment, data entry, and review, improving KPI submission turnaround time by 60%",
            "Crafted automated report generation module within the KPI system, slashing report creation time from 4 hours to under 30 minutes; enabled faster decision-making based on real-time data",
            "This is a project which is actually being used by my college for handeling all the admin work or the college along with distribution of work among the faculty and staff.",
          ],
        },
        {
          id: 2,
          name: "ERP-web.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://erp-sys-web.vercel.app/auth?callbackUrl=https%3A%2F%2Ferp-sys-web.vercel.app%2F",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/ERP-KPI.png",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/ERP-MUJ/ERP-SYS",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Brain Tumor Segmentation",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Brain Tumor Segmentation.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A major challenge in the field of brain tumor detection and segmentation is determining the extent of the tumor. When magnetic resonance imaging or MRI technique was invented, it emerged as the forefront diagnostic tool for brain tumor detection. The biggest plus point of MRI was that it did not use ionizing radiation. This made it a very safe imaging technique. In the initial times MRI scans of the brain were manually segmented, i.e. a trained practitioner manually outlines the tumor region. Manual segmentation is an extremely time consuming task, and the conclusion derived from the scans is almost entirely dependent on the operator's experience. This paper reviews numerous studies and highlights Deep learning methods and architectures that work in a more efficient, robust and precise manner when compared to manual segmentation. This paper emphasizes the Convolutional Neural Network method, such as nnU-Net and 3D-Unet, using the BraTS dataset from 2018, 2020, and 2021.",
          ],
        },
        {
          id: 2,
          name: "CRC Press.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://docs.google.com/document/d/1jLEH6-66uBGHZGF-TCJCDQ9LKJjlSsCS/edit?usp=sharing&ouid=114833970059900872794&rtpof=true&sd=true",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "CNN Architecture.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/CNNArch.png",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/shaurya.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/shaurya-2.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/shaurya-3.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/shaurya-4.png",
      description: [
        "Hey! I’m Shaurya 👋, a developer and a researcher who enjoys building sleek, interactive websites along with researching on Machine and Deep Learning in the field of Medical Imaging.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, planning how I want my life to be, or impulse-buying coffee and shakes I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };