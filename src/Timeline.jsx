import React from "react";
import "./Timeline.css";
import {timelineData} from './util'

const Timeline = () => {


  return (
    <div className="timeline-container">
      <div className="left-section">
        <h6>PROJECT TIMELINE</h6>
        <h3>From Concept To
          <br/>Collection</h3>
        <p>
          This timeline illustrates the essential stages in the creation of a fashion
          collection, highlighting important milestones and deliverables.
        </p>
        <button className="explore-btn">EXPLORE<div className="button-arrow">↑</div></button>
      </div>

      <div className="right-section">
        {timelineData.map((item, index) => (
            <div key={index} className="card">
              <h4>{item.week}</h4>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
