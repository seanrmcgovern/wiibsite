import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

export default function TimelineElement(props) {
  const theme = "#f5f5f5";

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: theme /*color: "#34BEED"*/ }}
      contentArrowStyle={{ borderRight: `7px solid ${theme}` }}
      date={props.date}
      dateClassName="timelineDate"
      iconStyle={{ background: "#34BEED", color: "#fff" }}
      icon={props.icon}
    >
      <h3 style={{ color: "#34BEED", margin: 0 }}>{props.position}</h3>
      <h4 style={{ color: "#a7a7a7", margin: 0 }}>{props.location}</h4>
      <br />
      <span style={{ color: "#555" }}>
        <li>{props.description}</li>
        <div style={{ marginBottom: "10px" }} />
        <li>{props.skills}</li>
      </span>
    </VerticalTimelineElement>
  );
}
