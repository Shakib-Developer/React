import { Link } from "react-router-dom";
const AppNav = (props) => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li>
            <Link to={"/jsondata"}>Json Data</Link>{" "}
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>{" "}
          </li>
        </ul>
      </div>
      {props.children}
    </>
  );
};

export default AppNav;
