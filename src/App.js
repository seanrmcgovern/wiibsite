import React, { useState } from "react";
import "./App.css";
import MenuCard from "./MenuCard";
import { AnimateSharedLayout } from "framer-motion";

// look into slowing down animation, and making cards maintain position/hide them during animation
// make background black when card expandedx
// maybe rotate cursor for pointer
// look more into fonts

function App() {
  const [openId, setOpenId] = useState(-1);

  const updateOpenId = (updatedId) => {
    setOpenId(updatedId);
  };

  return (
    <div
      className="menu"
      // style={{ backgroundColor: openId === -1 ? "white" : "black" }}
    >
      <div className="apps">
        <AnimateSharedLayout>
          <MenuCard
            value="test0"
            id={0}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test1"
            id={1}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test2"
            id={2}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test3"
            id={3}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test4"
            id={4}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test5"
            id={5}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test6"
            id={6}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test7"
            id={7}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test8"
            id={8}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test9"
            id={9}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test10"
            id={10}
            openId={openId}
            updateOpenId={updateOpenId}
          />
          <MenuCard
            value="test11"
            id={11}
            openId={openId}
            updateOpenId={updateOpenId}
          />
        </AnimateSharedLayout>
      </div>

      {/* center block with border */}
      <div
        style={{
          width: "100%",
          height: "18vh",
          bottom: 0,
          position: "fixed",
          backgroundColor: "gainsboro",
          borderTopWidth: "4px",
          borderColor: "#34BEED",
          borderTopStyle: "solid",
          borderRadius: "-50px",
        }}
      ></div>

      {/* left block */}
      <div
        style={{
          width: "30%",
          height: "25vh",
          bottom: 0,
          left: 0,
          position: "fixed",
          backgroundColor: "gainsboro",
          borderTopRightRadius: "250px",
          borderTopWidth: "5px",
          borderColor: "#34BEED",
          borderTopStyle: "solid",
        }}
      ></div>

      {/* right block */}
      <div
        style={{
          width: "30%",
          height: "25vh",
          bottom: 0,
          right: 0,
          position: "fixed",
          backgroundColor: "gainsboro",
          borderTopLeftRadius: "300px",
          borderTopWidth: "5px",
          borderColor: "#34BEED",
          borderTopStyle: "solid",
        }}
      ></div>

      {/* covers the left and right div borders */}
      <div
        style={{
          width: "100%",
          height: "18vh",
          bottom: 0,
          position: "fixed",
          backgroundColor: "gainsboro",
        }}
      ></div>

      {/* <div
        style={{
          width: "50%",
          margin: "auto",
          height: "18vh",
          // top: 0,
          // position: "fixed",
          backgroundColor: "green",
          textAlign: "center",
          // paddingTop: "1%",
          fontSize: "3vw",
          color: "gainsboro",
        }}
      >
        Sean McGovern
      </div> */}
      <div
        style={{
          width: "50%",
          height: "25vh",
          bottom: 0,
          left: "25%",
          position: "fixed",
          // backgroundColor: "green",
          textAlign: "center",
          fontSize: "3vw",
          color: "#949495",
        }}
      >
        Sean McGovern
      </div>

      {/* svg bottom bar solution */}
      {/* <div
        style={{
          backgroundColor: "gainsboro",
          resize: "horizontal",
          overflow: "hidden",
          width: "100%",
          height: "auto",
          textAlign: "center",
        }}
      >
        <svg
          width="100%"
          viewBox="-250 128 1500 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M 250 100 Q 100 100 150 100 Q 150 100 200 150 Q 250 200 350 200 C 450 200 450 200 650 200 C 750 200 800 150 850 100 L 800 100 L 750 100 L 700 100 L 500 100 L 400 100 L 250 100 "
          ></path>
        </svg>
      </div> */}
    </div>
  );
}

/* https://abhik-b.medium.com/cards-full-screen-expand-and-close-react-and-framer-motion-af0f5cf83f45 */

/* https://stackoverflow.com/questions/19484707/how-can-i-make-an-svg-scale-with-its-parent-container */

export default App;
