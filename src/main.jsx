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
      },
      {
        path: "/listed_books",
        element: <ListedBooks />,
      },
      {
        path: "/pages_to_read",
        element: <PagesToRead />,
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
