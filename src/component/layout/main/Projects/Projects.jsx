import DetailProject from "./detailProject/DetailProject";
import "./style.css";

import QRFreelancer from "./../../../../assets/QR-freelancer.png";
import QRVegan from "./../../../../assets/QR-Vegan.png";

function Projects() {
    const projects = [
        {
            title: "Freelancer Platform",
            startDate: "08/2024",
            endDate: "current",
            role: "Dev (Fullstack), Team Lead",
            teamSize: 5,
            githubLink: "https://github.com/thanhtung795/freelancer",
            description: "The Freelancer application is an online platform that connects Clients with Freelancers for various projects and services.",
            technologiesUsed: "Java Spring Boot, Restful API, Spring Security, React js, Bootstrap, GitHub, JUnit, Selenium, Trello, Agile/Scrum, Postman",
            database: "MySQL, SQL Server, PostgreSQL",
            testing: "JUnit, Selenium",
            tools: "Netbeans, Trello",
            qrFreelancer: QRFreelancer
        },
        {
            title: "Vegan Restaurant",
            startDate: "02/2024",
            endDate: "04/2023",
            role: "Dev (Fullstack), Team Lead",
            teamSize: 6,
            githubLink: "https://github.com/dquangv/VeganRestaurant",
            description: "A restaurant management application that allows users to manage employee information, menu items, reservations, orders, and payments, providing a seamless experience for restaurant operations.",
            technologiesUsed: "Java Core, Java Swing, JDBC",
            database: "SQL",
            testing: "JUnit",
            tools: "Netbeans, Trello, GitHub",
            qrFreelancer: QRVegan
        }
    ];
  return (
    <div className="container-fluid main-container  bg-secondary bg-gradient">
        <div>
            <div className="row justify-content-center ">
                <h1 className="main-text text-white text-center mt-4">Projects</h1>
            </div>
            <hr />
            <div style={{ padding: "20px" }}>
            <h1 style={{color:"white"}}>Projects Overview</h1>
            {projects.map((project, index) => (
                <DetailProject
                    key={index}
                    title={project.title}
                    startDate={project.startDate}
                    endDate={project.endDate}
                    role={project.role}
                    teamSize={project.teamSize}
                    githubLink={project.githubLink}
                    description={project.description}
                    technologiesUsed={project.technologiesUsed}
                    database={project.database}
                    testing={project.testing}
                    tools={project.tools}
                    qrProjectes={project.qrFreelancer}
                />
            ))}
        </div>
            
        </div>
    </div>
  );
}


export default Projects;
