
import SwiperSkillsBE from "./SwiperBE";

import SwiperSkillsFE from "./SwiperFE";

import SwiperSkillsDB from "./SwiperDB";

import SwiperSkillsTestAndGroup from "./SwiperTestAndGroup";

function Skills() {
  return (
    <div
      className="container-fluid skills-container d-flex justify-content-center align-items-center"
      style={{ height: "1200px" }}
    >
      <div className="main-content">
        <div className="row">
          <div className="title-skils mb-5">
            <h1 className="title-content text-center">My Skills</h1>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <h2 className="text-center mt-2 mb-2">Backend</h2>
            <SwiperSkillsBE />
            <hr />
          </div>
          <div className="row">
          <h2 className="text-center mt-2 mb-2">Fontend</h2>
            <SwiperSkillsFE />
            <hr />
          </div>
          <div className="row">
          <h2 className="text-center mt-2 mb-2">Database</h2>
            <SwiperSkillsDB />
            <hr />
          </div>
          <div className="row">
          <h2 className="text-center mt-2 mb-2">Test And Group</h2>
            <SwiperSkillsTestAndGroup />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
