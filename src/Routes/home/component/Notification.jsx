// import { notification1 } from "../assets";
// import { notificationImages } from "../constants";
import { AnimatedTooltip } from "./animate-tooltip";

const people = [
  {
    id: 1,
    name: "BAGUIAN Harouna",
    designation: "Software Engineer",
    image: "/images/team/BAGUIAN.jpg",
  },
  {
    id: 2,
    name: "OUEDRAOGO Ousseni",
    designation: "Software Engineer",
    image: "/images/team/ousseni.JPG",
  },
  {
    id: 3,
    name: "SAOUWADOGO Salifou",
    designation: "Software Engineer",
    image: "/images/team/SALIF.jpg",
  },
];

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-3 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl `}
    >
      <h2 className="mb-1 font-bold text-base">{title}</h2>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <ul className="flex flex-row items-center justify-center w-full -m-0.5">
            <AnimatedTooltip items={people} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
