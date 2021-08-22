import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected, setResumee }) {

  function setter(){
    setSelected(id); 
    setResumee(false);
  }

  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setter()}
    >
      {title}
    </li>
  );
}
