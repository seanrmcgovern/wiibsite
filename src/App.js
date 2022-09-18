import React, { useState } from "react";
import "./App.css";
import MenuCard from "./MenuCard";
import { AnimateSharedLayout } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

// look into disabling click during animation
//// by moving the onclick to a close button in the expanded content
// maybe rotate cursor for pointer
// look more into fonts
// customize 404 page
// add slight/faded stripe pattern in the background
// maybe just use icons to fill apps on smaller screens/mobile

// potential app slots
// About me
// What is this website? About this site (explaining the wii aspect of this website/portfolio)..or maybe just make a button on the bottom bar for this
// Resume timeline
// Technical Portfolio Section: Make one app or multiple?
//// Pokedex article/writeup, explaining passion for the games and the project
//// Pinball tracker article/writeup
// Photo Channel
// Books channel, list of books I've read with dates completed and reviews/ratings, blog style + timeline style
//// TV/Movie/Games channel in similar style ^^^
// Running Log Channel !! https://developers.strava.com/docs/reference/#api-Activities-getActivityById
// Animation Channel
// Pixel art channel
// Link to more traditional website
// At least one of these apps has to be an actual game right??

// Contact modal should be linked to mail button on bottom bar
// linkedin button/link could be the SD card in the bottom left
// Github could be the Wii circle button in the bottom left

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

      {/* GitHub+Contact Button/Link */}
      <div
        style={{
          width: "100%",
          marginTop: "1%",
          // height: "18vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <a
          href="https://github.com/seanrmcgovern"
          target="_blank"
          rel="noopener noreferrer"
          className="menuButton"
        >
          <BsGithub className="menuIcon" />
        </a>
        <a
          href="https://github.com/seanrmcgovern"
          target="_blank"
          rel="noopener noreferrer"
          className="menuButton"
        >
          <HiMail className="menuIcon" />
        </a>
      </div>

      <div
        style={{
          width: "50%",
          height: "25vh",
          bottom: 0,
          left: "25%",
          position: "fixed",
          textAlign: "center",
          fontSize: "3vw",
          color: "#949495",
        }}
      >
        Sean McGovern
      </div>
    </div>
  );
}

/* https://abhik-b.medium.com/cards-full-screen-expand-and-close-react-and-framer-motion-af0f5cf83f45 */

/* https://stackoverflow.com/questions/19484707/how-can-i-make-an-svg-scale-with-its-parent-container */

export default App;
