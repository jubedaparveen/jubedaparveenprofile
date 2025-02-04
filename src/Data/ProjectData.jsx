import { GoDotFill } from "react-icons/go";
import { SiBootstrap } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

const ProjectDetail = [
    {
        Image : '/images/blog.jpg',
        heading : 'blog website',
        linkgit : 'https://github.com/jubedaparveen/ZubiBlogs-UI-website',
        linkweblive : 'https://zubi-blogs-ui-website.vercel.app/index.html',
        d1 : [<SiBootstrap size={20} className="inline me-2 "/>,'bootstrap', <GoDotFill className="inline me-1 ms-3"/>, 'ux / ui Design', <GoDotFill className="inline me-1 ms-3"/>, 'blog website'],
        parag : 'The Zubi Blogs UI Website is a responsive blog platform built with Bootstrap, ensuring a modern and mobile-friendly design. It features a clean layout, smooth navigation, and well-structured content sections. The website is optimized for readability and performance, offering an engaging user experience. Explore it here: Zubi Blogs.'
    },
    {
        Image : '/images/music-institute.jpg',
        heading : 'Music Institute website',
        linkgit : 'https://github.com/jubedaparveen/MusicInstitute',
        linkweblive : 'https://music-institute-nnqv.vercel.app/',
        d1 : [<SiNextdotjs size={20} className="inline me-1"/>, 'Next JS', <GoDotFill className="inline me-1 ms-3"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-3"/> ,'Tailwind CSS'],
        parag : 'The Music Institute Website is a beautifully designed platform built with Next.js, Tailwind CSS and aceternity ui library. It offers a modern, responsive UI with smooth navigation and engaging visuals. This project showcases your ability to create dynamic, user-friendly websites with optimized performance and sleek design. 🎵🚀'
    },
    {
        Image : '../images/resumeweb.jpg',
        heading : 'Profile website',
        linkgit : '',
        linkweblive : '',
        d1 : [<SiNextdotjs size={20} className="inline me-1"/>, 'Next JS', <GoDotFill className="inline me-1 ms-3"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-3"/> ,'Tailwind CSS'],
        parag : 'This is a 5-page blog website built using Bootstrap, featuring a responsive design and smooth navigation. I also designed the logo, adding a personal touch to the site’s branding, making it visually appealing and user-friendly across all devices.'
    },
    {
        Image : '../images/login.jpg',
        heading : 'React Admin Panel',
        linkgit : 'https://github.com/jubedaparveen/adminpanelsite',
        linkweblive : 'https://adminpenalsite.vercel.app/',
        d1 : [<RiReactjsLine size={20} className="inline me-1"/>, 'React JS', <GoDotFill className="inline me-1 ms-3"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-3"/> ,'Tailwind CSS'],
        parag : 'The Admin Panel UI is your first custom-built dashboard, designed using React.js and Tailwind CSS. It features a clean, responsive interface for efficient management. This project highlights your frontend skills, focusing on usability, modern styling, and smooth navigation for seamless admin operations. 🚀'
    },
    {
        Image : '../images/zometo.jpg',
        heading : 'Zometo UI Clone',
        linkgit : 'https://github.com/jubedaparveen/zomatouiclone',
        linkweblive : 'https://zomatouiclone.vercel.app/',
        d1 : [<RiReactjsLine size={20} className="inline me-1"/>, 'React JS', <GoDotFill className="inline me-1 ms-3"/> ,'ux / ui Design', <GoDotFill className="inline me-1 ms-3"/> ,'Tailwind CSS'],
        parag : 'The Zomato UI Clone is a sleek and responsive web application built using React.js and Tailwind CSS. It replicates Zomato’s user interface, offering an intuitive design for exploring restaurants. With optimized styling and smooth navigation, this project showcases efficient frontend development skills using modern technologies for a seamless user experience. 🚀'
    },
]

export default ProjectDetail;