import * as React from "react"

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "./ui/carousel"
import { featured } from "./data/Data"
import { cn } from "../lib/utils"
import Autoplay from "embla-carousel-autoplay"

export default function CarouselFeatured() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className="m-5 "
    >
      <CarouselContent>
        {featured.map((items, index) => (
          <CarouselItem key={index} className="lg:basis-1/6  basis-1/2">
            <div className="p-1">
              <Card className={cn(" border")}>
                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                  {items.icon?items.icon:<img src={process.env.PUBLIC_URL + items.cover} alt='' className="w-[65px] h-[65px]" />}
                  <span className="text-1xl font-semibold">{items.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
