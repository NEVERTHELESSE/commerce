import { useDispatch, useSelector } from "react-redux";
import { update } from "./redux/UserSlic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Bar() {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="w-full bg-orange-500 m-2">
          <img
            src="https://images.pexels.com/photos/14751266/pexels-photo-14751266.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="w-full"
          />
        </div>
        <div className="size-[30rem] bg-orange-500 m-2">
          <img
            src="https://images.pexels.com/photos/28759661/pexels-photo-28759661/free-photo-of-minimalistic-urban-tree-and-street-lamp-scene.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="size-[30rem] bg-orange-500 m-2">
          <img
            src="https://images.pexels.com/photos/19121886/pexels-photo-19121886/free-photo-of-apple-tree-branch-lying-on-white-background-next-to-apple-halves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="size-[30rem] bg-orange-500 m-2">
          <img
            src="https://images.pexels.com/photos/28571992/pexels-photo-28571992/free-photo-of-serene-coffee-moment-with-polaroids-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="size-[30rem] bg-orange-500 m-2">
          <img
            src="https://images.pexels.com/photos/28838903/pexels-photo-28838903/free-photo-of-stylish-woman-posing-against-vintage-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="size-[30rem] bg-orange-500 m-2">
          <img
            src="https://images.pexels.com/photos/28210179/pexels-photo-28210179/free-photo-of-a-mountain-goat-sitting-on-top-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </Slider>
      <p className="text-4xl text-orange-500">Bar {name}</p>
      <button
        onClick={() => {
          dispatch(update({ name: "ajibola" }));
        }}
      >
        click me
      </button>
    </div>
  );
}
