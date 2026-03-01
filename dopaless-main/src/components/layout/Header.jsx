import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const navLinks = [
    { to: '/', label: 'Trang Chủ' },
    { to: '/gioi-thieu', label: 'Giới Thiệu' },
    { to: '/bai-test', label: 'Bài Test' },
    { to: '/tin-tuc', label: 'Tin Tức' },
    { to: '/lien-he', label: 'Liên Hệ' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    const handleNavClick = () => setMenuOpen(false);

    return (
        <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
            <Link to="/" className="nav-logo">
                🧠 Dopaless
            </Link>

            <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
                {navLinks.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            end={to === '/'}
                            onClick={handleNavClick}
                            className={({ isActive }) => isActive ? 'nav-link-active' : ''}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="nav-right">
                <Link to="/bai-test" className="btn-nav">
                    Bắt đầu ngay →
                </Link>

                <button
                    className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
}
