'use client';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import styles from './theme-toggle.module.css';

type ThemeToggleProps = {
  onToggleAction?: () => void;
  iconSize?: number;
};

export function ThemeToggle({ onToggleAction = () => {}, iconSize = 24 }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [isLightTheme, setIsLightTheme] = useState(resolvedTheme === 'light');

  const handleClick = () => {
    onToggleAction();
    const newTheme = isLightTheme ? 'dark' : 'light';
    if (!document.startViewTransition) {
      setTheme(newTheme);
    }
    document.startViewTransition(() => setTheme(newTheme));
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div className={`relative cursor-pointer w-5 h-5 ${styles.shadow}`} onClick={handleClick}>
      <FiMoon
        className={`absolute transition-opacity duration-300 ${isLightTheme ? 'opacity-0' : 'opacity-100'}`}
        size={iconSize}
      />
      <FiSun
        className={`absolute transition-opacity duration-300 ${isLightTheme ? 'opacity-100' : 'opacity-0'}`}
        size={iconSize}
      />
    </div>
  );
}
