const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const getCurrentOsTheme = () => (window?.matchMedia?.(MEDIA_QUERY)?.matches ? 'dark' : 'light');

let theme = $state('light');

export const get = () => theme;

export const set = (v) => (theme = v);

export const listenOsTheme = () => {
	if (!window.matchMedia || typeof window.matchMedia !== 'function') return;

	set(getCurrentOsTheme());

	window.matchMedia(MEDIA_QUERY).addEventListener('change', () => {
		set(getCurrentOsTheme());
	});
};
