import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import About from './components/About/About.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
const router =createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bf38d8fa692a40e893e467b69900c127')
      },
      {
        path: "/listed_books",
        element: <ListedBooks />,
        loader: () => fetch('../books.json')
      },
      {
        path: "/pages_to_read",
        element: <PagesToRead />,
        loader: () => fetch('../books.json')
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch('../books.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
