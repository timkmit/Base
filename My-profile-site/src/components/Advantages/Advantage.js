import './style.css'
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
import SelectButton from '../UI/selectButton';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';



const Advantage = () => {

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


        
        <Box className="Awrapp">

<Grid container spacing={2} columns={16} >
            <Grid item xs={10} >
                <Item sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className="AgridContent2">
                <Box className="AgridContent" gap={2}>
                    <Box className="AgridItem">
                        <Typography
                            paddingTop={5}
                            variant="h4"
                            sx={{
                                fontWeight: 300,
                                color: "#fff",
                                textAlign: "left"
                            }}
                            className='textIn'>
                            Заказ с строительной базы -
                        </Typography>
                    </Box>
                    <Box className="AgridItem">
                        <Typography
                            paddingTop={3}
                            paddingBottom={5}
                            variant="h5"
                            sx={{
                                fontWeight: 300,
                                color: "#fff",
                                textAlign: "left",
                                
                            }}
                            className='AtextIn'>
                                это быстро, удобно и экономично! Получите все необходимые стройматериалы в одном месте, без лишних затрат на поиск и транспортировку.
                        </Typography>
                    </Box>

                </Box>
                </Item>
            </Grid>
            <Grid item xs={6}  > 
                <Item sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className="AgridContent3">
                
                <Grid item  className='AselectWindow' >
                    <Typography >
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

            
                </Item>
            </Grid>
        </Grid>
            
            <Grid container >
            <Box className="AhideModal">
            <Grid item xs={6} className="AhideModalInside" > 
                <Item sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className="AgridContent4">
                
                <Grid item  className='AselectWindow' >
                    <Typography className='ostavte'>
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
                </Item>
                </Grid>
                </Box>
            </Grid>
            
        </Box>
    );
}

export default Advantage;