
import { useEffect, useState } from "react";
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
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface Book {
    id: number;
    name: string;
    author: string;
    price: number;
    oldPrice: number;
    rating: number;
    coverImage: string;
}

const LatestBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [topRatedBooks, setTopRatedBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch("/bookList.json")
            .then(response => response.json())
            .then(data => setBooks(data.books))
            .catch(error => console.error("Error fetching the books:", error));
    }, []);
    console.log(books)

    useEffect(() => {
        const TopRatedBooks = books.filter(book => book.rating > 4.7)
        setTopRatedBooks(TopRatedBooks)
    }, [books])
    console.log(topRatedBooks)

    return (
        <div className="relative bg-white mt-12">
            <div className="max-w-10x2 mx-auto px-4">
                <div>
                    <div className="flex flex-row justify-between items-baseline">
                        <h1 className="font-bold text-2xl md:text-4xl mb-5">Latest Books</h1>
                        <Link to='/store' className="text-blue-900 underline">View All</Link>
                    </div>
                    <Carousel>
                        <CarouselContent>
                            {books.map((book: any) => (
                                <CarouselItem key={book.id} className="basis-1/2 md:basis-1/5">
                                    <Card>
                                        <CardHeader>
                                            <img className="h-40 md:h-60" src={book.coverImage} alt="cover-image" />
                                        </CardHeader>
                                        <CardContent>
                                            <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{book.name}</CardTitle>
                                            <p className="whitespace-nowrap overflow-hidden text-ellipsis">{book.author}</p>
                                            <p><span className="text-5x1 font-semibold">₹{book.price}   </span><span className="line-through text-9">{book.oldPrice}</span><span className="text-green-600">   {book.discount}%</span></p>
                                            <Link to='/book-details'>
                                                <Button className="w-full mt-4">Add to Card</Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselNext />
                        <CarouselPrevious />
                    </Carousel>
                </div>
                <div>
                    <div className="flex flex-row justify-between items-baseline">
                        <h1 className="font-bold  text-2xl md:text-4xl my-5">Top Reads</h1>
                        <Link to='/store' className="text-blue-900 underline">View All</Link>
                    </div>
                    <Carousel>
                        <CarouselContent>
                            {topRatedBooks.map((book: any) => (
                                <CarouselItem key={book.id} className="basis-1/2 md:basis-1/5">
                                    <Card>
                                        <CardHeader>
                                            <img className="h-40 md:h-60" src={book.coverImage} alt="cover-image" />
                                        </CardHeader>
                                        <CardContent>
                                            <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{book.name}</CardTitle>
                                            <p className="whitespace-nowrap overflow-hidden text-ellipsis">{book.author}</p>
                                            <p><span className="text-5x1 font-semibold">₹{book.price}   </span><span className="line-through text-9">{book.oldPrice}</span><span className="text-green-600">   {book.discount}%</span></p>
                                            <Link to='/book-details'>
                                                <Button className="w-full mt-4">Add to Card</Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselNext />
                        <CarouselPrevious />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default LatestBooks