
const navLinks = [
  { link: "/projects", name: "Projects" },
  { link: "/tech-stack", name: "Tech Stack" },
  { link: "/work-experience", name: "Work Experience" },
  { link: "/blog", name: "Blog" },
  { link: "/contact", name: "Contact" },
];

const specialLinks = [
  { link: "/media", name: "Media", icon: "🎬" },
  { link: "/cv.pdf", name: "CV Download", icon: "📄" },
];
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Completed Personal Projects" },
    { value: 15, suffix: "+", label: "Completed Client Projects" },
    { value: 30, suffix: "+", label: "Technologies used" },
  ];
  
  const expCards = [
    {
      review: "Beyond his technical skills, Carlos demonstrated strong leadership in managing the team, fostering best practices, and providing valuable mentorship. His efforts in collaborating with event organizers, managing the 'Non-Fungible Talks' event, and presenting at Fintech North significantly boosted our visibility and secured key partnerships. Carlos is a highly capable and dedicated professional who consistently delivered innovative solutions and drove the team towards success.",
      imgPath: "/images/krowdLogoT.png",
      logoPath: "/images/krowdLogo.png",
      title: "Founder",
      date: "November 2021 - January 2023",
      responsibilities: [
        "Developed and deployed a blockchain-powered ticketing platform using Solidity, ensuring tamper-proof event records and enhanced security.",
        "Engineered a scalable API system for recording and verifying Non-Fungible Tickets (NFTs), improving ticket authentication and preventing resales.",
        "Managed and led a team of developers, designers, and marketing professionals to deliver blockchain-based solutions on time and within budget.",
        "Collaborated with event organizers to streamline ticket validation using QR codes linked to blockchain-verified tickets.",
        "Managed in-person event “Non-Fungible Talks” (March 2022) in Manchester, showcasing innovative ticketing solutions and driving industry interest.",
        "Delivered a presentation at Fintech North Manchester (November 2022), sharing insights on the role of blockchain in ticketing and event management.",
        "Secured partnerships through AccelerateME (University of Manchester) and Exchange Enterprise City, leveraging growth opportunities and industry mentorship.",
        "Oversaw technical development, leading cross-functional teams and ensuring successful delivery of customer-centric blockchain solutions."
      ],
    },
    {
      review: "It's been a pleasure working with Carlos. His technical contributions have been invaluable across our stack. He significantly enhanced our platform's performance and user experience by developing new features using React and Next.js, while also improving backend scalability and reliability with Node.js, Docker, and MongoDB microservices. Carlos's focus on stability through robust CI/CD pipelines, automated testing, and real-time monitoring with Datadog has been critical in reducing production issues.",
      imgPath: "/images/dtnWhite.png",
      logoPath: "/images/dtnLogo.png",
      title: "Software Engineer II",
      date: "March 2023 - Present",
      responsibilities: [
        "Developed and maintained new features for different company products frontend using React and Next.js, enhancing performance and user experience.",
        "Improved backend services using microservices architecture with Node.js, Docker, and MongoDB, boosting system scalability and reliability.",
        "Strengthened platform stability by implementing robust CI/CD pipelines and infrastructure management through Terraform and AWS.",
        "Designed and executed automated testing frameworks using Jest and React Testing Library, increasing test coverage and code reliability.",
        "Integrated real-time monitoring and alerting with Datadog, reducing production incidents by proactively addressing potential failures.",
        "Collaborated with cross-functional teams—including product, QA, and DevOps teams—to prioritize feature development and ensure smooth deployments.",
        "Spearheaded an initiative to streamline and automate the process of building new UIs by integrating Storybook and GitHub Copilot, reducing development time and improving component reusability.",
        "Facilitated effective communication between engineering and business stakeholders, improving alignment on technical solutions and business goals.",
        "Explored mobile development opportunities using Flutter and React Native to expand product offerings across multiple platforms."
      ],
    },
    {
      review: "Carlos has a truly streamlined process that made the entire website development project incredibly efficient. Communication was clear, milestones were hit on time, and the project was delivered exactly when promised. The focus on efficiency didn't compromise quality at all - I am thrilled with the final website. Highly recommend his services!",
      imgPath: "/images/casancamlogo.jpg",
      logoPath: "/images/casancamlogo.jpg",
      title: "CasancamDev",
      date: "October 2024 - Present",
      responsibilities: [
        "Successfully balanced time between client work, content creation, and business management.",
        "Consistently produced high-quality, engaging content on a regular schedule.",
        "Generated positive feedback and interaction in the comments section, building a community.",
        "Successfully launched +15 number of client websites, meeting or exceeding client expectations.",
        "Received positive testimonials from +15 satisfied website clients.",
        "Implemented advanced features on client sites, such as custom integrations, complex animations, or performance optimizations.",
        "Established a streamlined workflow for client projects, improving efficiency and delivery times."
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      link:"https://www.instagram.com/casancam/"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      link:"https://www.linkedin.com/in/casancam/"
    },
    {
      name: "github",
      imgPath: "/images/github.png",
      link:"https://github.com/casancam"
    },
  ];
  
  export {
    words,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    navLinks,
    specialLinks,
  };