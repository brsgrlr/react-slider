import classNames from "classnames";

const UserSlide = ({ user, i }) => {
  return (
    <div className={classNames("carousel-item", { active: i == 0 })}>
      <img src={user.picture.large} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
        <h5>
          {user.name.first} {user.name.last}
        </h5>
        <div>
          {user.location.city}/{user.location.country}
        </div>
        <div>{user.email}</div>
        <div>{user.cell}</div>
      </div>
    </div>
  );
};
export default UserSlide;
