import Heading from "./Heading";
import Section from "./Section";
import check from "./check.svg";
import lines from "./lines.svg";
import { mission_value } from "../../../components/data/Data";

export default function MissionValue() {
  return (
    <Section className="overflow-hidden text-white" id="mission_value">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          tag="Ce qui definie ToemeXpertise"
          title="L'ADN de ToemeXpertise!"
        />
        <div className="relative ">
          <div className="flex gap-[1rem] max-lg:flex-wrap justify-center">
            {mission_value.map((item) => (
              <div
                key={item.id}
                className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14  odd:py-10 odd:my-6 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
              >
                <h4 className="text-[5rem] leading-none font-bold">
                  {item.title}
                </h4>

                <ul className="mt-14  lg:items-start flex flex-col">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start py-2 border-t justify-start "
                    >
                      <img
                        src={check}
                        className="h-[24px] w-[24px]"
                        alt="Check"
                      />
                      <p className="body-2 ml-4">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none -left-[105%] ">
            <img
              className="w-full"
              src={lines}
              style={{
                width: 1448,
                height: 177,
              }}
              alt="Lines"
            />
          </div> */}

          {/* <div className="hidden lg:block absolute top-1/2  w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none left-[90%]">
            <img
              className="w-full"
              src={lines}
              style={{
                width: 1448,
                height: 177,
              }}
              alt="Lines"
            />
          </div> */}
        </div>
      </div>
    </Section>
  );
}
