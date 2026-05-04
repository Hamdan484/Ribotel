import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/** Router `Link` with Framer Motion props — avoids broken clicks from nesting `motion.*` inside `<Link>`. */
export const MotionLink = motion(Link);
