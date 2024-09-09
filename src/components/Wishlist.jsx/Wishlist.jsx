import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-router-dom";

const Wishlist = ({book}) => {
    return (
        <div>
            <li className="flex gap-5 mb-5 border border-inherit	rounded-lg p-5">
                <div className="border border-white shadow p-3 rounded-lg bg-slate-100">
                    <img className="w-32 h-44" src={book.image} alt="" />
                </div>
                <div>
                    <h3 className="text-lg font-bold">{book.bookName}</h3>
                    <p className="text-sm font-medium my-2">By : {book.author}</p>

                    <div className="flex my-2 gap-2">
                    <p className="font-semibold">Tag : {book.tags.map((tag, index) => <span key={index} className="border border-white bg-slate-100 text-green-500 font-medium text-sm px-3 py-1 ml-1 my-5 rounded-2xl">#{tag}</span>)}</p>
                    <p className="text-slate-600 text-sm font-medium flex items-center"><CiLocationOn />
                    Year of Publisher: {book.yearOfPublishing}</p>
                    </div>

                    <div className="flex gap-5 my-2 text-xs font-normal text-slate-400">
                        <p className="flex items-center gap-1"><IoPeopleOutline /> Publisher: {book.publisher}</p>
                        <p className="flex items-center gap-1"><SiGoogledocs /> Page: {book.totalPages}</p>
                    </div>
                    <div className="border-b border-slate-300"></div>

                    <div className="flex gap-2">
                        <button className="border border-white bg-blue-100 text-blue-500 font-normal text-sm px-4 py-2 ml-1 my-5 rounded-3xl">Category: {book.category}</button>
                        <button className="border border-white bg-red-100 text-red-400 font-normal text-sm px-4 py-2 ml-1 my-5 rounded-3xl">Rating: {book.rating}</button>
                        <Link to={`/book/${book.bookId}`}>
                        <button className="border border-white bg-lime-500 hover:bg-lime-600 text-slate-100 font-normal text-sm px-4 py-2 ml-1 my-5 rounded-3xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Wishlist;