import { useState, useEffect, useRef } from 'react';

const DESIGN_WIDTH = 1536; // Exact match to Tailwind 2xl breakpoint

export default function ScaleWrapper({ children }) {
    const [scale, setScale] = useState(1);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            // Use clientWidth to exclude scrollbar width for more accurate scaling
            const currentWidth = document.documentElement.clientWidth || window.innerWidth;
            const newScale = currentWidth / DESIGN_WIDTH;
            setScale(newScale);
        };

        handleResize(); // Initial calculation
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Measure content height to adjust container height
    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContentHeight(entry.contentRect.height);
            }
        });

        observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, [children]); // Re-observe if children change significantly enough to potentially remount ref? (Unlikely but safe)

    return (
        <div
            style={{
                width: '100%',
                height: `${contentHeight * scale}px`, // Force container to match visually scaled height
                overflow: 'hidden' // Hide any potential overflow from the transform source
            }}
        >
            <div
                ref={contentRef}
                style={{
                    width: `${DESIGN_WIDTH}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    // We don't need absolute positioning if we just let it sit there, 
                    // but we need to ensure it doesn't collapse.
                }}
            >
                {children}
            </div>
        </div>
    );
}
