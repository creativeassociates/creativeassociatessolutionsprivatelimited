import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history;
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, [pathname]);

    // Increased animation for better visibility
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 50,  // Increased to 50 for better visibility
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,  // Slowed down for better visibility
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: -50,  // Increased for better exit animation visibility
            transition: {
                duration: 0.8,  // Increased duration for better visibility
                ease: "easeIn",
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                style={{ overflowX: "hidden" }} // Preventing horizontal scroll if animation pushes content
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
