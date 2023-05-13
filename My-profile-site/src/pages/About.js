import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SelectButton from '../components/UI/selectButton';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import '../components/SecondInfoUnderHeader/style2.css'
import AboutStr from '../components/strUnderHeader/AboutStr';
import Mapp from '../components/map/Map';

export default function About() {
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
    
   
    <>
    <AboutStr/>
    <Box className="wrapp2">
      <Grid container>
        <Grid item xs={8} >
        <Typography

          paddingTop={5}
          variant="h4"
          sx={{
              fontWeight: 700,
              color: "#2E3B55",
              textAlign: "left"
          }}
          className='textIn2'>
          Мы - база строительных материалов, которая занимается продажей и доставкой сыпучих материалов по Павловскому району. 
      </Typography>
        <Typography
        
          paddingTop={5}
          variant="h5"
          sx={{
              fontWeight: 300,
              color: "#2E3B55",
              textAlign: "left"
          }}
          className='textIn2'>
            Мы являемся официальными дилерами Ленинградского кирпичного завода, что позволяет нам гарантировать своим клиентам самые выгодные цены и самое высокое качество кирпича.
          
      </Typography>
        

        </Grid>
        <Grid item xs={4}>

        <Item sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className="gridContent3">
                
                <Grid item  className='selectWindow' >
                    <Typography>
                        Ответим на все вопросы!
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
                  </Grid></Item>
        </Grid>
        <Grid item xs={8}>
        <Typography
          paddingTop={5}
          variant="h5"
          sx={{
              fontWeight: 300,
              color: "#2E3B55",
              textAlign: "left"
          }}
          className='textIn2'>
          Наша команда гордится тем, что мы не только предоставляем качественные строительные материалы, но и обеспечиваем быструю доставку в течение всего часа.
      </Typography>
        
        </Grid>
        <Grid item xs={8} >
        <Typography
          paddingTop={5}
          variant="h5"
          sx={{
              fontWeight: 300,
              color: "#2E3B55",
              textAlign: "left"
          }}
          className='textIn2'>
          Наш коллектив - дружный и профессиональный. Мы стремимся предоставлять своим клиентам наилучший сервис и всегда готовы помочь с выбором материалов для любых строительных проектов.
      </Typography>
        
        </Grid>
        <Grid item xs={8} >
        <Typography
          paddingTop={5}
          variant="h5"
          sx={{
              fontWeight: 300,
              color: "#2E3B55",
              textAlign: "left"
          }}
          className='textIn2'>
          Наша компания работает в области строительных материалов с 2013 года, что говорит о нашем богатом опыте и надежности в этой сфере. Если вы ищете надежного поставщика строительных материалов в Павловском районе, обращайтесь к нам. Мы будем рады помочь вам воплотить в жизнь любые строительные и ремонтные задумки.
      </Typography>
        
        </Grid>
        <Grid item xs={5}>

        
        </Grid>
        
      </Grid>
      <Typography className='hideText' sx={{fontWeight: '700', fontSize: '27px'}}>
      Мы - база строительных материалов, которая занимается продажей и доставкой сыпучих материалов по Павловскому району. 
Мы являемся официальными дилерами Ленинградского кирпичного завода, что позволяет нам гарантировать своим клиентам самые выгодные цены и самое высокое качество кирпича.
</Typography>
<Typography className='hideText' sx={{ fontSize: '27px'}}>
Наша команда гордится тем, что мы не только предоставляем качественные строительные материалы, но и обеспечиваем быструю доставку в течение всего часа.
</Typography>


<Typography className='hideText' sx={{ fontSize: '27px'}}>
Наш коллектив - дружный и профессиональный. Мы стремимся предоставлять своим клиентам наилучший сервис и всегда готовы помочь с выбором материалов для любых строительных проектов.
</Typography>

<Typography className='hideText' sx={{ fontSize: '27px'}}>
Наша компания работает в области строительных материалов с 2013 года, что говорит о нашем богатом опыте и надежности в этой сфере. Если вы ищете надежного поставщика строительных материалов в Павловском районе, обращайтесь к нам. Мы будем рады помочь вам воплотить в жизнь любые строительные и ремонтные задумки.
</Typography>

      
      
    </Box>
    <Mapp/>
    </>
    
  )
}
