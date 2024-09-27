import React from 'react'
import SideMenuBar from '@/components/SideMenuBar'
import SellerTopMenu from '@/components/SellerTopMenu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from 'react-router-dom'


const BooksManagement = () => {
    const [date, setDate] = React.useState<Date>()

    return (
                <div className='w-full'>
                    <div className=''>
                        <div className='flex flex-col gap-2 md:flex-row md:items-center justify-between'>
                            <div >
                                <p className='text-2xl font-bold'>Books Management</p>
                            </div>
                            <div className='flex gap-2 '>
                                <Button variant="outline">Export</Button>
                                <Link to='/books/add-book'>
                                    <Button className='items-center'><span className='text-xl font-bold mr-2'>+</span> Add New Book</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 mt-4'>
                            <div>
                                <Input placeholder='Seach by book' />
                            </div>
                            <div>
                                <Input placeholder='Seach by Author' />
                            </div>
                            <div>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                                            {date ? format(date, "PPP") : <span>Select date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className='flex gap-2'>
                                <Button>Search</Button>
                                <Button variant="outline">Reset</Button>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>ID</TableHead>
                                        <TableHead>Book Name</TableHead>
                                        <TableHead>Author</TableHead>
                                        <TableHead>Publisher</TableHead>
                                        <TableHead>Date Listing</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>ISBN</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Godan</TableCell>
                                        <TableCell>Munshi Premchand</TableCell>
                                        <TableCell>John publication</TableCell>
                                        <TableCell>12/12/2024 12:12 AM</TableCell>
                                        <TableCell>500</TableCell>
                                        <TableCell>9876543210</TableCell>
                                        <TableCell>
                                            <Link to='#'>
                                                <p className='underline text-blue-600'>View</p>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
    )
}

export default BooksManagement