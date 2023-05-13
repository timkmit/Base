import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IMG from './3333.png'
import "./style.css";


const Navbar = () => {

 
        return (
            <AppBar position="static" style={{background: '#fff', lineHeight: 0,}}>
                <Container>
    
                    <Container maxWidth="xl">
                        <Toolbar disableGutters={true}>
    
                            <Box
                                sx={{
                                    minWidth:"70px",
                                    marginTop: 0.5,
                                    marginBottom: 0.5
                                }}
                                className="imgLogo">
                                <img src={IMG} width={80}></img>
                            </Box>
    
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: {
                                        xs: "center",
                                        md: "fixed"
                                    },
                                    justifyContent: "center"
                                }}>
                                <Typography
                                    href="/"
                                    className="textHeader"
                                    fontSize={28}
                                    component="a"
                                    sx={{
                                        mr: 3,
                                        display: {
                                            xs: "none",
                                            md: "flex"
                                        },
                                        fontFamily: "monospace",
                                        fontWeight: 500,
                                        letterSpacing: ".2rem",
                                        color: "#2E3B55",
                                        textDecoration: "none",
                                        display: "inherit",
                                        marginRight: "90px",
                                        marginLeft: "20px"
                                    }}>
    
                                    БАЗА СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ
    
                                </Typography>
                                
    
                            </Box>
                            <Box className="phoneNumberNavbar" sx={{width:"1px"}}>
                                <Typography
                                sx={{
                                    overflow:"visible",
                                    position: "absolute",
                                    fontFamily: "monospace",
                                    fontWeight: 500,
                                    letterSpacing: ".2rem",
                                    color: "#2E3B55",
                                    textDecoration: "none",
                                    display: "absolute",
                                    marginRight: "0px",
                                    marginLeft: "0px",
                                    marginTop: "-15px",
                                }}>
                                    +7(918)4722246  
                                </Typography>
                            </Box>
                        </Toolbar>
    
                    </Container>
    
                </Container>
    
            </AppBar>
    
        );
}
 
export default Navbar;