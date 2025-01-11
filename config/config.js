
import profile from './profile.jpg';
import {  faGithub, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
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
		"안녕하세요 저는 중부대학교에서 정보보학을 전공하고있는 허현이라고 합니다.",
		"앞으로 저의 다양한 프로젝트와 활동을 이 사이트에 업데이트할 예정입니다!",
	],
}

export const work = {
	title: "Team project",
	cards: [
		{
			title: "Factor",
			description: "bicycle project ",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hurhyeon/bicycle",
				},
				{
					icon:faInternetExplorer,
					link:"https://bicycle-opal.vercel.app/"	
				},
			]
		},
		
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
					link: "https://github.com/hurhyeon/next-ecommerce-",
				},
				{
					icon:faInternetExplorer,
					link:"https://next-ecommerce1234rewq.vercel.app/"	
				},
			]
		},
		{
			title: "was",
			description: "nextwas project",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hurhyeon/Nextshop",
				},
			
				{
					icon:faInternetExplorer,
					link:"https://nextshop-psi.vercel.app/"	
				},
				
			]
		},
		{
			title: "Portfolio",
			description: "my github",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hurhyeon",
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
	title: "hurhyeon portfolio site",
	
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hurhyeon",
	description: "중부대학교 정보호호학과 91813286 허현",
	cards: [
		{
			title: "My Website",
			link: "https://portfolio-seven-zeta-38.vercel.app/",
		},
		
		{
			title: "My GitHub",
			link: "https://github.com/hurhyeon",
		},
		{
			title: "My Facebook",
			link: "https://www.facebook.com/profile.php?id=100007428315047",
		},
		{
			title: "My Instagram",
			link: "https://www.instagram.com/guriguri_hyeon/",
		},
	]
}
