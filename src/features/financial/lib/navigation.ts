export const handleExternalExit = () => {
  if (typeof window !== 'undefined') {
    if (window.parent !== window) {
      window.history.back();
    } else {
      window.history.back();
    }
  }
};
