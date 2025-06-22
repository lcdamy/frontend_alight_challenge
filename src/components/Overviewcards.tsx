import React from 'react'
import { cardList } from '@/lib/constants'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';
import { ChevronsRight } from "lucide-react"

function Overviewcards() {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cardList.map((card, idx) => (
        <Card
          key={card.title}
          className="w-full max-w-full relative h-[167px] bg-[#F3F8FF] text-black/50 border-0 font-[400] hover:shadow-lg hover:bg-[#A0DBF457]/34 hover:font-semibold transition-shadow duration-300 ease-in-out group"
        >
          <CardContent className="flex flex-col items-center justify-center h-full">
            <p className="absolute -top-4 -left-4 px-6 py-6 border border-[#08277782]/50 rounded-3xl bg-[#F3F8FF] z-10 flex items-center justify-center text-2xl text-[#071C50] shadow transition-all duration-500 ease-in-out group-hover:bg-[#4B93E7] group-hover:text-white group-hover:scale-125 group-hover:-top-2 group-hover:-left-2 group-hover:shadow-lg">
              {card.count}
            </p>
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex justify-end">
                <Image
                  width={86}
                  height={90}
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="text-left text-[14px] self-start mb-0">
                <div className="flex flex-row items-center justify-between w-4/5 group-hover:mt-2 transition-all duration-500">
                  <div>{card.title} <span>{card.status}</span> </div>
                </div>
                <ChevronsRight
                  className="absolute bottom-4 right-12 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Overviewcards