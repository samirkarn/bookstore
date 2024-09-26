
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { useEffect, useState } from "react"


const BuyerSays = () => {
    const [testinomials, setTestinomials] = useState([])

    useEffect(()=> {
        fetch('/buyersSays.json')
        .then(response => response.json())
        .then(data => setTestinomials(data.testimonials))
        .catch(error => console.error("Error fetching the testimonials:", error));
    },[])
    console.log(testinomials)

    return (
        <div className="relative bg-white mt-12">
            <div className="max-w-10x2 mx-auto px-4">
                <h1 className="font-bold  text-2xl md:text-4xl mb-5">Our Buyes Says</h1>
                <Carousel>
                        <CarouselContent>
                            {testinomials.map((testimonial: any) => (
                                <CarouselItem key={testimonial.id}>
                                    <Card className="px-3 md:px-20 h-70 bg-gray-900 py-4">
                                        <CardContent>
                                            <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
                                                <p className="text-white text-justify"><span className="text-6xl font-extrabold">"</span> {testimonial.testimonial}</p>
                                                <div className="w-1/2 text-center">
                                                    <img className="rounded-full m-auto" src={testimonial.image} alt={testimonial.name} />
                                                    <p className="text-white font-semibold mt-2">{testimonial.name}</p>
                                                    <p className="text-gray-300 text-xs">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselNext className="right-0 md:right-10"/>
                        <CarouselPrevious className="left-0 md:left-10"/>
                    </Carousel>
            </div>
        </div>
    )
}

export default BuyerSays