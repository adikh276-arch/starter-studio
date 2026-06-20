export const handlePlatformExit = () => {
  if (typeof window === 'undefined') return;
  window.history.back();
};

export const withLang = (url: string) => {
  if (typeof window === 'undefined' || !url) return url;
  const lang = new URLSearchParams(window.location.search).get('lang');
  if (!lang) return url;
  
  try {
    const isAbsolute = url.startsWith('http://') || url.startsWith('https://');
    const urlObj = new URL(url, isAbsolute ? undefined : window.location.origin);
    urlObj.searchParams.set('lang', lang);
    return isAbsolute ? urlObj.toString() : urlObj.pathname + urlObj.search + urlObj.hash;
  } catch (e) {
    return url;
  }
};
