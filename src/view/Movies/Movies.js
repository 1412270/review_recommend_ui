import {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import MoviesApi, {endpoints} from "../../api/MoviesApi";

export default function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const loadMovies = async () => {
            let res = await MoviesApi.get(endpoints['movies'])
            setMovies(res.data)
            console.log(res.data)
        }
        loadMovies()
    }, [])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        {/*{movies.map(c => <p>{c.title}</p>)}*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}