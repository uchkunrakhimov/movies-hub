import axios from "axios"
import { useEffect, useState } from "react"


import { Navbar } from 'flowbite-react'

const URL = 'https://yts.mx/api/v2/list_movies.json'
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(URL).then((res) => {
      setMovies(res.data.data.movies);
    });

  }, []);

  if (!movies) return null;

  return (
    <main className="mt-5">

      <div className="container">
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand
            to="/"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              href="/navbars"
              active={true}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              to="/navbars"
            >
              About
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              Services
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              Pricing
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <pre className="mt-5">
          {
            movies.map(movie => (
              <div key={movie.id}>
                <p>{movie.title}</p>
              </div>
            ))
          }
        </pre>
      </div>
    </main>
  )
}