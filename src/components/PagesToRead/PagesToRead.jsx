import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadingList } from '../utility/localstorage';

const PagesToRead = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredReadingList();
        if (books.length > 0) {
            const readBooks = books.filter(book => storedReadBooks.includes(book.bookId));
            setReadBooks(readBooks);
        }
    }, [books]);

    // Determine the maximum number of pages to scale the bars
    const maxPages = Math.max(...readBooks.map(book => book.totalPages), 0);

    // Check if there are no books in the reading list
    if (readBooks.length === 0) {
        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h2>No books in your reading list</h2>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '500px' }}>
            <svg width="800" height="400" style={{ overflow: 'visible' }}>
                {/* Y-Axis */}
                <line x1="50" y1="0" x2="50" y2="300" stroke="black" />
                {/* Y-Axis Labels */}
                {[0, maxPages / 2, maxPages].map((value, i) => (
                    <text key={i} x="30" y={300 - (value / maxPages) * 300} textAnchor="end" fontSize="12" fill="black">
                        {Math.round(value)}
                    </text>
                ))}
                
                {/* X-Axis */}
                <line x1="50" y1="300" x2="750" y2="300" stroke="black" />
                {/* Bars and Book Titles */}
                {readBooks.map((book, index) => (
                    <g key={book.bookId} transform={`translate(${100 + index * 130}, 0)`}>
                        {/* Custom Bar Shape */}
                        <polygon
                            points={`50,${300 - (book.totalPages / maxPages) * 300} 80,300 20,300`}
                            fill={index % 2 === 0 ? '#FF7043' : '#42A5F5'}
                        />
                        {/* Pages Count Centered Above Bar */}
                        <text
                            x="50"
                            y={`${280 - (book.totalPages / maxPages) * 300}`}
                            textAnchor="middle"
                            style={{ fontSize: '12px', fill: '#000' }}
                        >
                            {book.totalPages}
                        </text>
                        {/* Book Name Centered Below the Bar */}
                        <text
                            x="50"
                            y="320"
                            textAnchor="middle"
                            style={{ fontSize: '12px', fill: 'gray' }}
                        >
                            {book.bookName}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default PagesToRead;
