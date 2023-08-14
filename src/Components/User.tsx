import { UserProps } from "../type/type";

const User = ({ img, userName }: UserProps) => {
  return (
    <div className="profileBx col-md-3">
      <div>
        <img className="d-md-block" src={img} alt="profile img" />
        <span>Report for</span>
        <h4>{userName}</h4>
      </div>
      <ul>
        <li>
          <span>Daily</span>
        </li>
        <li>
          <span>Weekly</span>
        </li>
        <li>
          <span>Monthly</span>
        </li>
      </ul>
    </div>
  );
};

export default User;
