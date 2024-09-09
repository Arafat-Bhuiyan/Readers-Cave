import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, rating, category } = book
    return (
        <div >
            <Link to={`/book/${bookId}`}>
                <div className="card flex flex-col h-full bg-base-100 w-96 py-5 px-3 shadow-xl">
                    {/* img */}
                    <div className="border border-white rounded-lg bg-slate-100 flex justify-center items-center mb-4">
                        <img src={image} className="w-32 h-40 my-4" />
                    </div>
                    {/* tags */}
                    <p>{
                        tags.map(tag => <span className="border border-white bg-slate-100 text-green-500 font-bold text-sm px-3 py-1 ml-1 my-5 rounded-2xl">{tag}</span>)
                    }</p>
                    <div className="my-4 pl-2">
                        <h2 className="text-2xl font-bold my-4">{bookName}</h2>
                        <p className="text-base font-medium my-4">By : {author}</p>
                        <div className="text-base font-medium flex justify-between">
                            <p>{category}</p>
                            <p className="flex items-center gap-1">{rating} <span className="text-lg"><CiStar /></span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;