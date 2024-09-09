import bannerimg from '../../../img/banner.png'

const Banner = () => {
    return (
        <div>
                        <div>
                <div className='border rounded-xl flex justify-evenly items-center bg-slate-200 my-10 px-20'>
                    <div>
                        <h1 className='text-5xl font-bold mb-8'>
                        Books to freshen up your bookshelf
                        </h1>
                        <button className='text-white bg-green-500 hover:bg-green-600 rounded-lg px-6 py-3 font-semibold'>View The List</button>
                    </div>
                    <div>
                        <img src={bannerimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;