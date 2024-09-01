import React, {useState} from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { aiAndDataScienceSolutionsData } from "../../../components/data/Solutions_AIData";
import { websitesSolutionsData } from "../../../components/data/Solutions_websiteData";
import { desktopAppSolutionsData } from "../../../components/data/Solutions_desktopAppData";
import { mobileAppSolutionsData } from "../../../components/data/Solutions_mobileAppData";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "../../../components/ui/card";
import check from "./check.svg";
import ScrollTrigger from "react-scroll-trigger";

export default function ValueProposalTabs() {
  const [isDesktop, setisDesktop] = useMediaQuery(
    "(min-width: 1100px)",
    "(display-mode: browser)"
  );
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
    {counterOn && (
      <div>
      {isDesktop ? (
        <Tabs defaultValue="ia" className="w-[95%] ml-10">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ia">Intielligence articielle</TabsTrigger>
            <TabsTrigger value="dw">Developpement web</TabsTrigger>
            <TabsTrigger value="dl">Developpement logiciel</TabsTrigger>
            <TabsTrigger value="dm">Developpement mobile</TabsTrigger>
          </TabsList>

          <TabsContent value="ia">
            <ScrollArea className="rounded-sm border">
              <motion.div
                className="grid grid-cols-4 w-[90%] gap-2 items-center justify-center  m-4 "
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5 },
                  },
                }}
              >
                {aiAndDataScienceSolutionsData.map((item, index) => {
                  return (
                    <motion.div
                      className="font-bold  border rounded-md flex flex-row items-center m-2 gap-2 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0, delay: index * 0.8 }}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className="h-20 w-20 object-fill rounded-[50%] m-1"
                      />
                      <p className="">{item.name}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="dw">
            <ScrollArea className="rounded-sm border">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5 },
                  },
                }}
                className="grid grid-cols-4 w-[90%] gap-2 items-center justify-center  m-4 "
              >
                {websitesSolutionsData.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0, delay: index * 0.8 }}
                      className="font-bold  border rounded-md flex flex-row items-center m-2 gap-4 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className="h-20 w-20 object-fill rounded-[50%] m-1"
                      />
                      <p className="">{item.name}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="dl">
            <ScrollArea className="rounded-sm border">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5 },
                  },
                }}
                className="grid grid-cols-4 w-[90%] gap-2 items-center justify-center  m-4 "
              >
                {desktopAppSolutionsData.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0, delay: index * 0.8 }}
                      className="font-bold  border rounded-md flex flex-row items-center m-2 gap-4 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className="h-20 w-20 object-fill rounded-[50%] m-1"
                      />
                      <p className="">{item.name}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="dm">
            <ScrollArea className="rounded-sm border">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5 },
                  },
                }}
                className="grid grid-cols-4 w-[90%] gap-2 items-center justify-center  m-4 "
              >
                {mobileAppSolutionsData.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0, delay: index * 0.8 }}
                      className="font-bold  border rounded-md flex flex-row items-center m-2 gap-4 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className="h-20 w-20 object-fill rounded-[50%] m-1"
                      />
                      <p className="">{item.name}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      ) : (
        <div>
          <Card className="bg-[#0E0C15] text-white border-none">
            <CardTitle className="flex flex-row items-center justify-center gap-2">
              <img src={check} className="w-[30px] h-[30px]" alt="check" />
              Intelligence artificielle
            </CardTitle>
            <CardContent className="border-none">
              <ScrollArea className="">
                <motion.div
                  className="flex flex-col w-[90%] gap-2 items-center justify-center "
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { delay: 0.5, duration: 0.5 },
                    },
                  }}
                >
                  {aiAndDataScienceSolutionsData.map((item, index) => {
                    return (
                      <motion.div
                        className="font-bold w-full  border rounded-md flex flex-row items-center  ml-5 my-2 gap-2 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: index * 0.8 }}
                      >
                        <img
                          src={item.icon}
                          alt="icon"
                          className="h-20 w-20 object-fill rounded-[50%] m-1"
                        />
                        <p className="">{item.name}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="bg-[#0E0C15] text-white border-none">
            <CardTitle className="flex flex-row items-center justify-center gap-2">
              <img src={check} className="w-[30px] h-[30px]" alt="check" />
              Developpement web
            </CardTitle>
            <CardContent className="border-none">
              <ScrollArea className="">
                <motion.div
                  className="flex flex-col w-[90%] gap-2 items-center justify-center "
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { delay: 0.5, duration: 0.5 },
                    },
                  }}
                >
                  {websitesSolutionsData.map((item, index) => {
                    return (
                      <motion.div
                        className="font-bold w-full  border rounded-md flex flex-row items-center  ml-5 my-2 gap-2 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: index * 0.8 }}
                      >
                        <img
                          src={item.icon}
                          alt="icon"
                          className="h-20 w-20 object-fill rounded-[50%] m-1"
                        />
                        <p className="">{item.name}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="bg-[#0E0C15] text-white border-none">
            <CardTitle className="flex flex-row items-center justify-center gap-2">
              <img src={check} className="w-[30px] h-[30px]" alt="check" />
              Developpement logiciel
            </CardTitle>
            <CardContent className="border-none">
              <ScrollArea className="">
                <motion.div
                  className="flex flex-col w-[90%] gap-2 items-center justify-center "
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { delay: 0.5, duration: 0.5 },
                    },
                  }}
                >
                  {desktopAppSolutionsData.map((item, index) => {
                    return (
                      <motion.div
                        className="font-bold w-full  border rounded-md flex flex-row items-center  ml-5 my-2 gap-2 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: index * 0.8 }}
                      >
                        <img
                          src={item.icon}
                          alt="icon"
                          className="h-20 w-20 object-fill rounded-[50%] m-1"
                        />
                        <p className="">{item.name}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="bg-[#0E0C15] text-white border-none">
            <CardTitle className="flex flex-row items-center justify-center gap-2">
              <img src={check} className="w-[30px] h-[30px]" alt="check" />
              Developpement mobile
            </CardTitle>
            <CardContent className="border-none">
              <ScrollArea className="">
                <motion.div
                  className="flex flex-col w-[90%] gap-2 items-center justify-center "
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { delay: 0.5, duration: 0.5 },
                    },
                  }}
                >
                  {mobileAppSolutionsData.map((item, index) => {
                    return (
                      <motion.div
                        className="font-bold w-full  border rounded-md flex flex-row items-center  ml-5 my-2 gap-2 transition-all duration-300 ease-linear shadow-sm transform hover:scale-110 hover:cursor-pointer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: index * 0.8 }}
                      >
                        <img
                          src={item.icon}
                          alt="icon"
                          className="h-20 w-20 object-fill rounded-[50%] m-1"
                        />
                        <p className="">{item.name}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
    )}
    </ScrollTrigger>
  );
}
