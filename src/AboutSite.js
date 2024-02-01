import React, { Fragment } from "react";

const ResumeTimeline = () => {
  return (
    <Fragment>
      <h1>About this Website</h1>
      <p>
        Welcome! This website is a sort of passion project of mine. One day I
        decided to rebuild the Nintendo Wii menu interface, except instead of
        letting you play Mario Kart you can check out what I'm up to. By
        clicking aroung this page you can learn about my projessional
        experience, projects I'm working on, and more! It also serves the extra
        purpose of satisfying some of my nostalgia for the Wii era. Hopefully if
        you have fun memories of the console you'll enjoy the throwback!
      </p>

      <h5>
        Photo by{" "}
        <a
          href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noreferrer"
        >
          Florian Olivo
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/s/photos/html-code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </h5>
    </Fragment>
  );
};

export default ResumeTimeline;
