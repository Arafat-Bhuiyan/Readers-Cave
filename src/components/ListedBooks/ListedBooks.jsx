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


    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Books</h2>

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
            {/* {activeTab === 'read' ? (
        <div>
          {readBooks.length > 0 ? (
            readBooks.map((book) => (
              <div key={book.bookId} className="flex justify-between items-center shadow-lg p-5 mb-3">
                <div>
                  <img src={book.image} alt={book.bookName} className="w-[100px] h-[150px]" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold">{book.bookName}</h3>
                  <p className="text-sm">By: {book.author}</p>
                  <p className="text-sm">Published: {book.yearOfPublishing}</p>
                  <p className="text-sm">Pages: {book.totalPages}</p>
                </div>
                <div>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No books in your reading list.</p>
          )}
        </div>
      ) : (
        <div>
          {wishlistBooks.length > 0 ? (
            wishlistBooks.map((book) => (
              <div key={book.bookId} className="flex justify-between items-center shadow-lg p-5 mb-3">
                <div>
                  <img src={book.image} alt={book.bookName} className="w-[100px] h-[150px]" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold">{book.bookName}</h3>
                  <p className="text-sm">By: {book.author}</p>
                  <p className="text-sm">Published: {book.yearOfPublishing}</p>
                  <p className="text-sm">Pages: {book.totalPages}</p>
                </div>
                <div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No books in your wishlist.</p>
          )}
        </div>
      )} */}
            {
                activeTab === 'read' ? (
                    <div>
                        {
                            readLists.length > 0 ? (<div>
                                <h2>Read Booklist: {readLists.length}</h2>
    
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
                                <h2>Wishlist Booklist: {wishlistLists.length}</h2>

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

/*
i. image
ii. bookName
iii. author
iv. category
v. tags
vi. totalPages
vii. publisher
viii. yearOfPublishing
ix. rating
x. A button named View Details
*/