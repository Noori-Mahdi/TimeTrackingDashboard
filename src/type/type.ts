export type UserProps = {
  userName: string;
  img: string;
};

export type CardProps = {
  nameCard: string;
  img: string;
  thisWeek: number;
  lastWeek: number;
  id:number
};

export type CardListProps = {
  cards: CardProps[];
};
