import { CardProps } from "../type/type";
import more from "../images/icon-ellipsis.svg";

const Card = ({ img, nameCard, thisWeek, lastWeek,id }: CardProps) => {
  const color = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
  ]

  return (
    <div className="cardBx col-md-4">
      <div style={{backgroundColor:color[id]}} className="card">
        <div style={{backgroundColor:color[id]}} className="header">
          <img src={img} />
        </div>
        <div className="main">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span>{nameCard}</span>
            <img src={more} />
          </div>
          <div>
            <h5>{thisWeek}hrs</h5>
            <span>last week - {lastWeek}hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
