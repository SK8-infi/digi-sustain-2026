
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/routes';

export default function NavLinks({
    className = "",
    itemClassName = "",
    activeColor = "#1a4731",
    inactiveColor = "#525252",
    onItemClick,
    enableAnimation = false,
    layout = "desktop" // "desktop" | "mobile"
}) {
    const navigate = useNavigate();
    const location = useLocation();

    // Check if any item in the 'More' dropdown is active (Desktop only)
    const isMoreActive = NAV_ITEMS.slice(7).some(item => location.pathname === item.path);

    const handleSmoothScrollNav = (e, path) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate(path);
            if (onItemClick) onItemClick();
        }, 300);
    };

    // --- MOBILE LAYOUT (Slider, Flat List) ---
    if (layout === "mobile") {
        return (
            <div className={`flex items-center gap-6 overflow-x-auto hide-scrollbar whitespace-nowrap py-2 w-full ${className}`}>
                {NAV_ITEMS.map((item, index) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={(e) => handleSmoothScrollNav(e, item.path)}
                        className={({ isActive }) =>
                            `text-xs font-medium tracking-wide uppercase transition-all duration-200 flex-shrink-0 ${itemClassName} ${enableAnimation ? 'animate-float-down' : ''}`
                        }
                        style={({ isActive }) => ({
                            color: isActive ? activeColor : inactiveColor,
                            fontWeight: isActive ? '700' : '500',
                            borderBottom: isActive ? `2px solid ${activeColor}` : '2px solid transparent',
                            paddingBottom: '2px',
                            animationDelay: enableAnimation ? `${index * 100}ms` : '0ms'
                        })}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        );
    }

    // --- DESKTOP LAYOUT (Dropdown for extra items) ---
    return (
        <div className={`flex items-center gap-6 ${className}`}>
            {NAV_ITEMS.slice(0, 7).map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleSmoothScrollNav(e, item.path)}
                    className={({ isActive }) =>
                        `text-xs font-medium tracking-wide uppercase transition-all duration-200 ${itemClassName}`
                    }
                    style={({ isActive }) => ({
                        color: isActive ? activeColor : inactiveColor,
                        fontWeight: isActive ? '700' : '500',
                        borderBottom: isActive ? `2px solid ${activeColor}` : '2px solid transparent',
                        paddingBottom: '2px'
                    })}
                >
                    {item.label}
                </NavLink>
            ))}

            {/* More dropdown */}
            <div className="relative group h-full flex items-center">
                <button
                    style={{
                        color: isMoreActive ? activeColor : inactiveColor,
                        fontWeight: isMoreActive ? '700' : '500',
                        borderBottom: isMoreActive ? `2px solid ${activeColor}` : '2px solid transparent',
                        paddingBottom: '2px'
                    }}
                    className={`text-xs font-medium tracking-wide uppercase transition-all duration-200 flex items-center gap-1 hover:opacity-80 ${itemClassName}`}
                >
                    More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {NAV_ITEMS.slice(7).map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={(e) => handleSmoothScrollNav(e, item.path)}
                            className="block px-4 py-2 text-[13px] uppercase tracking-wider transition-colors"
                            style={({ isActive }) => ({
                                color: isActive ? activeColor : inactiveColor,
                                fontWeight: isActive ? '700' : '500',
                                backgroundColor: isActive ? '#f0f5f2' : 'transparent'
                            })}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
