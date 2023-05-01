import * as React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Contacts from "../../pages/Contacts";
import Documents from "../../pages/Documents";
import Categories from "../../pages/Categories";
import './style.css'

const UnderHeader = () => {

    return (
        <> < ButtonGroup variant = "text" aria-label = "text button group" color = "inherit" > 
        <Link className="pagesLink" to="/">

            <Button
                className="pagesText"
                sx={{
                    my: 0.1,
                    color: "#2E3B55",
                    display: "block",
                    fontSize: "16px"
                }}>ГЛАВНАЯ
            </Button>
        </Link>

        <Link className="pagesLink" to="/items">

            <Button
                className="pagesText"
                sx={{
                    my: 0.1,
                    color: "#2E3B55",
                    display: "block",
                    fontSize: "16px"
                }}>КАТЕГОРИИ
            </Button>
        </Link>

        <Link className="pagesLink" to="/doc">
            <Button
                sx={{
                    my: 0.1,
                    color: "#2E3B55",
                    display: "block",
                    fontSize: "16px"
                }}>ДОКУМЕНТЫ
            </Button>
        </Link>

        

        <Link className="pagesLink" to="/about">
            <Button
                sx={{
                    my: 0.1,
                    color: "#2E3B55",
                    display: "block",
                    fontSize: "16px"
                }}>О НАС
            </Button>
        </Link>

    </ButtonGroup>

    <Routes>

        <Route path="/categories" element={<Categories/>}></Route>

        <Route path="/documents" element={<Documents/>}></Route>

        <Route path="/contacts" element={<Contacts/>}></Route>

    </Routes>

</>

    );
}

export default UnderHeader;