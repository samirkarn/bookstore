import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function HeroSection() {
    return (
        <>
            <div className="relative bg-white">
                <div>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <img className="h-96 w-full" src="./images/book3.jpg" alt="book image" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="h-96 w-full" src="./images/book2.jpg" alt="book image" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="h-96 w-full" src="./images/book1.jpg" alt="book image" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNext />
                        <CarouselPrevious />
                    </Carousel>

                </div>
            </div>
        </>
    )
}

export default HeroSection;