// Define the type for the redirects object
type Redirects = {
	[key: string]: string;
};

export const redirects: Redirects = {
	'/app': 'https://omnipad-web.vercel.app',
	'/github': 'https://omnipad-home.vercel.app/github',
	'/twitter': 'https://omnipad-home.vercel.app/twitter',
	'/sponsor': 'https://omnipad-home.vercel.app/sponsor',
	'/tweet': 'https://omnipad-home.vercel.app/tweet'
};
