import { getContext, setContext } from 'svelte';

type Theme = 'dark' | 'light';

class ThemeManager {
    current = $state<Theme>('light');

    constructor() {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme') as Theme;
            if (saved) {
                this.current = saved;
            }
        }
    }

    toggle() {
        this.current = this.current === 'dark' ? 'light' : 'dark';
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', this.current);
            this.apply();
        }
    }

    apply() {
        if (typeof window !== 'undefined') {
            if (this.current === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }
}

const THEME_KEY = Symbol('theme');

export function setTheme() {
    const manager = new ThemeManager();
    return setContext(THEME_KEY, manager);
}

export function getTheme() {
    return getContext<ThemeManager>(THEME_KEY);
}
