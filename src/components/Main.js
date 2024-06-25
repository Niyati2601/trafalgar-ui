// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import image1 from '../assets/illustration 1.png'; // Make sure to adjust the path according to your project structure
// import image2 from '../assets/element.png'; // Make sure to adjust the path
// import { Divider } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import service1 from '../assets/services-1.png';
// import service2 from '../assets/services-2.png';
// import service3 from '../assets/services-3.png';
// import service4 from '../assets/services-4.png';
// import service5 from '../assets/services-5.png';
// import service6 from '../assets/services-6.png';
// import vector from '../assets/Vector.png';
// import element1 from '../assets/element-1.png';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import image3 from '../assets/illustration-3.png';
// import image4 from '../assets/illustration-2.png';

// function Main() {
//   return (
//     <><Box sx={{ marginTop: 20 }}>
//       <img src={image2} alt='element' style={{ width: '60px', height: '80px' }} />
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" sx={{ marginLeft: 50 }}>Virtual healthcare for you</Typography>
//             <Typography variant="body1" sx={{ marginLeft: 50, marginTop: 2 }}>
//               Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
//             </Typography>
//             <Button variant="contained" color="primary" sx={{ marginLeft: 50, marginTop: 2, borderRadius: '30px', padding: 1 }}>Consult Today</Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <img src={image1} alt='Virtual healthcare' style={{ width: '600px', height: '500px' }} />
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>

//       {/* services */}

//       <Box sx={{ marginTop: 20, padding: 4, position: 'relative' }}>
//         {/* Vector image */}
//         <img src={vector} alt='vector' style={{ position: 'absolute', marginTop: 175, left: 0, zIndex: -1 }} />
//         {/* Element1 image */}
//         <img src={element1} alt='element1' style={{ position: 'absolute', right: 0, marginRight: 90, marginTop: 500, zIndex: -1 }} />

//         <Typography variant="h2" sx={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>Our Services</Typography>
//         <Divider variant="middle" sx={{ width: '100px', backgroundColor: '#000', margin: '16px auto', zIndex: 1, position: 'relative' }} />
//         <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 4, zIndex: 1, position: 'relative' }}>
//           We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
//         </Typography>

//         <Grid container spacing={2} justifyContent="center" sx={{ zIndex: 1, position: 'relative', marginTop: 10 }}>
//           {[service1, service2, service3, service4, service5, service6].map((service, index) => (
//             <Grid item xs={12} md={4} key={index} display="flex" justifyContent="center">
//               <Card sx={{ width: '400px', height: '354px', boxShadow: '10px 40px 50px 0px #E5E9F666', borderRadius: '20px' }}>
//                 <CardMedia
//                   component="img"
//                   image={service}
//                   alt={`service ${index + 1}`}
//                   height="150"
//                   sx={{ objectFit: 'contain', justifyContent: 'left', display: 'flex', width: 100, margin: 2 }}
//                 />
//                 <CardContent sx={{ textAlign: 'left' }}>
//                   <Typography gutterBottom variant="h4" component="div">
//                     {["Search Doctor", "Online Pharmacy", "Consultation", "Details info", "Emergency care", "Tracking"][index]}
//                   </Typography>
//                   <Typography variant="body" color="text.secondary">
//                     {[
//                       "Choose your doctor from thousands of specialists, general, and trusted hospitals",
//                       "Buy your medicines with our mobile application with a simple delivery system",
//                       "Free consultation with our trusted doctors and get the best recommendations",
//                       "Free consultation with our trusted doctors and get the best recommendations",
//                       "You can get 24/7 urgent care for yourself or your children and your lovely family",
//                       "Track and save your medical history and health data"
//                     ][index]}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//           <Grid item xs={12} sx={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
//             <Button variant="outlined" sx={{ borderRadius: '30px' }}>Learn More</Button>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box sx={{ marginTop: 20 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* For extra-small (xs) and small (sm) screens, image on top */}
//           <Grid item xs={12} md={6} display="flex" justifyContent="center">
//             <img src={image4} alt='Virtual healthcare' style={{  width: '600px', height: '500px' }} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" sx={{ marginLeft: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>Leading healthcare providers</Typography>
//             <Typography variant="body1" sx={{ marginLeft: { xs: 2, md: 0 }, marginTop: 2, textAlign: { xs: 'center', md: 'left' } }}>
//             Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
//             in the solutions we deliver</Typography>
//             <Button variant="outlined" color="primary" sx={{ marginLeft: { xs: 2, md: 0 }, marginTop: 2, borderRadius: '30px', padding: '10px 30px' }}>
//              Learn More
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box sx={{ marginTop: 20 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" sx={{ marginLeft: 50 }}>Download our mobile apps</Typography>
//             <Typography variant="body1" sx={{ marginLeft: 50, marginTop: 2 }}>
//               Our dedicated patient engagement app and
//               web portal allow you to access information instantaneously (no tedeous form, long calls,
//               or administrative hassle) and securely            </Typography>
//             <Button variant="outlined" color="primary" sx={{ marginLeft: 50, marginTop: 2, borderRadius: '30px', padding: 1 }}>Download<ArrowDownwardIcon /></Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <img src={image3} alt='Virtual healthcare' style={{ width: '600px', height: '500px' }} />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default Main;
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import image1 from '../assets/illustration 1.png';
import image2 from '../assets/element.png';
import service1 from '../assets/services-1.png';
import service2 from '../assets/services-2.png';
import service3 from '../assets/services-3.png';
import service4 from '../assets/services-4.png';
import service5 from '../assets/services-5.png';
import service6 from '../assets/services-6.png';
import vector from '../assets/Vector.png';
import element1 from '../assets/element-1.png';
import image3 from '../assets/illustration-3.png';
import image4 from '../assets/illustration-2.png';
import image5 from '../assets/mask-image.png';
import image6 from '../assets/arrow-nav.png';
import image7 from '../assets/section-4-1.png';
import image8 from '../assets/section-4-2.png';
import image9 from '../assets/section-4-3.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import group from '../assets/Group.png';

function Main() {
  return (
    <Box sx={{overflow:'hidden',position:'relative'}}>
      {/* Virtual healthcare section */}
      <Box sx={{ marginTop: 20 }}>
        <img src={image2} alt='element' style={{ width: '60px', height: '80px' }} />
        <Box sx={{ flexGrow: 1, width:'60vw', display:'flex', justifyContent:'center', margin:'auto' }}>
          <Grid container spacing={4} alignItems="center">
            {/* Image on left, text on right */}

            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 2, md: 0 } }}>
                Virtual healthcare for you
              </Typography>
              <Typography variant="body1" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 2, md: 0 }, marginTop: 2 }}>
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
              </Typography>
              <Button variant="contained" color="primary" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 2, md: 0 }, marginTop: 2, borderRadius: '30px', padding: 1 }}>
                Consult Today
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={image1} alt='Virtual healthcare' style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>
        </Box>
      </Box>

        <img src={vector} alt='vector' style={{ position: 'absolute', marginTop: 350, left: 0, zIndex: -1 }} />

        <img src={element1} alt='element1' style={{ position: 'absolute', right: 0, marginRight: 350, marginTop: 720, zIndex: -1 }} />


      {/* Our Services section */}
      <Box sx={{ position: 'relative', width:'60vw', margin:'auto',marginTop: 20, padding: 4 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
          Our Services
        </Typography>
        <Divider variant="middle" sx={{ width: '100px', backgroundColor: '#000', margin: '16px auto', zIndex: 1, position: 'relative' }} />
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 4, zIndex: 1, position: 'relative' }}>
          We provide you with the best choices for your health needs and ensure your treatment is guided by highly qualified doctors.
        </Typography>
        <Grid container spacing={2} justifyContent="center" >
          {[service1, service2, service3, service4, service5, service6].map((service, index) => (
            <Grid item xs={12} md={4} key={index} display="flex" justifyContent="center" marginTop="50px">
              <Card sx={{ width: '400px', height: '354px', boxShadow: '10px 40px 50px 0px #E5E9F666', borderRadius: '20px' }}>
                <CardMedia
                  component="img"
                  image={service}
                  alt={`service ${index + 1}`}
                  height="150"
                  sx={{ objectFit: 'contain', justifyContent: 'left', display: 'flex', width: 100, margin: 2 }}
                />
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography gutterBottom variant="h4" component="div">
                    {["Search Doctor", "Online Pharmacy", "Consultation", "Details info", "Emergency care", "Tracking"][index]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {[
                      "Choose your doctor from thousands of specialists, general, and trusted hospitals",
                      "Buy your medicines with our mobile application with a simple delivery system",
                      "Free consultation with our trusted doctors and get the best recommendations",
                      "Free consultation with our trusted doctors and get the best recommendations",
                      "You can get 24/7 urgent care for yourself or your children and your lovely family",
                      "Track and save your medical history and health data"
                    ][index]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
            <Button variant="outlined" sx={{ borderRadius: '30px' }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Leading healthcare providers section */}
      <Box sx={{width:'60vw', display:'flex', justifyContent:'center', margin:'auto', marginTop: 20 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image on left, text on right */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <img src={image4} alt='Leading healthcare providers' style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 2, md: 0 } }}>
              Leading healthcare providers
            </Typography>
            <Typography variant="body1" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 2, md: 0 }, marginTop: 2 }}>
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 2, md: 0 }, marginTop: 2, borderRadius: '30px', padding: '10px 30px' }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
      <img src={element1} alt='element1' style={{  display:'flex',position: 'relative', left: '96%', zIndex: -1 }} />
      {/* Download our mobile apps section */}
      <Box sx={{ marginTop: 20 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image on right, text on left */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ marginLeft: { xs: 2, md: 50 }, textAlign: { xs: 'center', md: 'left' } }}>
              Download our mobile apps
            </Typography>
            <Typography variant="body1" sx={{ marginLeft: { xs: 2, md: 50 }, marginTop: 2, textAlign: { xs: 'center', md: 'left' } }}>
              Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ marginLeft: { xs: 2, md: 50 }, marginTop: 2, borderRadius: '30px', padding: '10px 30px' }}>
              Download <ArrowDownwardIcon />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={image3} alt='Download our mobile apps' style={{ width: '60%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        background: 'linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)',
        padding: '40px 20px',
        width: '60vw',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: 20,
        borderRadius: '24px',
        position:'relative',
      }}>
        <img src={element1} alt='element1' style={{ position: 'absolute', top: 0, left: 0, marginLeft: -50, marginTop: 150, zIndex: -1, overflow:'hidden' }} />
        <img src={group} alt='element1' style={{ position: 'absolute', top: 0, right:-50, zIndex: 1, marginTop:-10, overflow:'hidden' }} />
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ textAlign: 'center', color: 'common.white', marginBottom: 2 }}>
              What our customers are saying
            </Typography>
            <Divider sx={{ backgroundColor: 'common.white', width: '50px', margin: '0 auto 20px auto' }} />
            <Grid container alignItems="center">
              <Grid item xs={12} md={4}>
                <img src={image5} alt='customer' />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ textAlign: 'left', color: 'common.white', marginBottom: 1 }}>
                  Edward Newgate
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', color: 'common.white', marginBottom: 1 }}>
                  Founder Circle
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" sx={{ textAlign: 'left', color: 'common.white' }}>
                  “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.”
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <img src={image6} alt='image6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', margin: 'auto', marginTop: 5 }} />

      {/* Vector image */}
      <img src={vector} alt='vector' style={{ position: 'absolute', top: 'auto', right: -200, zIndex: -1, marginTop:220, transform: 'rotate(180deg)' }} />
      {/* Element1 image */}
      <img src={element1} alt='element1' style={{ position: 'absolute', top: 'auto', left: 100, marginLeft: 250, marginTop: 300, zIndex: -1 }} />
      
      <Box sx={{ position: 'relative', overflow:'hidden', width:'60vw', margin:'auto',marginTop: 20, padding: 4,  }}>

      <Typography variant="h3" sx={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
        Check out our latest article
      </Typography>
      <Divider variant="middle" sx={{ width: '100px', backgroundColor: '#000', margin: '16px auto', zIndex: 1, position: 'relative' }} />

      <Grid container spacing={4} justifyContent="center" marginTop={"50px"}>
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Card sx={{ width: '350px', borderRadius: '20px', height:'500px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image7}
                alt="image7"
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Disease detection, check
                  up in the laboratory
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In this case, the role of the health laboratory is very important to do
                  a disease detection...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More <ArrowForwardIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Card sx={{ width: '350px', borderRadius: '20px', height:'500px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image8}
                alt="image8"
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Herbal medicines that are
                  safe for consumption
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Herbal medicine is very widely used at this time because of its very good for your health...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More <ArrowForwardIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Card sx={{ width: '350px', borderRadius: '20px', height:'500px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image9}
                alt="image9"
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Natural care for healthy 
                  facial skin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A healthy lifestyle should start from now and also for your skin health.
                  There are some...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More <ArrowForwardIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', zIndex: 1, position: 'relative', marginTop: 5 }}>
          <Button variant="outlined" sx={{ borderRadius: '30px' }}>
            View All
          </Button>
        </Grid>
      </Grid>
    </Box>

    {/* Footer */}
    
    </Box>
  );
}

export default Main;

