"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🧠 Optional: Scroll to top on route change (prevents white gap)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className="relative"
        initial={{ opacity: 0, x: 80 }}   // slide in from right
        animate={{ opacity: 1, x: 0 }}    // enter
        exit={{ opacity: 1, x: -80 }}     // exit left
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{ minHeight: "100vh" }}     // prevents white space
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
