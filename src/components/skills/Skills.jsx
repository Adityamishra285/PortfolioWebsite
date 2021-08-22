import "./skills.scss";

export default function Skills() {
  const data = [
    {
      id: 1,
      name: "Competitive Programming",
      title: "1 year experience",
      img:
        "./myassets/skills1.png",
      icon: "assets/twitter.png",
      desc1:
        "- C++",
        desc2:
        "",
        desc3:
        "- Various Computer Programming Technique and Methods",
        desc4:
        "",
        desc5:
        "- Data Structures and Algorithims"
    },
    {
      id: 2,
      name: "Web Development",
      title: "MERN Stack - 3 months experience ",
      img:
        "./myassets/skills2.png",
      icon: "assets/youtube.png",
      desc1:
      "- HTML, CSS, TailwindCSS",
      desc2:
      "- VanillaJS, ReactJS",
      desc3:
      "- NodeJS, ExpressJS",
      desc4:
      "- MongoDB",
      desc5:
      "- Socket.Io",
      featured: true,
    },
    {
      id: 3,
      name: "Programming Languages,",
      title: "Frameworks and libraries",
      img:
        "./myassets/skills3.jpg",
      icon: "assets/linkedin.png",
      desc1:
      "- C, C++, Python, Java, ShellScript",
      desc2:
      "- HTML, CSS, Javascript, NodeJS, PHP",
      desc3:
      "- ReactJS, Bootstrap, TailwindCSS, SASS",
      desc4:
      "- ExpressJS, Jquery, MongoDB, GitHub",
      desc5:
      "- Pandas, Numpy, Postman, Apache"
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              <b>{d.desc1} </b> 
              <br />
              <b> {d.desc2}</b>
              <br />
               <b> {d.desc3}</b>
              <br />
              <b>{d.desc4}</b>
              <br />
              <b>{d.desc5}</b>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
