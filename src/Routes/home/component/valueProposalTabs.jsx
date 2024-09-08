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
import { motion, AnimatePresence  } from "framer-motion";
import { Card, CardContent, CardTitle } from "../../../components/ui/card";
import check from "./check.svg";
import ScrollTrigger from "react-scroll-trigger";

const categories = [
  { id: "ia", title: "Intelligence artificielle", data: aiAndDataScienceSolutionsData },
  { id: "dw", title: "Développement web", data: websitesSolutionsData },
  { id: "dl", title: "Développement logiciel", data: desktopAppSolutionsData },
  { id: "dm", title: "Développement mobile", data: mobileAppSolutionsData },
];

const SolutionItem = ({ item, index }) => (
  <motion.div
    className="font-bold border border-red-500 rounded-md flex flex-row items-center m-2 gap-2 p-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-red-500/50 transform hover:scale-105 hover:cursor-pointer bg-gradient-to-r from-gray-900 to-black"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <img
      src={item.icon}
      alt={item.name}
      className="h-16 w-16 object-cover rounded-full border-2 border-red-500"
    />
    <p className="text-white text-sm md:text-base">{item.name}</p>
  </motion.div>
);

const TabContent = ({ data }) => (
  <ScrollArea className="rounded-md border border-red-500 p-4 bg-black bg-opacity-50">
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      {data.map((item, index) => (
        <SolutionItem key={item.name} item={item} index={index} />
      ))}
    </motion.div>
  </ScrollArea>
);

export default function ValueProposalTabs() {
  const [isDesktop] = useMediaQuery("(min-width: 1100px)", { ssr: false });
  const [counterOn, setCounterOn] = useState(false);
  const [activeTab, setActiveTab] = useState("ia");

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <AnimatePresence>
        {counterOn && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl mx-auto px-4 py-12"
          >
            {isDesktop ? (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="text-white bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 transition-all duration-300"
                    >
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <TabContent data={category.data} />
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <div className="space-y-8">
                {categories.map((category) => (
                  <Card key={category.id} className="bg-gradient-to-r from-gray-900 to-black text-white border-red-500">
                    <CardTitle className="flex items-center justify-center gap-2 p-4 bg-red-900">
                      <img src={check} className="w-6 h-6" alt="check" />
                      {category.title}
                    </CardTitle>
                    <CardContent className="p-4">
                      <TabContent data={category.data} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollTrigger>
  );
}