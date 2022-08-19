/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputBase,
  Rating,
  TextField,
  Typography,
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { styles } from '../utils/styles';
import { theme } from '../components/Theme';
import Layout from '../components/Layout';
import CreateWizard from '../components/Stepper';
import { style } from '@mui/system';

function Create_post() {
  const [value, setValue] = useState('');
  const [revealSecondSection, setRevealSecondSection] = useState(false);
  const [revealThirdSection, setRevealThirdSection] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [television, setTelevision] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [washer, setWasher] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [cleaner, setCleaner] = useState(false);
  const [radio, setRadio] = useState(false);
  const [lift, setLift] = useState(false);
  const [others, setOthers] = useState(false);
  const [gender, setGender] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [notSpecific, setNotSpecific] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/`);
  };

  return (
    <Layout title='Create Post'>
      <Box sx={styles.createPostContainer}>
        <Box sx={styles.searchContainer}>
          <form style={styles.searchForm} onSubmit={submitHandler}>
            <Box sx={styles.searchInputContainer} style={{ flex: 2 }}>
              <Typography component='h1' variant='bold' sx={styles.searchTitle}>
                Location
              </Typography>
              <InputBase
                name='city'
                sx={styles.searchInput}
                placeholder='Which city do you prefer?'
                // onChange={queryChangeHandler}
              />
            </Box>
            <Box sx={styles.searchDivider} />
            <Box sx={styles.searchInputContainer} style={{ flex: 1 }}>
              <Typography component='h1' variant='bold' sx={styles.searchTitle}>
                Check&nbsp;In
              </Typography>
              <InputBase
                name='search'
                sx={styles.searchInput}
                placeholder='Add Dates'
                // onChange={queryChangeHandler}
              />
            </Box>
            <Box sx={styles.searchDivider} />
            <Box sx={styles.searchInputContainer} style={{ flex: 1 }}>
              <Typography component='h1' variant='bold' sx={styles.searchTitle}>
                Check&nbsp;Out
              </Typography>
              <InputBase
                name='search'
                sx={styles.searchInput}
                style={{ flex: 1 }}
                placeholder='Add Dates'
                // onChange={queryChangeHandler}
              />
            </Box>
            <Box sx={styles.searchDivider} />
            <Box sx={styles.searchInputContainer} style={{ flex: 1 }}>
              <Typography component='h1' variant='bold' sx={styles.searchTitle}>
                Guests
              </Typography>
              <InputBase
                name='search'
                sx={styles.searchInput}
                placeholder='Add Guests'
                // onChange={queryChangeHandler}
              />
            </Box>
          </form>

          <SearchRoundedIcon sx={styles.searchButton} />
        </Box>
        <CreateWizard activeStep={activeStep} />
        {/* TITLE */}
        <Box style={{ display: activeStep === 0 ? 'initial' : 'none' }}>
          <Box sx={styles.cpSection}>
            <Typography component='h1' variant='bold' sx={styles.cpTitle}>
              Enter the{' '}
              <Typography
                component='span'
                variant='bold'
                sx={styles.cpEmphasis}
              >
                Hotel/Place name
              </Typography>
              &nbsp;as
              <br />
              the title for your post
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.cpInputContainer}>
              <TextField
                fullWidth
                id='title'
                label='Enter title'
                defaultValue=''
                helperText=''
                variant='outlined'
                sx={styles.locationField}
              />
            </Box>
            <Button
              sx={styles.button}
              onClick={() => {
                setTitle(false);
                setActiveStep(1);
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
        {/* DESCRIPTION */}
        <Box style={{ display: activeStep === 1 ? 'initial' : 'none' }}>
          <Box sx={styles.cpSection}>
            <Typography component='h1' variant='bold' sx={styles.cpTitle}>
              Write a{' '}
              <Typography
                component='span'
                variant='bold'
                sx={styles.cpEmphasis}
              >
                short and catchy
                <br />
                description
              </Typography>
              &nbsp;about the place
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.cpInputContainer}>
              <TextField
                fullWidth
                id='title'
                label='Add description'
                defaultValue=''
                helperText=''
                variant='outlined'
                sx={styles.locationField}
              />
            </Box>
            <Box sx={styles.buttonContainer}>
              <Button
                sx={styles.button}
                onClick={() => {
                  setActiveStep(0);
                }}
              >
                Previous
              </Button>
              <Button
                sx={styles.button}
                onClick={() => {
                  setActiveStep(2);
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
        {/* LOCATION */}
        <Box style={{ display: activeStep === 2 ? 'initial' : 'none' }}>
          <Box sx={styles.cpSection}>
            <Typography component='h1' variant='bold' sx={styles.cpTitle}>
              Enter the{' '}
              <Typography
                component='span'
                variant='bold'
                sx={styles.cpEmphasis}
              >
                location
              </Typography>
              &nbsp;or chose
              <br />
              from the map
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.cpInputContainer}>
              <TextField
                fullWidth
                id='title'
                label='Add location'
                defaultValue=''
                helperText=''
                variant='outlined'
                sx={styles.locationField}
              />
              <Button sx={styles.mapButton}>Open map</Button>
            </Box>
            <Box sx={styles.buttonContainer}>
              <Button
                sx={styles.button}
                onClick={() => {
                  setActiveStep(1);
                }}
              >
                Previous
              </Button>
              <Button
                sx={styles.button}
                onClick={() => {
                  setActiveStep(3);
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
        {/* RATING */}
        <Box
          sx={styles.cpContainer}
          style={{ display: activeStep === 3 ? 'initial' : 'none' }}
        >
          <Box sx={styles.cpSection}>
            <Typography component='h1' variant='bold' sx={styles.cpTitle}>
              Add your{' '}
              <Typography
                component='span'
                variant='bold'
                sx={styles.cpEmphasis}
              >
                star rating
              </Typography>
              &nbsp;for
              <br />
              the place
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.cpInputContainer}>
              <Rating sx={styles.cpRating} />
            </Box>
            <Box sx={styles.buttonContainer}>
              <Button
                sx={styles.button}
                onClick={() => {
                  setActiveStep(2);
                }}
              >
                Previous
              </Button>
              <Button
                sx={styles.button}
                onClick={() => {
                  setActiveStep(4);
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Amenities */}
        <Box
          sx={styles.cpContainer}
          style={{ display: activeStep === 4 ? 'initial' : 'none' }}
        >
          <Box sx={styles.cpSection}>
            <Typography component='h1' variant='bold' sx={styles.cpTitle}>
              Choose the{' '}
              <Typography
                component='span'
                variant='bold'
                sx={styles.cpEmphasis}
              >
                amenities
              </Typography>
              <br />
              available at the place
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.cpInputContainer}>
              <Grid container spacing={0} sx={styles.amenitiesContainer}>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: television
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: television
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Television
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setTelevision(e.target.checked)}
                        checked={television}
                        name='television'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: wifi
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: wifi
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Wifi
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setWifi(e.target.checked)}
                        checked={wifi}
                        name='wifi'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: washer
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: washer
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Washer
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setWasher(e.target.checked)}
                        checked={washer}
                        name='washer'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: balcony
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: balcony
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Balcony
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setBalcony(e.target.checked)}
                        checked={balcony}
                        name='balcony'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: cleaner
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: cleaner
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Cleaner
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setCleaner(e.target.checked)}
                        checked={cleaner}
                        name='cleaner'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: radio
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: radio
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Radio
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setRadio(e.target.checked)}
                        checked={radio}
                        name='radio'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: lift
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: lift
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Lift
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setLift(e.target.checked)}
                        checked={lift}
                        name='lift'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    label={
                      <Typography
                        component='p'
                        variant='bold'
                        sx={styles.amenities}
                        style={{
                          backgroundColor: others
                            ? theme.palette.primary.main
                            : theme.palette.primary.lightAsh,
                          color: others
                            ? theme.palette.primary.white
                            : theme.palette.primary.black,
                        }}
                      >
                        Others
                      </Typography>
                    }
                    control={
                      <Checkbox
                        sx={{
                          '& .MuiSvgIcon-root': {
                            display: 'none',
                          },
                        }}
                        onClick={(e) => setOthers(e.target.checked)}
                        checked={others}
                        name='others'
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Box sx={styles.buttonContainer}>
                <Button
                  sx={styles.button}
                  onClick={() => {
                    setActiveStep(3);
                  }}
                >
                  Previous
                </Button>
                <Button
                  sx={styles.button}
                  onClick={() => {
                    setActiveStep(5);
                  }}
                >
                  Next
                </Button>
              </Box>
              <Typography component='h1' variant='bold' sx={styles.cpTitle}>
                Any gender restrictions on requests?
              </Typography>
              <Box sx={styles.radioContainer}>
                <RadioGroup
                  row
                  aria-labelledby='radio-buttons-group-label'
                  name='radio-buttons-group'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  {/* MALE */}
                  <Box sx={styles.genderContainer}>
                    <Box
                      sx={styles.genderChild}
                      style={{
                        backgroundColor: male
                          ? theme.palette.primary.main
                          : 'transparent',
                      }}
                      onClick={() => {
                        setMale(true);
                        setFemale(false);
                        setNotSpecific(false);
                      }}
                    />
                  </Box>
                  <FormControlLabel
                    value='male'
                    control={
                      <Radio
                        sx={styles.cpGenderRadio}
                        onClick={() => {
                          setMale(true);
                          setFemale(false);
                          setNotSpecific(false);
                        }}
                      />
                    }
                    label={
                      <Typography
                        component='h1'
                        variant='bold'
                        sx={styles.cpsRadioLabel}
                      >
                        Male only
                      </Typography>
                    }
                  />
                  {/* FEMALE */}
                  <Box sx={styles.genderContainer}>
                    <Box
                      sx={styles.genderChild}
                      style={{
                        backgroundColor: female
                          ? theme.palette.primary.main
                          : 'transparent',
                      }}
                      onClick={() => {
                        setMale(false);
                        setFemale(true);
                        setNotSpecific(false);
                      }}
                    />
                  </Box>
                  <FormControlLabel
                    value='female'
                    control={
                      <Radio
                        sx={styles.cpGenderRadio}
                        onClick={() => {
                          setMale(false);
                          setFemale(true);
                          setNotSpecific(false);
                        }}
                      />
                    }
                    label={
                      <Typography
                        component='h1'
                        variant='bold'
                        sx={styles.cpsRadioLabel}
                      >
                        Female only
                      </Typography>
                    }
                  />
                  {/* NOT SPECIFIC */}
                  <Box sx={styles.genderContainer}>
                    <Box
                      sx={styles.genderChild}
                      style={{
                        backgroundColor: notSpecific
                          ? theme.palette.primary.main
                          : 'transparent',
                      }}
                      onClick={() => {
                        setMale(false);
                        setFemale(false);
                        setNotSpecific(true);
                      }}
                    />
                  </Box>
                  <FormControlLabel
                    value='notSecific'
                    control={
                      <Radio
                        sx={styles.cpGenderRadio}
                        onClick={() => {
                          setMale(false);
                          setFemale(false);
                          setNotSpecific(true);
                        }}
                      />
                    }
                    label={
                      <Typography
                        component='h1'
                        variant='bold'
                        sx={styles.cpsRadioLabel}
                      >
                        Not specific
                      </Typography>
                    }
                  />
                </RadioGroup>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* POST  */}
        <Box
          sx={styles.cpContainer}
          style={{ display: activeStep === 5 ? 'initial' : 'none' }}
        >
          <Box sx={styles.cpSection}>
            <Typography component='h1' variant='bold' sx={styles.cpTitle}>
              You are all set now, post and get requests
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.cpInputContainer}>
              <Box sx={styles.cpPost}>
                <img
                  src='hands-clapping.png'
                  alt='Hands clapping'
                  style={{
                    width: '25rem',
                    height: '20rem',
                  }}
                />
              </Box>
            </Box>
            <Box sx={styles.buttonContainer}>
              <Button
                sx={styles.button}
                onClick={() => {
                  setActiveStep(0);
                }}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Create_post;
