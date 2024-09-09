const getStoredReadingList = () => {
    const storedReadingList = localStorage.getItem('reading-list');
    if (storedReadingList) {
        return JSON.parse(storedReadingList);
    }
    return [];
}

const saveReadingListToLocalStorage = id => {
    const storedReadingList = getStoredReadingList();
    const exists = storedReadingList.find(bookId => bookId === id);
    if (!exists) {
        storedReadingList.push(id);
        localStorage.setItem('reading-list', JSON.stringify(storedReadingList));
        return true;
    }
    else {
        return false;
    }
}

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        return JSON.parse(storedWishlist)
    }
    return [];
}

const saveWishlistToLocalStorage = id => {
    const storedWishlist = getStoredWishlist();
    const existsInWishlist = storedWishlist.find(bookId => bookId === id);
    const storedReadingList = getStoredReadingList();
    const existsInReadingList = storedReadingList.find(bookId => bookId === id);
    if (!existsInWishlist && !existsInReadingList) {
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
        return true;
    }
    else {
        return false;
    }
}

export {
    getStoredReadingList,
    saveReadingListToLocalStorage,
    getStoredWishlist,
    saveWishlistToLocalStorage
}