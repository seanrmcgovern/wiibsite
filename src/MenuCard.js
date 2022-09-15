import { motion } from "framer-motion";
import React, { useState, Fragment } from "react";
import "./card.css";

function MenuCard({ value, id }) {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      {open ? (
        <motion.div
          onClick={() => setOpen(false)}
          className="expanded-card"
          layoutId={`expandable-card-${id}`}
          style={{ background: value, zIndex: 2 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <motion.h2
            className="expanded-card-h"
            layoutId={`expandable-card-h-${id}`}
          >
            Expanded {value}
          </motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquam molestiae ratione sint magnam sequi fugiat u llam earum
            distinctio fuga iure, ad odit repudiandae modi est alias ipsum
            aperiam. Culpa?
          </p>
        </motion.div>
      ) : (
        <Fragment>
          <motion.div
            onClick={() => setOpen(true)}
            className="normal-card"
            layoutId={`expandable-card-${id}`}
            style={{ background: value }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <motion.h1 layoutId={`expandable-card-h-${id}`}>{value}</motion.h1>
          </motion.div>
          {/* <svg
            style={{
              visibility: "hidden",
              width: 0,
              height: 0,
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
            }}
          >
            <defs>
              <filter id="round">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
              </filter>
            </defs>
          </svg> */}
        </Fragment>
      )}
    </Fragment>
  );
}
export default MenuCard;
