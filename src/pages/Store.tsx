import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { FaSortAmountDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";


interface Book {
  id: number;
  name: string;
  author: string;
  price: number;
  oldPrice: number;
  rating: number;
  coverImage: string;
  discount: number;
}

const Store = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('./bookList.json')
      .then(response => response.json())
      .then(data => setBooks(data.books))
      .catch(error => console.error('Error to fetch books', error))
  }, [])

  console.log(books)

  return (
    <>
      <NavBar />
      <div className="flex gap-5">
        <div className="hidden md:flex w-1/3 h-screen">
          <div className="p-4 w-full">
            <p className="text-lg font-semibold">Filters</p>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Author</AccordionTrigger>
                  <AccordionContent>
                    <Input placeholder="Enter author name" type="text" />
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Munshi Premchand</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Paulo Coelho</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Harper Lee</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>George Orwell</span></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Publisher</AccordionTrigger>
                  <AccordionContent>
                    <Input placeholder="Enter author name" type="text" />
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Munshi Premchand</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Paulo Coelho</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Harper Lee</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>George Orwell</span></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Price</AccordionTrigger>
                  <AccordionContent>
                    <p><Checkbox />  <span>Under 100</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>100 - 200</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>200 - 300</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Over 300</span></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Laguage</AccordionTrigger>
                  <AccordionContent>
                    <Input placeholder="Enter author name" type="text" />
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Hindi</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>English</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Maithili</span></p>
                  </AccordionContent>
                  <AccordionContent>
                    <p><Checkbox />  <span>Vaijika</span></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="md:border-l-2">
          <div className="flex justify-between px-4 pt-4">
            <div>
              <p className="text-3xl font=bold">Books</p>
              <p className="text-sm text-gray-400">Showing 25 books</p>
            </div>
            <div className="hidden md:flex">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Relevance">Relevance</SelectItem>
                  <SelectItem value="Price: Low to High">Price: Low to High</SelectItem>
                  <SelectItem value="Price: High to Low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-4 md:hidden">
              <Drawer>
                <DrawerTrigger className="flex text-lg items-center"><FaSortAmountDown className="mr-1" /> <p>Sort by</p></DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="flex"><FaSortAmountDown className="mr-1" /> <p>Sort by</p></DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4 flex flex-col gap-2 border-b-2">
                    <div className="h-12 px-4 content-center hover:bg-gray-200 hover:rounded-md">
                      <p className="text-lg">Relevance</p>
                    </div>
                    <div className="h-12 px-4 content-center hover:bg-gray-200 hover:rounded-md">
                      <p className="text-lg">Price: Low to High</p>
                    </div>
                    <div className="h-12 px-4 content-center hover:bg-gray-200 hover:rounded-md">
                      <p className="text-lg">Price: High to Low</p>
                    </div>
                  </div>
                  <div className="flex justify-between h-12">
                    <div className="content-center w-full">
                      <p className="text-center text-xl">Reset</p>
                    </div>
                    <p className="text-3xl text-gray-400">|</p>
                    <div className="content-center w-full">
                      <p className="text-center text-xl text-green-800">Apply</p>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
              <Drawer>
                <DrawerTrigger className="flex text-lg items-center"><CiFilter className="mr-1" /> <p>Filter</p></DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="flex"><CiFilter className="mr-1" /> <p>Filter</p></DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4 w-full">
                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Author</AccordionTrigger>
                          <AccordionContent>
                            <Input placeholder="Enter author name" type="text" />
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Munshi Premchand</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Paulo Coelho</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Harper Lee</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>George Orwell</span></p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                    </div>
                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Publisher</AccordionTrigger>
                          <AccordionContent>
                            <Input placeholder="Enter author name" type="text" />
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Munshi Premchand</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Paulo Coelho</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Harper Lee</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>George Orwell</span></p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Price</AccordionTrigger>
                          <AccordionContent>
                            <p><Checkbox />  <span>Under 100</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>100 - 200</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>200 - 300</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Over 300</span></p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Laguage</AccordionTrigger>
                          <AccordionContent>
                            <Input placeholder="Enter author name" type="text" />
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Hindi</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>English</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Maithili</span></p>
                          </AccordionContent>
                          <AccordionContent>
                            <p><Checkbox />  <span>Vaijika</span></p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                  <div className="flex justify-between h-12 -mt-4">
                    <div className="content-center w-full">
                      <p className="text-center text-xl">Reset</p>
                    </div>
                    <p className="text-3xl text-gray-400">|</p>
                    <div className="content-center w-full">
                      <p className="text-center text-xl text-green-800">Apply</p>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 px-4 py-4">
            {books.map((book) => (
              <Card key={book.id}>
                <CardHeader>
                  <img className="cover-img" src={book.coverImage} alt="cover-image" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{book.name}</CardTitle>
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">{book.author}</p>
                  <p><span className="text-5x1 font-semibold">₹{book.price}   </span><span className="line-through text-9">{book.oldPrice}</span><span className="text-green-600">   {book.discount}%</span></p>
                  <Button className="w-full mt-4">Add to Card</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default Store