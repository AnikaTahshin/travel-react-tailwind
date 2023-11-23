import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";
import SelectedCard from "./SelectedCard";
// import SelectsCard from "./SelectsCard";
const Select = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* <div className="relative">
        <img src={BoraBora} alt="" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-xl font-bold text-white absolute">
            Maldives
          </p>
        </div>
      </div> */}
      <SelectedCard bg={BoraBora} text="Bora Bora" />
      <SelectedCard bg={BoraBora2} text="Maldives" />
      <SelectedCard bg={Maldives} text="Antigua" />
      <SelectedCard bg={Maldives2} text="Cozumel" />
      <SelectedCard bg={Maldives3} text="Jamaica" />
      <SelectedCard bg={KeyWest} text="Key West" />
    </div>
  );
};

export default Select;
