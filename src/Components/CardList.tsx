import { CardListProps } from "../type/type";
import Card from "./Card";

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="col-md-9 pe-3 ps-3">
      <div className="row">
        {cards.map((e, index) => {
          return (
            <Card
              id={index}
              nameCard={e.nameCard}
              img={e.img}
              lastWeek={e.lastWeek}
              thisWeek={e.thisWeek}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
