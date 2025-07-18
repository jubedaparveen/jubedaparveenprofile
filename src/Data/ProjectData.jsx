import { GoDotFill } from "react-icons/go";
import { SiBootstrap } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { MdHtml } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";




const ProjectDetail = [
    {
        title: 'Javascript Project',
        Image : '/images/javascript-e-com.jpg',
        heading : ['e-commerce website', <IoLogoJavascript size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(JAVASCRIPT)', <MdHtml size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(HTML)', <IoLogoCss3 size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(CSS)'],
        linkgit : 'https://github.com/jubedaparveen/-Mini_Ecommerse-html-css-javascript-',
        linkweblive : '#',
        d1 : [<IoLogoJavascript size={15} className="inline me-1 text-red-400"/>, 'Javasript',  <GoDotFill className="inline me-1 ms-2"/>, 'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/>, 'e - commerce website'],
        parag : ["🚀 E-Commerce Website Project 🛒💻",<br/>,
                "Built with HTML, CSS, and JavaScript, this project dynamically fetches product categories from the DummyJSON API 📡 Features include a sleek UI, interactive icons 🎨, and seamless navigation for an engaging shopping experience! 🛍️✨"]
    },
    {
        title: 'Javascript Project',
        Image : '/images/javascript-e-comm.jpg',
        heading : ['e- commerce website', <SiBootstrap size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(Bootstrap)'],
        linkgit : 'https://github.com/jubedaparveen/ecomapi-bootstrip-javascript-/',
        linkweblive : 'https://ecomapi-bootstrip-javascript.vercel.app/',
        d1 : [<SiBootstrap size={15} className="inline me-1 text-red-400"/>, 'bootstrap', <IoLogoJavascript size={15} className="inline mx-2 text-red-400 " />, 'JAVASCRIPT',  <GoDotFill className="inline me-1 ms-2"/>, 'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/>, 'e- commerce website'],
        parag : ['🛍️ E-Commerce Website Project 🚀',<br/>,
                'Developed using Bootstrap and JavaScript, this project fetches product categories from the DummyJSON API 📡. It features a responsive design, stylish icons 🎨, and smooth navigation for an enhanced shopping experience! 🛒✨']
    },
    {
        title: 'Bootstrap Frontend Project',
        Image : '/images/blog.jpg',
        heading : ['blog website', <SiBootstrap size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(Bootstrap)'],
        linkgit : 'https://github.com/jubedaparveen/ZubiBlogs-UI-website',
        linkweblive : 'https://zubi-blogs-ui-website.vercel.app/index.html',
        d1 : [<SiBootstrap size={15} className="inline me-1 text-red-400"/>, 'bootstrap',  <GoDotFill className="inline me-1 ms-2"/>, 'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/>, 'blog website'],
        parag : 'The Zubi Blogs UI Website is a responsive blog platform built with Bootstrap, ensuring a modern and mobile-friendly design. It features a clean layout, smooth navigation, and well-structured content sections. The website is optimized for readability and performance, offering an engaging user experience. Explore it here: Zubi Blogs.'
    },
    {
        title: 'React.Js Full Stack Project',
        Image : '../images/traveller-ai.png',
        heading : ["TravellerPlan-AI travel planning app", <RiReactjsLine size={20} className="inline mx-2 text-red-400 border rounded-full"/>, '(React.JS)'],
        linkgit : 'https://github.com/jubedaparveen/travellerplan-ai',
        linkweblive : 'https://travellerplanai.vercel.app/',
        d1 : [<RiReactjsLine size={15} className="inline me-1 text-red-400"/>, 'React.JS', <GoDotFill className="inline me-1 ms-2"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/> ,'Tailwind CSS'],
        parag : "TravellerPlan-AI is a smart travel planning app built with React.js and Tailwind CSS. It uses Google's Gemini API to generate personalized AI-based itineraries based on user budget and dates."
    },
    {
        title: 'React.Js Full Stack Project',
        Image : '../images/vedshreee.png',
        heading : ['VedShree Website', <RiReactjsLine size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(Next JS)'],
        linkgit : 'https://github.com/jubedaparveen/vedshreesetup',
        linkweblive : 'https://vedshreesetup.vercel.app/',
        d1 : [<RiReactjsLine size={15} className="inline me-1 text-red-400"/>, 'React.JS', <GoDotFill className="inline me-1 ms-2"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/> ,'Tailwind CSS'],
        parag : 'The VedShree is a Ayurvedic Medicine E-Commerce site built using Next.js, Tailwind CSS, and the Shadcn UI library. It features a sleek, responsive design with smooth animations and modern styling. This project highlights your skills in crafting dynamic, visually appealing, and user-friendly web experiences. 🚀💼'
    },
    {
        title: 'Next.Js Frontend Project',
        Image : '/images/music-institute.jpg',
        heading : ['Music Institute website', <SiNextdotjs size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(Next JS)'],
        linkgit : 'https://github.com/jubedaparveen/MusicInstitute',
        linkweblive : 'https://music-institute-nnqv.vercel.app/',
        d1 : [<SiNextdotjs size={15} className="inline me-1 text-red-400"/>, 'Next JS', <GoDotFill className="inline me-1 ms-2"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/> ,'Tailwind CSS'],
        parag : 'The Music Institute Website is a beautifully designed platform built with Next.js, Tailwind CSS and aceternity ui library. It offers a modern, responsive UI with smooth navigation and engaging visuals. This project showcases your ability to create dynamic, user-friendly websites with optimized performance and sleek design. 🎵🚀'
    },
    {
        title: 'Next.Js MERN Full Stack Project( Working on it )',
        Image : '../images/ideazvault.png',
        heading : ['IdeazVault Blog website', <SiNextdotjs size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(Next JS)'],
        linkgit : 'https://github.com/jubedaparveen/ideazvault.com',
        linkweblive : 'https://ideazvault-com.vercel.app/',
        d1 : [<SiNextdotjs size={15} className="inline me-1 text-red-400"/>, 'Next JS', <GoDotFill className="inline me-1 ms-2"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/> ,'Tailwind CSS'],
        parag : 'The IdeazVault.com is a Tech Blog site built using Next.js, Tailwind CSS, and the Shadcn UI library. It features a sleek, responsive design with smooth animations and modern styling. This project highlights your skills in crafting dynamic, visually appealing, and user-friendly web experiences. 🚀💼'
    },
    {
        title: 'React.Js Frontend Project',
        Image : '../images/login.jpg',
        heading : ['Admin Panel',<RiReactjsLine size={20} className="inline mx-2 text-red-400 border rounded-full" />, '(React JS)'],
        linkgit : 'https://github.com/jubedaparveen/adminpanelsite',
        linkweblive : 'https://adminpenalsite.vercel.app/',
        d1 : [<RiReactjsLine size={15} className="inline me-1 text-red-400"/>, 'React JS', <GoDotFill className="inline me-1 ms-2"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/> ,'Tailwind CSS'],
        parag : 'The Admin Panel UI is your first custom-built dashboard, designed using React.js and Tailwind CSS. It features a clean, responsive interface for efficient management. This project highlights your frontend skills, focusing on usability, modern styling, and smooth navigation for seamless admin operations. 🚀'
    },
    {
        title: 'React.Js Frontend Project',
        Image : '../images/zometo.jpg',
        heading : ['Zometo UI Clone',  <RiReactjsLine size={20} className="inline mx-2 text-red-400 border rounded-full" />,  '(React JS)', ],
        linkgit : 'https://github.com/jubedaparveen/zomatouiclone',
        linkweblive : 'https://zomatouiclone.vercel.app/',
        d1 : [<RiReactjsLine size={15} className="inline me-1 text-red-400"/>, 'React JS', <GoDotFill className="inline me-1 ms-2"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-2"/> ,'Tailwind CSS'],
        parag : 'The Zomato UI Clone is a sleek and responsive web application built using React.js and Tailwind CSS. It replicates Zomato’s user interface, offering an intuitive design for exploring restaurants. With optimized styling and smooth navigation, this project showcases efficient frontend development skills using modern technologies for a seamless user experience. 🚀'
    },
    // {
    //     title: 'Blog Writing (Client Work)',
    //     Image : '../images/videocameras.png',
    //     heading : ['"Top 10 Best Selling Video Cameras"',   ],
    //     linkweblive : 'https://microadia.net/blog/top-10-best-selling-video-cameras-list-review-price/',    
    //     parag : 'I recently completed a content writing project for my client, resulting in the article titled "Top 10 Best Selling Video Cameras" on Microadia.net. This comprehensive guide offers readers detailed insights into the top video cameras, including key features, specifications, and pricing. The article also provides essential considerations for potential buyers, such as budget, intended use, image quality, audio capabilities, and necessary accessories. '
    // },
    // {
    //     title: 'Blog Writing (Client Work)',
    //     Image : '../images/UPS.png',
    //     heading : ['"10 Best UPS for PC in India"',   ],
    //     linkweblive : 'https://microadia.net/blog/10-best-ups-for-pc-in-india-2023/ ',    
    //     parag : 'I successfully completed a content writing project for my client on "10 Best UPS for PC in India" for Microadia.net. This detailed article provides an in-depth comparison of the top UPS models, highlighting their key features, specifications, pricing, and performance. It guides readers in selecting the best UPS for reliable power backup, ensuring data protection and uninterrupted workflow. The content is designed to help users make informed decisions based on their needs.'
    // },
    // {
    //     title: 'Blog Writing (Client Work)',
    //     Image : '../images/storyblok review.png',
    //     heading : ['"storyblok review"',   ],
    //     linkweblive : 'https://toolshippo.net/review/provider/storyblok-review-%f0%9f%98%84-%f0%9f%91%8c/ ',    
    //     parag : "I recently completed a content writing project for my client, resulting in the article titled 'Storyblok Review' on Toolshippo.net. This comprehensive review offers readers detailed insights into Storyblok, a headless content management system (CMS) designed to bridge the gap between traditional and modern CMS platforms. The article covers key aspects such as Storyblok's unique live editor, which allows users to customize, style, and layout content within a single dashboard, enhancing both usability and functionality. "
    // },
    // {
    //     title: 'Blog Writing (Client Work)',
    //     Image : '../images/Yext Review .png',
    //     heading : ['"Yext Review"',   ],
    //     linkweblive : 'https://toolshippo.net/review/provider/yext-review-%f0%9f%98%84-%f0%9f%91%8c/  ',    
    //     parag : "I recently completed a content writing project for my client, resulting in the article titled 'Yext Review' on Toolshippo.net. This comprehensive review provides an in-depth analysis of Yext, a digital knowledge management platform that enables businesses to manage and update their information across over 100 third-party sites, including Google, Apple Maps, Facebook, Bing, and Yahoo. The article highlights Yext's features, such as synchronization of business profiles, keyword optimization, and SEO tools designed to enhance online visibility and customer engagement. "
    // },
    // {
    //     title: 'Blog Writing (Client Work)',
    //     Image : '../images/duda review.png',
    //     heading : ['"duda review"',   ],
    //     linkweblive : 'https://toolshippo.net/review/provider/duda-review-%f0%9f%98%84-%f0%9f%91%8c/ ',    
    //     parag : "I recently completed a content writing project for my client, resulting in the article titled 'Duda Review' on Toolshippo.net. This comprehensive review offers readers detailed insights into Duda, a leading website builder platform. The article covers key aspects such as user interface, design flexibility, e-commerce capabilities, and pricing plans. It also evaluates Duda's performance in terms of SEO optimization, mobile responsiveness, and customer support. "
    // },
    
]

export default ProjectDetail;