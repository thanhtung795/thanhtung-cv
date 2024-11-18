import "./style.css";
import logoCV from "./../../../assets/logoCV.png";
import { useState, useEffect } from "react";

function Header() {
  const [isFlex, setIsFlex] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        // Adjust the height threshold as needed
        setIsFlex(true);
      } else {
        setIsFlex(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Hàm xử lý scroll đến 1 section
   * @param {Event} e - sự kiện click
   * @param {string} sectionId - id của section
   */
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Tính toán vị trí của section
      const headerOffset = 100; // Điều chỉnh offset nếu cần
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // Scroll đến vị trí đó 1 cách trơn tru
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={`header-container ${isFlex ? "flex-header" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
              <a
                className="nav-link fs-5  text-white fw-bold"
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
              >
                <img src={logoCV} alt="Logo" className="header-logo-img" />
              </a>
              <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link fs-5  text-white fw-bold"
                          href="#about"
                          onClick={(e) => handleScrollToSection(e, "about")}
                        >
                          Position & Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link fs-5  text-white fw-bold"
                          href="#career"
                          onClick={(e) => handleScrollToSection(e, "career")}
                        >
                          Career Objectives
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link fs-5  text-white fw-bold"
                          href="#skills"
                          onClick={(e) => handleScrollToSection(e, "skills")}
                        >
                          Skills
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link fs-5  text-white fw-bold"
                          href="#projects"
                          onClick={(e) => handleScrollToSection(e, "projects")}
                        >
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link fs-5  text-white fw-bold"
                          href="#education"
                          onClick={(e) => handleScrollToSection(e, "education")}
                        >
                          Education
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
