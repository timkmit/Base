import './style2.css'
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
import SelectButton from '../UI/selectButton';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';



const InfoUnderHeader2 = () => {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark'
            ? '#1A2027'
            : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));

    return (


        
        <Box className="wrapp">

<Grid container spacing={2} columns={16} >
            <Grid item xs={10} >
                <Item sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className="gridContent2">
                <Box className="gridContent" gap={2}>
                    <Box className="gridItem">
                        <Typography
                            paddingTop={5}
                            variant="h3"
                            sx={{
                                fontWeight: 300,
                                color: "#2E3B55",
                                textAlign: "left"
                            }}
                            className='textIn'>
                            Щебень и нерудные строительные материалы с доставкой
                        </Typography>
                    </Box>
                    <Box className="gridItem">
                        <Typography
                            paddingTop={3}
                            paddingBottom={5}
                            variant="h4"
                            sx={{
                                fontWeight: 300,
                                color: "#2E3B55",
                                textAlign: "left",
                                
                            }}
                            className='textIn'>
                            по Павловскому округу
                        </Typography>
                    </Box>

                </Box>
                </Item>
            </Grid>
            <Grid item xs={6}  > 
                <Item sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className="gridContent3">
                
                <Grid item  className='selectWindow' >
                    <Typography>
                        Оставьте заявку!
                    </Typography>
                    <Item><SelectButton/> </Item>
                </Grid>
                <Grid item >
                    <Item>
                    <TextField id="outlined-basic" label="Объем (20кг)" variant="outlined" />
                        </Item>
                </Grid>
                <Grid item >
                    <Item>
                    <TextField id="outlined-basic" label="Адрес доставки" variant="outlined" />
                    </Item>
                </Grid>
                <Grid item >
                    <Item>
                    <TextField id="outlined-basic" label="Номер телефона" variant="outlined" />
                    </Item>
                </Grid>
                <Grid item >
                    <Item>
                    <Button variant="contained" color="success">Заказать звонок</Button>
                    </Item>
                </Grid>
                
{/* 
                <Box className="itemsOfUnd">


                    
                    <Box className="itemHeader">
                        <Card.Img className='cardImg2' variant="top" src={card}/>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                color: "#2E3B55"
                            }}>
                            Приятные цены
                        </Typography>
                    </Box>

                    <Box className="itemHeader">
                        <Card.Img className='cardImg2' variant="top" src={delivery}/>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                color: "#2E3B55"
                            }}>
                            Быстрая доставка
                        </Typography>
                    </Box>

                    <Box className="itemHeader">
                        <Card.Img className='cardImg2' variant="top" src={cal}/>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                color: "#2E3B55"
                            }}>
                            Универсальный график
                        </Typography>
                    </Box> 

                </Box>*/}

            
                </Item>
            </Grid>
        </Grid>
            
            <Grid container >
            <Box className="hideModal">
            <Grid item xs={10} className="hideModalInside" > 
            <Item sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className="HgridContent2">
                <Box className="HgridContent" gap={2}>
                    <Box className="HgridItem">
                        <Typography
                            paddingTop={5}
                            variant="h4"
                            sx={{
                                fontWeight: 300,
                                color: "#2E3B55",
                                textAlign: "left"
                            }}
                            className='HtextIn'>
                            Щебень и нерудные строительные материалы с доставкой
                        </Typography>
                    </Box>
                    <Box className="HgridItem">
                        <Typography
                            paddingTop={3}
                            paddingBottom={5}
                            variant="h5"
                            sx={{
                                fontWeight: 300,
                                color: "#2E3B55",
                                textAlign: "left",
                                
                            }}
                            className='HtextIn'>
                            по Павловскому округу
                        </Typography>
                    </Box>

                </Box>
                </Item>
                </Grid>
                </Box>
            </Grid>
            
        </Box>
    );
}

export default InfoUnderHeader2;