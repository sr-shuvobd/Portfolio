export const projects = [
  {
    id: "nexamart",
    title: "NexaMart",
    tagline: "A full-featured multi-vendor e-commerce marketplace platform built with MERN stack & Next.js.",
    shortDescription: "Comprehensive e-commerce marketplace featuring multi-role dashboards, BDT payment gateway integration, seller inventory analytics, and order tracking.",
    professionalDescription: "NexaMart is an enterprise-grade e-commerce marketplace engineered to deliver a seamless multi-vendor shopping experience. Built with role-based access for Buyers, Sellers, and Admins, it incorporates real-time analytics, automated inventory updates, localized BDT pricing calculations, and secure payment processing. The application addresses high-concurrency seller operations while offering buyers an interactive cart, wishlist, and real-time order tracking system.",
    image: "/images/projects/NexaMart.png",
    banner: "/images/projects/NexaMart.png",
    tags: ["Next.js", "React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Recharts", "Stripe API"],
    liveUrl: "https://nexa-mart-theta.vercel.app",
    githubClient: "https://github.com/sr-shuvobd/NexaMart",
    githubServer: "https://github.com/sr-shuvobd/NexaMart_Server",
    keyFeatures: [
      "Multi-Role Dashboards: Dedicated interfaces for Buyers (orders, wishlist), Sellers (inventory management, revenue analytics), and Admins (user control, seller approval).",
      "Secure JWT Authentication: Granular role-based route authorization protecting dynamic buyer, seller, and admin views.",
      "Localized Checkout & BDT Pricing: Seamless Bangladeshi Taka currency handling and payment gateway integration.",
      "Interactive Cart & Wishlist: Real-time cart calculations, coupon applications, and persistent shopping states.",
      "Sales & Inventory Analytics: Visual charting and automated reports to help sellers monitor performance and product metrics."
    ],
    challenges: "Engineered robust multi-role authorization guards across both client and server routes. Solved state synchronization challenges for concurrent inventory updates during high-traffic checkout events and handled cross-origin cookie authentication seamlessly.",
    futureImprovements: "Planned development of a native React Native mobile companion app for seller push notifications, and integration of AI-driven personalized product recommendation algorithms based on user browsing history.",
    responsiveDesign: "Designed with a mobile-first approach, using fluid CSS grids, touch-friendly product cards, collapsible filter panels, and dynamic navigation drawers for flawless performance on mobile, tablet, and desktop screens."
  },
  {
    id: "nexthirebd",
    title: "NextHireBD",
    tagline: "A modern job portal & recruitment platform tailored for job seekers and employers in Bangladesh.",
    shortDescription: "Streamlined job search platform connecting active candidates with top recruiters through real-time job listings, candidate application tracking, and recruiter portals.",
    professionalDescription: "NextHireBD is a comprehensive job seeking and candidate recruitment platform specifically built to empower the career ecosystem in Bangladesh. It bridges the gap between job seekers and hiring managers through advanced multi-criteria job filtering, instant candidate resume submissions, real-time application tracking, and an intuitive recruiter management portal. The platform incorporates optimized global loading states to ensure zero latency user transitions.",
    image: "/images/projects/NextHireBD.png",
    banner: "/images/projects/NextHireBD.png",
    tags: ["Next.js 16", "React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "JWT Auth", "Axios"],
    liveUrl: "https://next-hire-bd.vercel.app",
    githubClient: "https://github.com/sr-shuvobd/NextHireBD",
    githubServer: "https://github.com/sr-shuvobd/NextHireBD_Server",
    keyFeatures: [
      "Interactive Job Search Engine: Dynamic search filtering by industry, experience level, salary range, and work arrangement (Remote, On-site, Hybrid).",
      "Recruiter Portal: Instant job posting tools, candidate application tracking system (ATS), applicant status updates, and recruiter profile customization.",
      "Applicant Dashboard: Real-time application tracking, resume management, and status updates on submitted applications.",
      "Global State & UX Indicators: Reusable global loading overlays and optimistic updates providing smooth, latency-free site transitions.",
      "Role-Based Security: Secure JWT-backed session authentication ensuring candidate and recruiter data privacy."
    ],
    challenges: "Maintained environment variable stability across Vercel cloud deployments and external REST APIs, while engineering smooth global loading states that handle asynchronous multi-filter database queries without flickering.",
    futureImprovements: "Upcoming features include AI-driven resume parsing for instant applicant matching scores, integrated candidate video interview scheduling, and real-time candidate-recruiter messaging.",
    responsiveDesign: "Constructed with adaptive responsive design, featuring collapsible filter menus, flexible job cards, and mobile-friendly application forms optimized for portrait and landscape viewports."
  },
  {
    id: "cooksphere",
    title: "CookSphere",
    tagline: "An interactive culinary recipe sharing community platform.",
    shortDescription: "Community-driven culinary platform where food enthusiasts discover recipes, share dish guides, rate culinary creations, and manage content via dynamic sidebars.",
    professionalDescription: "CookSphere is a feature-rich social recipe platform for food lovers and culinary creators. Designed to foster a vibrant community, users can explore curated global recipes, publish original culinary guides with step-by-step instructions, rate and comment on community dishes, and organize their favorite recipes. The application boasts dynamic, session-aware admin and user sidebars with dynamic drawer navigation.",
    image: "/images/projects/CookSphere.png",
    banner: "/images/projects/CookSphere.png",
    tags: ["Next.js", "React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "DaisyUI", "Framer Motion", "JWT Auth"],
    liveUrl: "https://cooksphere-phi.vercel.app/",
    githubClient: "https://github.com/sr-shuvobd/cooksphere",
    githubServer: "https://github.com/sr-shuvobd/cooksphere-server",
    keyFeatures: [
      "Recipe Discovery & Publishing: Rich recipe cards complete with prep time, difficulty levels, ingredient lists, and step-by-step instructions.",
      "Dynamic Responsive Sidebars: Adaptive drawer sidebars for Admin and User panels with full touch gesture support for mobile browsing.",
      "Interactive Reviews & Ratings: Community scoring system allowing users to review recipes, post feedback, and bookmark top choices.",
      "Admin Moderation & Dashboard: Comprehensive tools for recipe validation, user role management, platform reports, and content oversight.",
      "Session-Sync Authentication: Robust CORS and cookie-domain management enabling seamless authorization between Vercel host and Express REST backend."
    ],
    challenges: "Resolved complex cross-origin session authentication loops between Vercel production hosting and Express backend servers, while building responsive slide-out sidebars with fluid drawer transitions.",
    futureImprovements: "Plans to introduce an automated meal planner with auto-generated grocery shopping lists, nutrition tracking analytics, and interactive video recipe hosting.",
    responsiveDesign: "Fully responsive user interface with touch-optimized slide-out sidebars, dynamic photo galleries, and adaptive typography tailored for smartphones, tablets, and desktop devices."
  }
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id || project.id.toLowerCase() === id?.toLowerCase());
}
