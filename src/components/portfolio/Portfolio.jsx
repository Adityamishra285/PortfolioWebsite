import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import Pdf from "../pdf/pdf";
import "./portfolio.scss";
import {
  // featuredPortfolio,
  github,
  linkedin,
  codeChef,
  codeForces,
} from "../../data2";
 

export default function Portfolio() {
  const [selected, setSelected] = useState("resume");
  const [resumee, setResumee] = useState(true);
  const [data, setData] = useState([]);


  const list = [
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "github",
      title: "Github",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
    },
    {
      id: "codechef",
      title: "Codechef",
    },
    {
      id: "codeforces",
      title: "CodeForces",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "resume":
            setResumee(true);
        break;
      case "github":
        setData(github);
        break;
      case "linkedin":
        setData(linkedin);
        break;
      case "codechef":
        setData(codeChef);
        break;
        case "codeforces":
          setData(codeForces);
          break;
      // default:
      //   setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            setResumee = {setResumee}
          />
        ))}
      </ul>
      <div className="container">
      { resumee ? <Pdf/> : data.map((d) => (
          <div className="item">
           <img
              src={d.img}
              alt="" 
            />
           <h3><a href={d.link} target="_blank">{d.title}</a>
           <div id="mainDiv"> </div></h3>
           
          </div>
        ))}
      </div>
    </div>
  );
}
