export type Social = {
  title: string;
  url: string;
}

export type Project = {
  title: string;
	body: string;
	href: string;
	cover: string;
	tags: string;
}

export type portfolioTypes = {
  avatar: string;
	fullName: string;
	position: string;
	bio: string;
	social: Social[];
	projects: Project[];
}