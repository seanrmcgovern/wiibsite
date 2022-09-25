import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineEvents } from "./TimelineEvents";
import TimelineElement from "./TimelineElement";

const ResumeTimeline = () => {
  return (
    <Fragment>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#34BEED",
          color: "white",
          borderStyle: "solid",
          borderWidth: "5px",
          borderColor: "white",
          borderRadius: "25px",
          marginLeft: "25%",
          marginRight: "25%",
          fontSize: "3vw",
        }}
      >
        Work Experience
      </h1>
      <VerticalTimeline>
        {TimelineEvents.map((event, idx) => (
          <TimelineElement
            position={event.position}
            location={event.location}
            date={event.date}
            description={event.description}
            skills={event.skills}
            icon={event.icon}
            key={idx}
          />
        ))}
        <VerticalTimelineElement iconStyle={{ background: "#34BEED" }} />
      </VerticalTimeline>
    </Fragment>
  );
};

export default ResumeTimeline;
