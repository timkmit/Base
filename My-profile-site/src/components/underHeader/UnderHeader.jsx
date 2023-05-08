import * as React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
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

        <Link className="pagesLink" to="/categories">

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

        <Link className="pagesLink" to="/documents">
            <Button
            className="pagesText"
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
            className="pagesText"
                sx={{
                    my: 0.1,
                    color: "#2E3B55",
                    display: "block",
                    fontSize: "16px"
                }}>О НАС
            </Button>
        </Link>

    </ButtonGroup>

    

</>

    );
}

export default UnderHeader;