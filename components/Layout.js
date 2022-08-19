/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { theme } from '../components/Theme';
import { styles } from '../utils/styles';

function Layout({ children, title, description }) {
  const router = useRouter();

  // const queryChangeHandler = (e) => {
  //   setQuery(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/`);
  };

  return (
    <Box>
      <Head>
        <title>{title ? `Totel | ${title}  ` : `Totel`}</title>
        <link rel='icon' type='image/x-icon' href='/w-d_logo_thumb.png' />
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          {/* HEADER */}
          <AppBar position='fixed' elevation={1} sx={styles.navContainer}>
            <Toolbar sx={styles.nav}>
              {/* LOGO */}
              <Box sx={styles.logoContainer} onClick={() => router.push('/')}>
                <Typography sx={styles.logo} component='h1' variant='regular'>
                  Totel
                </Typography>
              </Box>

              {/* NAV LINKS */}
              <Box sx={styles.navLinkContainer}>
                <Typography variant='medium' component='h2' sx={styles.navLink}>
                  Download App
                </Typography>
                <Typography variant='medium' component='h2' sx={styles.navLink}>
                  Support
                </Typography>
                <Typography variant='medium' component='h2' sx={styles.navLink}>
                  About
                </Typography>

                <Box sx={styles.profileContainer}>
                  <img
                    src='profile_pic.jpg'
                    alt='Totel'
                    style={styles.profile}
                  />
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
          {/* BODY */}
          <Box
            sx={{
              minHeight: '38rem',
            }}
          >
            {children}
          </Box>
          {/* FOOTER */}
          <footer>
            {/* NEWSLETTER */}
            <Box sx={styles.newsletterContainer}>
              <Box sx={styles.newsletterTitleContainer}>
                <Typography
                  component='h1'
                  variant='bold'
                  sx={styles.newsletterTitle}
                >
                  NEWSLETTER
                </Typography>
                <Typography
                  component='p'
                  variant='regular'
                  sx={styles.newsletterDescription}
                >
                  Stay Up to Date
                </Typography>
              </Box>
              <Box sx={styles.newsletter}>
                <form style={styles.searchForm} onSubmit={submitHandler}>
                  <InputBase
                    name='search'
                    sx={styles.newsletterInput}
                    placeholder='Your Email...'
                    // onChange={queryChangeHandler}
                  />
                </form>

                <Box sx={styles.newsletterSubscribeButton}>
                  <img
                    src='paper-plane.png'
                    alt='Play Store'
                    style={{
                      width: '2rem',
                      height: '2rem',
                    }}
                  />
                </Box>
              </Box>
            </Box>
            {/* FOOTER LINKS*/}
            <Box sx={styles.footerContainer}>
              <Box sx={styles.footerLogoContainer}>
                <Box
                  sx={styles.footerLogoContainer}
                  onClick={() => router.push('/')}
                >
                  <Typography
                    sx={styles.footerLogo}
                    component='h1'
                    variant='regular'
                  >
                    Totel
                  </Typography>
                  <Typography
                    sx={styles.footerDescription}
                    component='h1'
                    variant='regular'
                  >
                    Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed
                    do eiusmod tempor incididunt<br/>ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Box sx={styles.mobileStoreContainer}>
                    <Box sx={styles.mobileStore}>
                      <img
                        src='playstore.png'
                        alt='Play Store'
                        style={styles.mobileStoreIcon}
                      />
                      <Typography
                        variant='medium'
                        component='p'
                        sx={styles.mobileStoreText}
                      >
                        PlayStore
                      </Typography>
                    </Box>
                    <Box sx={styles.mobileStore}>
                      <img
                        src='appstore.png'
                        alt='App Store'
                        style={styles.mobileStoreIcon}
                      />
                      <Typography
                        variant='medium'
                        component='p'
                        sx={styles.mobileStoreText}
                      >
                        AppleStore
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* HELP */}
              <Box sx={styles.footerLinkContainer}>
                <Typography
                  component='h1'
                  variant='bold'
                  sx={styles.footerLinkTitle}
                >
                  Help
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Help Center
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  FAQ&apos;s
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Cookie Policy
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Terms and Conditions
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Advertise with us
                </Typography>
              </Box>

              {/* ABOUT US */}
              <Box sx={styles.footerLinkContainer}>
                <Typography
                  component='h1'
                  variant='bold'
                  sx={styles.footerLinkTitle}
                >
                  About
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Blog
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  How we work
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Jobs
                </Typography>
              </Box>

              {/* CONTACT */}
              <Box sx={styles.footerLinkContainer}>
                <Typography
                  component='h1'
                  variant='bold'
                  sx={styles.footerLinkTitle}
                >
                  Contact us
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Phone&#58;
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Address&#58;
                </Typography>
                <Typography
                  component='h2'
                  variant='medium'
                  sx={styles.footerLink}
                >
                  Mail Id&#58;
                </Typography>
              </Box>
            </Box>
          </footer>
        </ThemeProvider>
      </CssBaseline>
    </Box>
  );
}

export default Layout;
