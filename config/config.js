
import profile from './profile.jpg';
import {  faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "허 현",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hello!",
	description: "허현의 포트폴리오 사이트입니다",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		
	],
}

export const about = {
	title: "About me",
	description: [
		"중부대학교 정보보호학과 91813286 허현",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
		"When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "My goal",
			description: "frontend, machine running",
			icons: null,
		},
		{
			title: "hobby",
			description: "game, listen music",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Nextshop",
			description: "nextshop project",
			icons: [
				
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			]
		},
		{
			title: "factor",
			description: "bicycle project",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
				
			]
		},
		{
			title: "Portfolio",
			description: "my github",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Contact me",
	description: "저에게 궁금하신점있다면 이메일을 이용해주세요!",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:nsksjsk2@gmail.com",
			isPrimary: true,
		},
		{
			title: "first",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "hur hyeon portfolio site",
	
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hurhyeon",
	description: "중부대학교 정보호호학과 91813286 허현",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}