import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../../components/ui/carousel";
import { motion } from "framer-motion";

const ProjectMobileComponent = ({ Project_items }) => {
    return (
      <div className="w-full px-4 sm:w-[90%] sm:mx-auto md:w-[80%] lg:w-[70%] xl:w-[60%] text-left text-white bg-black py-8">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Project_items.map((item, index) => (
              <CarouselItem key={index} className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.div 
                  className="p-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-900 to-black border border-red-800 shadow-lg hover:shadow-red-900 transition-shadow duration-300 overflow-hidden">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={process.env.PUBLIC_URL + item.cover}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      <CardHeader className="absolute bottom-0 left-0 right-0 text-white z-10">
                        <CardTitle className="text-lg sm:text-xl font-bold truncate">{item.name}</CardTitle>
                      </CardHeader>
                    </div>
                    <CardContent className="relative pt-4">
                      <p className="text-sm sm:text-base text-gray-300 line-clamp-3">{item.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center bg-black bg-opacity-50">
                      <Button 
                        variant="outline" 
                        className="mt-2 bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-colors duration-300"
                      >
                        En savoir plus
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 text-white hover:bg-red-700 transition-all duration-300" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-800 text-white hover:bg-red-700 transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    );
  };
  
  export default ProjectMobileComponent;