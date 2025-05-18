// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Chatify"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import imgTaskManager from '../../Assets/Projects/Task-manager.png'
// import imgAbaq from '../../Assets/Projects/Abaq.png'
// import imgWeatherApp from '../../Assets/Projects/WeatherApp.png'

// // Import or reference your images here
// // Example imports (update paths as needed):
// // import imgTaskManager from "../../Assets/Projects/taskManager.png";
// // import imgAbaq from "../../Assets/Projects/abaq.png";
// // ... other imports

// const projects = [
//   {
//     imgPath: "https://cdn.dribbble.com/userupload/11501395/file/original-e57da27483efdc2b93a944f6082f8de1.png?resize=752x&vertical=center",
//     alt: "Alhada Estate Screenshot",
//     title: "Alhada Estate",
//     description: "A real estate platform built with ASP.NET Core 6 and SQL Server, featuring property listings and role-based user management using LINQ.",
//     ghLink: "https://github.com/mohammaddarweesh-oop/Graduate-Project",
//     demoLink: "#"
//   },
//   {
//     imgPath: imgTaskManager,
//     alt: "Task Manager Screenshot",
//     title: "Task Manager",
//     description: "A full-stack task management app with a React frontend and Node.js backend, using MongoDB for data storage and JWT for authentication.",
//     ghLink: "https://github.com/mohammaddarweesh-oop/Task-Manager-Simple-FrontEnd",
//     demoLink: "https://mahami.netlify.app/"
//   },
//   {
//     imgPath: imgAbaq,
//     alt: "Abaq AlEman School",
//     title: "Abaq AlEman School",
//     description: "A school website built with React, styled with CSS, and structured with HTML to showcase educational services.",
//     ghLink: "https://github.com/mohammaddarweesh-oop/Abaq-AlEman-School",
//     demoLink: "https://abaq-aleeman.netlify.app/"
//   },
//   {
//     imgPath: imgWeatherApp,
//     alt: "Weather App Screenshot",
//     title: "Weather App",
//     description: "A full-stack weather forecasting app with a React frontend and Node.js backend, using MongoDB and JWT for secure data management.",
//     ghLink: "https://github.com/mohammaddarweesh-oop/WeatherAppGroupH-Frontend",
//     demoLink: "https://weather-app-kd.netlify.app/"
//   },
//   // Add remaining projects similarly...
// ];

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           {projects.map((project, index) => (
//             <Col key={index} md={4} className="project-card">
//               <ProjectCard
//                 imgPath={project.imgPath}
//                 isBlog={false}
//                 title={project.title}
//                 description={project.description}
//                 ghLink={project.ghLink}
//                 demoLink={project.demoLink}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;


// =======================================================================


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import images
import imgTaskManager from "../../Assets/Projects/Task-manager.png";
import imgAbaq from "../../Assets/Projects/Abaq.png";
import imgWeatherApp from "../../Assets/Projects/WeatherApp.png";
import imgBookstore from "../../Assets/Projects/bookstore.png";
import imgTodoList from "../../Assets/Projects/Todo-list.png";
import imgCalc from "../../Assets/Projects/Calc.png";
import imgWeatherApp1 from "../../Assets/Projects/WeatherApp1.jpg";
import imgPlayer from "../../Assets/Projects/player.png";
import imgSocial from "../../Assets/Projects/SocialMedia.png";
import imgPlayerJavaScript from "../../Assets/Projects/player-javascript.png";
import imgTempTwo from "../../Assets/Projects/TempTwo.png";

function Projects() {
  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgWeatherApp1}
              imgStyle={imgStyle}
              isBlog={false}
              title="Weather App 1"
              description="A multilingual weather app built with React.js, styled with MUI, and powered by Axios for API integration."
              ghLink="https://github.com/mohammaddarweesh-oop/Weather-App"
              demoLink="https://weatheralbow.netlify.app/"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgStyle={imgStyle}
              isBlog={false}
              title="Blogs Api"
              description="A blog platform API built with Node.js, Express.js, and MongoDB, featuring image uploads with Cloudinary and JWT authentication."
              ghLink="https://github.com/mohammaddarweesh-oop/Blogs-Api"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgPlayerJavaScript}
              imgStyle={imgStyle}
              isBlog={false}
              title="Prayer Times (JavaScript)"
              description="A JavaScript-based prayer times app, styled with MUI and powered by Axios and Moment for precise scheduling."
              ghLink="https://github.com/mohammaddarweesh-oop/salah-timer-reactjs"
              demoLink="https://mawaqeet-salah.netlify.app/"
            />
          </Col>

        <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={imgWeatherApp}
              imgStyle={imgStyle}
              isBlog={false}
              title="Weather App"
              description="A full-stack weather forecasting app with a React frontend and Node.js backend, using MongoDB and JWT for secure data management."
              ghLink="https://github.com/mohammaddarweesh-oop/WeatherAppGroupH-Frontend"
              ghLink1="https://github.com/mohammaddarweesh-oop/WeatherAppGroupH"
              demoLink="https://weather-app-kd.netlify.app/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgBookstore}
              imgStyle={imgStyle}
              isBlog={false}
              title="Bookstore"
              description="A full-stack online bookstore with a React frontend and Node.js backend, using MongoDB and JWT for inventory and user management."
              ghLink="https://github.com/mohammaddarweesh-oop/Online-Book-Store"
              demoLink="https://book-store-md.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.dribbble.com/userupload/11501395/file/original-e57da27483efdc2b93a944f6082f8de1.png?resize=752x&vertical=center"
              imgStyle={imgStyle}
              isBlog={false}
              title="Alhada Estate Prpject Graduate"
              description="A real estate platform built with ASP.NET Core 6 and SQL Server, featuring property listings and role-based user management using LINQ."
              ghLink="https://github.com/mohammaddarweesh-oop/Graduate-Project"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgTaskManager}
              imgStyle={imgStyle}
              isBlog={false}
              title="Task Manager"
              description="A full-stack task management app with a React frontend and Node.js backend, using MongoDB for data storage and JWT for authentication."
              ghLink="https://github.com/mohammaddarweesh-oop/Task-Manager-Simple-FrontEnd"
              demoLink="https://mahami.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgTaskManager}
              imgStyle={imgStyle}
              isBlog={false}
              title="Task Manager (2)"
              description="An enhanced full-stack task management app with a React frontend and Node.js backend, secured with JWT and MongoDB for task operations."
              ghLink="https://github.com/mohammaddarweesh-oop/Task-Manager-Simple-API"
              demoLink="https://mahami.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgAbaq}
              imgStyle={imgStyle}
              isBlog={false}
              title="Abaq AlEman School"
              description="A school website built with React, styled with CSS, and structured with HTML to showcase educational services."
              ghLink="https://github.com/mohammaddarweesh-oop/Abaq-AlEman-School"
              demoLink="https://abaq-aleeman.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgTodoList}
              imgStyle={imgStyle}
              isBlog={false}
              title="ToDo List Frontend"
              description="A todo list app frontend built with React, styled with CSS, and powered by JavaScript for task organization."
              ghLink=""
              demoLink="https://mahami.netlify.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.dribbble.com/userupload/11501395/file/original-e57da27483efdc2b93a944f6082f8de1.png?resize=752x&vertical=center"
              imgStyle={imgStyle}
              isBlog={false}
              title="Simple Api With Mysql"
              description="A lightweight API built with Node.js, Express.js, and MySQL for efficient data management and querying."
              ghLink="https://github.com/mohammaddarweesh-oop/simple-api-with-mysql"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgCalc}
              imgStyle={imgStyle}
              isBlog={false}
              title="Calc Age"
              description="An age calculator app built with React.js, styled with CSS, and powered by JavaScript for quick calculations."
              ghLink="https://github.com/mohammaddarweesh-oop/age-calc-with-react/tree/master"
              demoLink="https://mohammad-albaw-age-calc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgPlayer}
              imgStyle={imgStyle}
              isBlog={false}
              title="Prayer Times (React)"
              description="A prayer times app built with React.js, styled with MUI, and powered by Axios and Moment for accurate timings."
              ghLink="https://github.com/mohammaddarweesh-oop/Prayer-Timings"
              demoLink="https://mawaqeet-alsalah.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgSocial}
              imgStyle={imgStyle}
              isBlog={false}
              title="Social Media"
              description="A social media platform frontend built with HTML, CSS, and JavaScript, styled with Bootstrap and powered by Axios."
              ghLink="https://github.com/mohammaddarweesh-oop/Social-media-project"
              demoLink="https://social-media-mohammad-darweesh.netlify.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgTempTwo}
              imgStyle={imgStyle}
              isBlog={false}
              title="Templete Three"
              description="A JavaScript-based prayer times app, styled with MUI and powered by Axios and Moment for precise scheduling."
              ghLink="https://github.com/mohammaddarweesh-oop/Templete-Three"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


