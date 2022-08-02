import { useEffect, useState, useCallback } from 'react';

const useDarkMode = () => {
  let [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      localStorage.setItem('eladh-theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('eladh-theme', 'light');
      setTheme('light');
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem('eladh-theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
