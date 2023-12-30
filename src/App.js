import React, { useState } from "react";
import "./App.css";
import MenuCard from "./MenuCard";
import ResumeTimeline from "./ResumeTimeline";
import { AnimateSharedLayout } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

// Add center date
// Don't grow up, it's a trap
// move app close button under card, away from content
//// move the onclick to close button
// maybe rotate cursor for pointer
// look more into fonts
// customize 404 page
// add slight/faded stripe pattern in the background
// maybe just use icons to fill apps on smaller screens/mobile, and make bottom bar smaller with just the name

// What is this website? About this site (explaining the wii aspect of this website/portfolio)..or maybe just make a button on the bottom bar for this
// Technical Portfolio Section: Make one app or multiple?
//// Pokedex article/writeup, explaining passion for the games and the project
//// Pinball tracker article/writeup
// Books Channel, list of books I've read with dates completed and reviews/ratings, blog style + timeline style
// Running Log: https://developers.strava.com/docs/reference/#api-Activities-getActivityById
// Animation Channel
// Certifications

// Contact modal should be linked to mail button on bottom bar
// linkedin button/link could be the SD card in the bottom left

function App() {
  const [openId, setOpenId] = useState(-1);

  const updateOpenId = (updatedId) => {
    setOpenId(updatedId);
  };

  return (
    <div className="menu">
      <div className="apps">
        <AnimateSharedLayout>
          <MenuCard
            value="About this Website"
            id={0}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            bgImage={"/website-min.jpg"}
            // Photo by <a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Florian Olivo</a> on <a href="https://unsplash.com/s/photos/html-code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            value="Me Channel"
            id={1}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            bgImage={"/me-min.jpg"}
            // credit to my dad
          />
          <MenuCard
            value="Work Experience"
            id={2}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<ResumeTimeline />}
            bgImage={"/work2-min.jpg"}
            // Photo by <a href="https://unsplash.com/es/@mikeyharris?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikey Harris</a> on <a href="https://unsplash.com/s/photos/work-from-home?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            value="Main Website"
            id={3}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            bgImage={"/web1-min.jpg"}
            // https://unsplash.com/photos/_t-l5FFH8VA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
          />
          <MenuCard
            value="Pokedex"
            id={4}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            bgImage={"/pokeball-min.jpg"}
            // Photo by <a href="https://unsplash.com/@shugo88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Don H</a> on <a href="https://unsplash.com/s/photos/pokemon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            value="Pinball Machine Finder"
            id={5}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            bgImage={"/pinball-min.jpg"}
            // Photo by <a href="https://unsplash.com/@hjmckean?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Heather McKean</a> on <a href="https://unsplash.com/s/photos/pinball?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            value="Certifications"
            id={6}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            bgImage={"/work1-min.jpg"}
            // Photo by <a href="https://unsplash.com/@freegraphictoday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AbsolutVision</a> on <a href="https://unsplash.com/s/photos/experience?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            value="Running Log"
            id={7}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            bgImage={"/run1-min.jpg"}
            // Photo by <a href="https://unsplash.com/@we_are_rising?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">lucas Favre</a> on <a href="https://unsplash.com/@we_are_rising?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            id={8}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            isComingSoonBlock={true}
            // Photo by <a href="https://unsplash.com/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joanna Kosinska</a> on <a href="https://unsplash.com/s/photos/study-website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            id={9}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            isComingSoonBlock={true}
            // Photo by <a href="https://unsplash.com/ja/@iuliavrinceanu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vrînceanu Iulia</a> on <a href="https://unsplash.com/s/photos/books?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          />
          <MenuCard
            id={10}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            isComingSoonBlock={true}
          />
          <MenuCard
            id={11}
            openId={openId}
            updateOpenId={updateOpenId}
            content={<div>hello</div>}
            isComingSoonBlock={true}
            // Photo by <a href="https://unsplash.com/@jannisjansson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jannis Edelmann</a> on <a href="https://unsplash.com/s/photos/camera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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

      {/* GitHub+LinkedIn+Contact Button/Link */}
      <div
        style={{
          width: "100%",
          marginTop: "1%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginLeft: "2%",
            display: "flex",
            alignItems: "flex-start",
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
            href="https://www.linkedin.com/in/seanrmcgovern/"
            target="_blank"
            rel="noopener noreferrer"
            className="sdcard"
          >
            <BsLinkedin className="linkedinIcon" />
          </a>
        </div>
        <div style={{ marginRight: "2%" }}>
          <a
            href="mailto:srm5ka@virginia.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="menuButton"
          >
            <HiMail className="menuIcon" />
          </a>
        </div>
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
