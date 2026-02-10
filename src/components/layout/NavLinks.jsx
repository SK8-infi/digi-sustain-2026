
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
    // --- DESKTOP LAYOUT (Standard List - No Dropdown) ---
    return (
        <div className={`flex items-center gap-4 xl:gap-6 whitespace-nowrap overflow-visible ${className}`}>
            {NAV_ITEMS.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleSmoothScrollNav(e, item.path)}
                    className={({ isActive }) =>
                        `text-[10px] xl:text-xs font-medium tracking-wide uppercase transition-all duration-200 ${itemClassName}`
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
        </div>
    );
}
