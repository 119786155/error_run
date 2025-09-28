const MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const getTheme = () => window?.matchMedia?.(MEDIA_QUERY)?.matches ? 'dark' : 'light';

export const setTheme = () => document.documentElement.dataset.theme = getTheme();

export const listenOsThemeChange = () => {
	if (!window.matchMedia || typeof window.matchMedia !== 'function') return;

	// init theme
	setTheme();

	window.matchMedia(MEDIA_QUERY).addEventListener('change', (event) => {
		setTheme();
	});
};
