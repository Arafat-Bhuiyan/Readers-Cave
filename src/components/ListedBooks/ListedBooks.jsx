import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadingList, getStoredWishlist } from "../utility/localstorage";
import ReadBookList from "../ReadBookList/ReadBookList";
import Wishlist from "../Wishlist.jsx/Wishlist";

const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState('read'); // Controls which tab is active

    // Function to switch between tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const books = useLoaderData()

    // set read lists   
    const [readLists, setReadLists] = useState([])
    const [displayReadLists, setDisplayReadLists] = useState([])

    useEffect(() => {
        const storedReadingList = getStoredReadingList();
        if (books.length > 0) {
            const readLists = books.filter(book => storedReadingList.includes(book.bookId));

            setReadLists(readLists);
            setDisplayReadLists(readLists);
        }
    }, [])

    // set wishlist lists
    const [wishlistLists, setWishlistLists] = useState([])
    const [displayWishlistLists, setDisplayWishlistLists] = useState([])

    useEffect(() => {
        const storedWishlist = getStoredWishlist();
        if (books.length > 0) {
            const wishlistLists = books.filter(book => storedWishlist.includes(book.bookId));

            setWishlistLists(wishlistLists);
            setDisplayWishlistLists(wishlistLists);
        }
    }, [])

    console.log(readLists)

    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-4 bg-slate-100 rounded-lg my-4">Books</h2>
            {/* Tab navigation */}
            <div className="flex gap-5 mb-5 justify-center">
                <button
                    className={`border-b-2 pb-2 ${activeTab === 'read' ? 'border-green-500' : ''}`}
                    onClick={() => handleTabClick('read')}
                >
                    Read Books
                </button>
                <button
                    className={`border-b-2 pb-2 ${activeTab === 'wishlist' ? 'border-green-500' : ''}`}
                    onClick={() => handleTabClick('wishlist')}
                >
                    Wishlist Books
                </button>
            </div>
            
            {/* Conditionally render the lists based on active tab */}
            {
                activeTab === 'read' ? (
                    <div>
                        {
                            readLists.length > 0 ? (<div>
                                <ul>
                                    {
                                        displayReadLists.map(book => <ReadBookList key={book.bookId} book={book}></ReadBookList>)
                                    }
                                </ul>
                            </div>)
                                : (<p>No books in your reading list.</p>)
                        }

                    </div>
                ) : (
                    <div>
                        {
                            wishlistLists.length > 0 ? (<div>
                                <ul>
                                    {
                                        displayWishlistLists.map(book => <Wishlist key={book.bookId} book={book}></Wishlist>)
                                    }
                                </ul>

                            </div>)
                                : (<p>No books in your wishlist.</p>)
                        }
                    </div>
                ) 
            }
        </div>
    );
};

export default ListedBooks;