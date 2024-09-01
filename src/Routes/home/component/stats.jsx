import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Stats() {
  const [counterOn, setCounterOn] = useState(false);

  const stats = [
    {
      data: "10",
      title: "Clients",
    },
    {
      data: "21",
      title: "Projets",
    },
    {
      data: "4",
      title: "Pays",
    },
    {
      data: "3",
      title: "Collaborateurs",
    },
  ];

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="py-10  rounded-md w-[95%] ">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-xl text-center font-semibold sm:text-4xl">
              Nos clients sont toujours satisfait
            </h3>
            
          </div>
          <div className="mt-12 ">
            <ul className="flex flex-col gap-4 items-center justify-start sm:flex-row sm:justify-center ">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                  className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto"
                >
                  {counterOn && (
                    <h4 className="text-4xl text-white font-semibold ">
                      <CountUp start={0} end={item.data} duration={4}></CountUp>
                      +
                    </h4>
                  )}
                  <p className="mt-3 text-gray-400 font-medium uppercase">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
