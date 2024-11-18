import CareerObjectives from "./CareerObjectives/CareerObjectives";
import AboutContact from "./aboutContact/aboutContact";
import Skills from "./skills/Skill";
import './main.css'
import Projects from "./Projects/Projects";
import Education from "./education/Education";

function Main() {
  return (
    <>
      <section id="about" className="section-padding">
        <AboutContact />
      </section>

      <section id="career" className="section-padding">
        <CareerObjectives />
      </section>

      <section id="skills" className="section-padding">
        <Skills />
      </section>
      <section id="projects" className="section-padding">
        <Projects />
      </section>
      <section id="education" className="section-padding">
        <Education />
      </section>
    </>
  );
}

export default Main;