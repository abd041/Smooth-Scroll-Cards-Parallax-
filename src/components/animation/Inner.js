import React from "react";
import { motion } from "framer-motion";
import "./Inner.css";

export const Inner = ({ children }) => {
    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            transition: { duration: 0.5 }, // Set transition duration for smooth animation
        };
    };

    const opacity = {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        exit: {
            opacity: 0, // Fade out on exit
        },
    };

    const slide = {
        initial: {
            y: "100vh"
        },
        enter: {
            y: "100vh",
            transition: {
                duration: 2
            }
        },
        exit: {
            y: "-100vh",

            transition: {
                duration: 2
            }

        },
    };

    return (
        <div className="inner-wrapper">
            <motion.div {...anim(slide)} className="inner-slider" />
            <motion.div {...anim(opacity)}>{children}</motion.div>
        </div>
    );
};
