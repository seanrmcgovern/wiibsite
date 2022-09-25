import { motion } from "framer-motion";
import React, { Fragment } from "react";
import "./card.css";
import "./App.css";
import { IoClose } from "react-icons/io5";

function MenuCard({ value, id, openId, updateOpenId, content, bgImage }) {
  return (
    <Fragment>
      {openId === id && (
        <motion.div className="void" layoutId={`void-${id}`}></motion.div>
      )}
      {openId === id && (
        <motion.div
          onClick={() => updateOpenId(-1)}
          className="expanded-card"
          layoutId={`expandable-card-${id}`}
          style={{ zIndex: 2 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          {/* have content that only displays when open */}
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
          <motion.div
          // className="expanded-card-h"
          // layoutId={`expandable-card-${id}`}
          >
            <div
              style={{
                width: "80vw",
              }}
            >
              {content}
              <div>
                <button
                  style={{
                    position: "fixed",
                    bottom: "7vh",
                    right: "7vw",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                  }}
                >
                  <IoClose className="menuIcon" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        onClick={() => updateOpenId(id)}
        className="normal-card"
        layoutId={`expandable-card-${id}`}
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url(${bgImage})`,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {/* <img
          src={bgImage}
          style={{ objectFit: "cover", height: "20vh" }}
          alt={"Title"}
        ></img> */}
        <h1 style={{ margin: "auto", fontSize: "1.5rem" }}>{value}</h1>
      </motion.div>
      {/* <motion.img
        src={bgImage}
        onClick={() => updateOpenId(id)}
        className="normal-card"
        layoutId={`expandable-card-${id}`}
        style={{ objectFit: "cover" }}
        alt={"Title"}
      ></motion.img> */}

      <motion.div
        className="empty"
        layoutId={`void-${id}`}
        transition={{ ease: "easeOut", duration: 3 }}
      ></motion.div>
    </Fragment>
  );
}
export default MenuCard;
