import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadingListToLocalStorage, saveWishlistToLocalStorage } from "../utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const book = books.find(book => book.bookId === intId)
    const handleRead = () => {
        const isAdded = saveReadingListToLocalStorage(intId);
        isAdded ?
        toast('You have successfully added') :
        toast('You have already added')
    }
    const handleWishlist = () => {
        const isAdded = saveWishlistToLocalStorage(intId);
        isAdded ?
        toast('You have successfully added') : 
        toast('You have already added')
    }

    return (
        <div>
            <div key={book.bookId} className="flex justify-between flex-row h-full py-5 px-3 shadow-xl">
                <div className="flex items-center justify-center py-5 bg-slate-100 rounded-lg w-1/2">
                    <img className="w-[425px] h-[564px]" src={book.image} alt="" />
                </div>
                <div className="text-left w-1/2 p-5">
                    <h2 className="text-3xl font-bold my-4">{book.bookName}</h2>
                    <p className="text-xl font-medium my-4">By : {book.author}</p>
                    <div className="border-b border-slate-500"></div>

                    <p className="text-xl font-medium my-4">Category : {book.category}</p>
                    <div className="border-b border-slate-500"></div>

                    <p className="text-lg font-normal my-4"><span className="font-bold">Review :</span> {book.review}</p>
                    <p>Tag : {book.tags.map((tag, index) => <span key={index} className="border border-white bg-slate-100 text-green-500 font-medium text-sm px-3 py-1 ml-1 my-5 rounded-2xl">#{tag}</span>)}</p>
                    <div className="border-b border-slate-500 mt-4"></div>

                    <div className="text-sm font-normal my-4 text-slate-400">
                        <p>Number of Pages:
                            <span className="text-black font-bold ml-1">{book.totalPages}</span>
                        </p>
                        <p>Publisher: 
                            <span className="text-black font-bold ml-1">{book.publisher}</span>
                        </p>
                        <p>Year of Publishing: 
                            <span className="text-black font-bold ml-1">{book.yearOfPublishing}</span>
                        </p>
                        <p>Rating: 
                            <span className="text-black font-bold ml-1">{book.rating}</span>
                        </p>                      
                    </div>
                    <div className="flex gap-2 mt-7">
                            <button onClick={handleRead} className="border border-slate-400 hover:bg-slate-100 py-2 px-4 font-bold rounded-md">Read</button>
                            <button onClick={handleWishlist} className="border border-white bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 font-bold rounded-md">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
