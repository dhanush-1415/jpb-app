import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles((theme) => ({
  circularImage: {
    borderRadius: '50%',
    maxWidth: '170px', 
    margin: 'auto',
    display: 'block',
  },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Filipino',
    'Indonesian',
    'Indian',
    'Myanmese',
    'Sri Lankan',
  ];

const FilterList = () => {


    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

    const classes = useStyles();


    const [personName, setPersonName] = React.useState([]);
    const [age, setAge] = React.useState('');


    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };


    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };

    const handleHelperBio = (code) => {
        window.location.href = `/helper/${code}`
    }

  return(
    <div>
    <div id="wrapper">
    <Header/>
    <div className="clear"></div>

    <div className="clear"></div>
    <div className="main-content-wrapper"> 
    
        <div className="bannerWrapper">
        <div className="banner inner-banner">
            <div className="inner-banner-img img-holder img-cover">
            <figure><img src="images/banner-news.jpg" alt="JPB"/></figure>
            </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape">
                    <img src="images/inner-banner-shape.png" alt=""/>
                    </div> 
        </div>
        <div className="clear"></div>
    
        <section className="fullcontainer news-section1" data-aos="fade-up">
        <div className="float-icon s5 left-img-1 tp15 left5" data-aos="fade-right"><img src="images/left-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s7 right-img-2 tp10 right5" data-aos="fade-left"><img src="images/right-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s7 we-img-3 tp20 right30" data-aos="fade-left"><img src="images/we-img-3.png" alt="" className="responsive"/></div>
        <div className="float-icon we-img-1 tp25 left25" data-aos="fade-right"><img src="images/we-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s6 we-img-4 tp45 right5" data-aos="fade-left"><img src="images/we-img-4.png" alt="" className="responsive"/></div>
        <div className="inner-container">
            <div className="container">
                <div className="pageTitle text-center title-border">
                <h2>Helpers</h2>
                </div>

                <Grid>
                    <Grid container>
                        <Accordion sx={{width:{md:"95%" , sm:'100%' , xs:'100%'}}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                                        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:'bold'}}>
                                            Filters
                                        </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid>
                                    <Grid container justifyContent='space-between'>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl sx={{ width:'100%'}}>
                                                <InputLabel id="demo-multiple-checkbox-label">Nationality</InputLabel>
                                                <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Nationality" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleAgeChange}
                                                >
                                                <MenuItem value={23-25}>23 to 25</MenuItem>
                                                <MenuItem value={26-30}>26 to 30</MenuItem>
                                                <MenuItem value={31-40}>31 to 40</MenuItem>
                                                <MenuItem value={41}>41 and above</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Height</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Height"
                                                onChange={handleAgeChange}
                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Weight</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Weight"
                                                onChange={handleAgeChange}
                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">English Proficiency</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="English Proficiency"
                                                onChange={handleAgeChange}
                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl sx={{ width:'100%'}}>
                                                <InputLabel id="demo-multiple-checkbox-label">Helper Type</InputLabel>
                                                <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Helper Type" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl sx={{ width:'100%'}}>
                                                <InputLabel id="demo-multiple-checkbox-label">Working Experience</InputLabel>
                                                <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Working Experience" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl sx={{ width:'100%'}}>
                                                <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
                                                <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Skills" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl sx={{ width:'100%'}}>
                                                <InputLabel id="demo-multiple-checkbox-label">Religion</InputLabel>
                                                <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Religion" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={5.9} md={2.9} mt={1}>
                                            <FormControl sx={{ width:'100%'}}>
                                                <InputLabel id="demo-multiple-checkbox-label">Marital Status</InputLabel>
                                                <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Marital Status" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container justifyContent='space-between' mt={2} >
                                        <Grid item>
                                            <Button variant="contained">Reset All</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained">Search</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>

                <Grid>
                    <Grid container sx={{justifyContent: {md:"space-between" , sm:'center' , xs:'center'}}}>
                        {items && items.length && items.map((item , index) => (
                            <Grid item md={3.9} mt={4}>
                                <Card sx={{ maxWidth: 305 }}>
                                    <CardMedia
                                        className={classes.circularImage}
                                        component="img"
                                        image="https://image.freepik.com/free-vector/user-icon_126283-435.jpg"
                                        title="profile image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:'bold'}}>
                                            FATURAHMAWATI
                                        </Typography>
                                        <Grid sx={{width: 200}}>
                                            <Grid container justifyContent='space-between' >
                                                <Grid item>
                                                    <Typography variant="body2" color="text.secondary">
                                                        S$ 500
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Indonesian
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container justifyContent='space-between' >
                                                <Grid item>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Muslim
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" color="text.secondary">
                                                        35 yr Old
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={(e)=>{handleHelperBio("123123")}}>More Details ...</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>


            </div>
        </div>
        <div className="footer-space"></div>
        </section>
    
        
        <div className="clear"></div>
    </div>

    <div className="clear"></div>
    <div className="pushContainer"></div>
    <div className="clear"></div>
    </div>
    <Footer/>
    <QuickSearch/>
    </div>
  );
}
export default FilterList;

