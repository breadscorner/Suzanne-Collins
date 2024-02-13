import { useState, useEffect } from "react";
import BookReviews from "../reviews.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

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
    <div className="dark:border-t-white py-2">
      <Carousel>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <div className="flex flex-col items-center">
                <p className="text-2xl m-4">{review.title}</p>
                <p className="text-2xl m-4">"{review.quote}"</p>
                <p className="text-xl">{review.reviewer}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
