export const siteSettings = {
	name: "ROYAL Perfume",
	description:
		"Premium perfume e-commerce store offering designer and niche fragrances for men, women, and unisex.",
	author: {
		name: "ROYAL Perfume",
		websiteUrl: "https://royalperfume.com",
		address: "",
	},
	logo: {
		url: "/Royal perfume logo.jpg",
		alt: "ROYAL Perfume",
		href: "/",
		width: 120,
		height: 80,
	},
	defaultLanguage: "en",
	currencyCode: "USD",
	site_header: {
		menu: [
			{
				id: 1,
				path: "/",
				label: "Home",
			},
			{
				id: 2,
				path: "/search",
				label: "Shop All",
			},
			{
				id: 3,
				path: "/category/men",
				label: "Men's Perfumes",
			},
			{
				id: 4,
				path: "/category/women",
				label: "Women's Perfumes",
			},
			{
				id: 5,
				path: "/category/unisex",
				label: "Unisex",
			},
			{
				id: 6,
				path: "/brands",
				label: "Brands",
				subMenu: [
					{
						id: 1,
						path: "/search?brand=dior",
						label: "Dior",
					},
					{
						id: 2,
						path: "/search?brand=chanel",
						label: "CHANEL",
					},
					{
						id: 3,
						path: "/search?brand=giorgio-armani",
						label: "Giorgio Armani",
					},
					{
						id: 4,
						path: "/search?brand=tom-ford",
						label: "Tom Ford",
					},
					{
						id: 5,
						path: "/search?brand=calvin-klein",
						label: "Calvin Klein",
					},
					{
						id: 6,
						path: "/search?brand=creed",
						label: "Creed",
					},
					{
						id: 7,
						path: "/search?brand=prada",
						label: "Prada",
					},
					{
						id: 8,
						path: "/search?brand=valentino",
						label: "Valentino",
					},
					{
						id: 9,
						path: "/search?brand=coach",
						label: "Coach",
					},
					{
						id: 10,
						path: "/search?brand=carolina-herrera",
						label: "Carolina Herrera",
					},
					{
						id: 11,
						path: "/search?brand=azzaro",
						label: "Azzaro",
					},
				],
			},
			{
				id: 7,
				path: "/gift-sets",
				label: "Gift Sets",
			},
			{
				id: 8,
				path: "/contact-us",
				label: "Contact",
			},
		],
		mobileMenu: [
			{
				id: 1,
				path: "/",
				label: "Home",
			},
			{
				id: 2,
				path: "/search",
				label: "Shop All",
			},
			{
				id: 3,
				path: "/category/men",
				label: "Men's Perfumes",
			},
			{
				id: 4,
				path: "/category/women",
				label: "Women's Perfumes",
			},
			{
				id: 5,
				path: "/category/unisex",
				label: "Unisex",
			},
			{
				id: 6,
				path: "/brands",
				label: "Brands",
			},
			{
				id: 7,
				path: "/gift-sets",
				label: "Gift Sets",
			},
			{
				id: 8,
				path: "/my-account",
				label: "My Account",
			},
			{
				id: 9,
				path: "/contact-us",
				label: "Contact",
			},
		],
		languageMenu: [], // Language switcher removed
		pagesMenu: [
			{
				id: 1,
				path: "/search",
				label: "menu-best-deals",
			},
			{
				id: 2,
				path: "/about-us",
				label: "menu-about-us",
			},
			{
				id: 3,
				path: "/contact-us",
				label: "menu-contact-us",
			},
			{
				id: 4,
				path: "/faq",
				label: "menu-faq",
			},
		],
	},
};
