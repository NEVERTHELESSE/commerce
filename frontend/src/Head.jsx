import { useDispatch, useSelector } from "react-redux";
import { remove } from "./redux/UserSlic";

export default function Head() {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => dispatch(remove())}>delete me</button>
    </div>
  );
}
