import { useState, useEffect } from "react";
import BookReviews from "../reviews.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"; // Update the import path to match your file structure

type Review = {
  id: number;
  title: string;
  genre: string;
  reviewer: string;
  quote: string;
  rating?: string;
};

export function Reviews() {
  const [reviews] = useState<Review[]>(BookReviews);

  // Logging the reviews after the render occurs
  useEffect(() => {
    console.log("Reviews:", reviews);
  }, [reviews]);

  return (
    <div className="dark:border-t-white text-center w-[100%]">
      <Carousel>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <div className="p-1">
                <div className="border border-gray-200 rounded-md p-4">
                  <p className="text-lg font-semibold">{review.title}</p>
                  <p className="text-md mt-2">{review.quote}</p>
                  <p className="text-sm mt-4">- {review.reviewer}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
