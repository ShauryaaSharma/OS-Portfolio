import React, { useEffect, useState } from 'react'
import { navIcons, navLinks } from '../constants'
import dayjs from 'dayjs'
import useWindowStore from '../src/store/window'


const Navbar = () => {

    const { openWindow } = useWindowStore();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const stored = window.localStorage.getItem('theme');
        const initial = stored === 'light' || stored === 'dark' ? stored : 'dark';
        setTheme(initial);
        document.documentElement.dataset.theme = initial;
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.dataset.theme = next;
        window.localStorage.setItem('theme', next);
    };

  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="Logo" />
            <p className='font-bold'>Shaurya's Portfolio</p>

            <ul>
                {navLinks.map(({ id, name, type }) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
           <ul>
            {navIcons.map(({id, img}) => (
                <li
                    key={id}
                    onClick={id === 4 ? toggleTheme : undefined}
                >
                    <img src={img} className='icon-hover cursor-pointer' alt={`icon-${id}`} />
                </li>
            ))}
           </ul>
           <time>{dayjs().format("ddd MMM D h: mm A")}</time>
        </div>
    </nav>
  )
}

export default Navbar
