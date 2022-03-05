import { useState } from "react";
import "./styles/HeaderDepartments.css";

const HeaderDepartments = () => {
  const [hoverCourse, setHoverCourse] = useState(false);
  const [hoverKnowMore, setHoverKnowMore] = useState(false);

  const toggleHoverCourse = () => {
    setHoverCourse(!hoverCourse);
    setHoverKnowMore(false);
  };

  const toggleHoverKnowMore = () => {
    setHoverKnowMore(!hoverKnowMore);
    setHoverCourse(false);
  };

  return (
    <>
      <div className="wrapper-header-page-infos">
        <button className="courses-infos-button" onClick={toggleHoverCourse}>
          <h3 className="courses-infos">CURSOS</h3>
        </button>
        <button className="know-more-button" onClick={toggleHoverKnowMore}>
          <h3 className="know-more-infos">SAIBA MAIS</h3>
        </button>
      </div>

      <div
        className={
          hoverCourse ? "isOpened" : "courses-infos-subcategories-wrapper"
        }
      >
        <h1 className="courses-infos-title">CURSOS</h1>
        <li className="courses-infos-category ">
          <a className="courses-infos-category-link" href="#">
            Lorem Ipsum
          </a>
        </li>
        <li className="courses-infos-category">
          <a className="courses-infos-category-link" href="#">
            Lorem Ipsum
          </a>
        </li>
        <li className="courses-infos-category">
          <a className="courses-infos-category-link" href="#">
            Lorem Ipsum
          </a>
        </li>
        <li className="courses-infos-style-see-all-category">
          <a className="courses-infos-style-see-all" href="#">
            VER TODOS
          </a>
        </li>
      </div>

      <div
        className={
          hoverKnowMore ? "isOpened" : "know-more-subcategories-wrapper"
        }
      >
        <h1 className="courses-infos-title">SAIBA MAIS</h1>
        <li className="courses-infos-category ">
          <a className="courses-infos-category-link" href="#">
            Lorem Ipsum 2
          </a>
        </li>
        <li className="courses-infos-category">
          <a className="courses-infos-category-link" href="#">
            Lorem Ipsum 2
          </a>
        </li>
        <li className="courses-infos-category">
          <a className="courses-infos-category-link" href="#">
            Lorem Ipsum 2
          </a>
        </li>
        <li className="courses-infos-style-see-all-category">
          <a className="courses-infos-style-see-all" href="#">
            VER TODOS
          </a>
        </li>
      </div>
    </>
  );
};

export { HeaderDepartments };
