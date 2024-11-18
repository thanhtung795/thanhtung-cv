import React from "react";
import { DetailProjectProps } from "./type"; // Đảm bảo file `type.ts` tồn tại
import './style.css';
function DetailProject({
  title,
  startDate,
  endDate,
  role,
  teamSize,
  githubLink,
  description,
  technologiesUsed,
  database,
  testing,
  tools,
  qrProjectes,
}: DetailProjectProps) {
  return (
    <div className="work-item"
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <div className="title-work d-flex justify-content-between">
        <h2 style={{ color: "#007bff" }}>{title}</h2>
        <div className="date-work fw-bold fs-5">
          {startDate} - {endDate}
        </div>
      </div>
      <p style={{ color: "white" }}>
        <strong>Role:</strong> {role}
      </p>
      <p style={{ color: "white" }}>
        <strong>Team Size:</strong> {teamSize}
      </p>
      <p style={{ color: "white" }}>
        <strong>GitHub Link:</strong>{" "}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink}
        </a>
      </p>
      <p style={{ color: "white" }}>
        <strong>Description:</strong>
        {description}
      </p>
      <p style={{ color: "white" }}>
        <strong>Technologies Used:</strong> {technologiesUsed}
      </p>
      <p style={{ color: "white" }}>
        <strong>Database:</strong> {database}
      </p>
      <p style={{ color: "white" }}>
        <strong>Testing Tools:</strong> {testing}
      </p>
      <p style={{ color: "white" }}>
        <strong>Tools:</strong> {tools}
      </p>
      <div className="qr-project">
        <img src={qrProjectes} className="img-fluid" alt="" />
      </div>
    </div>
  );
}

export default DetailProject;
