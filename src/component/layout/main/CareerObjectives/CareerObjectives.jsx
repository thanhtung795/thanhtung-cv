
import ImgCareer from "../../../../assets/career.png";
function CareerObjectives() {
  return (

    <div className="container-fluid  career-container mb-5 bg-secondary bg-gradient ">
      <div className="main-content ">
      <div className="row justify-content-center">
        <h2 className="main-text mt-4 text-white text-center">
          Career Objectives
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="text-content text-white text-center w-50 fs-5">
          <p style={{ textAlign: "justify" }}>
            In the next two years, I aim to become a Fullstack Developer,
            focusing on comprehensive web application development. In the
            following three years, I strive to advance to a Senior Developer
            position, enhancing my knowledge and skills in the technology field
          </p>
        </div>
      </div>
      <div className="img-career d-flex justify-content-center">
          <img src={ImgCareer} className="img-fluid " alt="" />
      </div>
      </div>
    </div>
  );
}


export default CareerObjectives;
