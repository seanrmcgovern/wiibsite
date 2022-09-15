import { motion } from "framer-motion";
import React, { Fragment } from "react";
import "./card.css";

function MenuCard({ value, id, openId, updateOpenId }) {
  return (
    <Fragment>
      {openId === id && (
        <motion.div
          className="void"
          layoutId={`void-${id}`}
          transition={{ ease: "easeOut", duration: 3 }}
        ></motion.div>
      )}
      {openId === id && (
        <motion.div
          onClick={() => updateOpenId(-1)}
          className="expanded-card"
          layoutId={`expandable-card-${id}`}
          style={{ zIndex: 2 }}
          transition={{ ease: "easeOut", duration: 0.75 }}
        >
          {/* <motion.h2
            className="expanded-card-h"
            layoutId={`expandable-card-h-${id}`}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          >
            Expanded {value}
          </motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquam molestiae ratione sint magnam sequi fugiat u llam earum
            distinctio fuga iure, ad odit repudiandae modi est alias ipsum
            aperiam. Culpa?
          </p> */}
        </motion.div>
      )}
      <motion.div
        onClick={() => updateOpenId(id)}
        className="normal-card"
        layoutId={`expandable-card-${id}`}
        style={{ background: value }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {/* <motion.h1
          transition={{ ease: "easeIn", delay: 1 }}
          layoutId={`expandable-card-h-${id}`}
        >
          {value}
        </motion.h1> */}
        <h1 style={{}}>{value}</h1>
      </motion.div>

      <motion.div
        className="empty"
        layoutId={`void-${id}`}
        transition={{ ease: "easeOut", duration: 3 }}
      ></motion.div>
    </Fragment>
  );
}
export default MenuCard;
