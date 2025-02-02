// import React from 'react';
// import {
//   AppBar,
//   Box,
//   Container,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Toolbar,
// } from '@mui/material';

// function Ressources() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* Navigation */}
//       <AppBar position="static" sx={{ backgroundColor: '#80CBC4', marginBottom: 4 }}>
//         <Toolbar>
//           <Grid container spacing={2}>
//             {['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6'].map((page) => (
//               <Grid item key={page}>
//                 <Button color="inherit">{page}</Button>
//               </Grid>
//             ))}
//           </Grid>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="lg">
//         {/* Title */}
//         <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
//           Page de Ressource
//         </Typography>

//         {/* Main Photo Section */}
//         <Paper 
//           elevation={3} 
//           sx={{ 
//             p: 4, 
//             mb: 4, 
//             height: '200px',
//             width: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: '#f5f5f5'
//           }}
//         >
//           <Typography variant="h5">PHOTOS DE A.M.A</Typography>
//         </Paper>

//         {/* Info and Video Grid */}
//         <Grid container spacing={4} sx={{ mb: 4 }}>
//           <Grid item xs={12} md={6}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3, 
//                 height: '200px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <Typography>Informations</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3, 
//                 height: '200px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <Typography>Vidéo</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3, 
//                 height: '200px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <Typography>Informations</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3, 
//                 height: '200px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <Typography>Vidéo</Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Video List Section */}
//         <Grid container spacing={2} sx={{ mb: 4 }}>
//           <Grid item xs={12} md={4}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3, 
//                 height: '150px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <Typography>Vidéo</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3,
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <List>
//                 {[1, 2, 3].map((item) => (
//                   <ListItem key={item} sx={{ borderBottom: '1px solid #ddd', py: 2 }}>
//                     <ListItemText primary={`Information ${item}`} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Video with Text Section */}
//         <Grid container spacing={2} sx={{ mb: 4 }}>
//           <Grid item xs={12} md={4}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3, 
//                 height: '150px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <Typography>Vidéo</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Paper 
//               elevation={3}
//               sx={{ 
//                 p: 3,
//                 backgroundColor: '#f5f5f5'
//               }}
//             >
//               <List>
//                 {[1, 2, 3].map((item) => (
//                   <ListItem key={item} sx={{ borderBottom: '1px solid #ddd', py: 2 }}>
//                     <ListItemText primary={`Information ${item}`} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Footer */}
//         <Box sx={{ backgroundColor: '#80CBC4', p: 4, mt: 4 }}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={4}>
//               <List>
//                 <ListItem>
//                   <ListItemText primary="Info1" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Info2" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Info3" />
//                 </ListItem>
//               </List>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <List>
//                 <ListItem>
//                   <ListItemText primary="Link1" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Link2" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Link3" />
//                 </ListItem>
//               </List>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <List>
//                 <ListItem>
//                   <ListItemText primary="Additional1" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Additional2" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Additional3" />
//                 </ListItem>
//               </List>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Ressources;
import { Play, ChevronRight } from 'lucide-react';

export function Ressources() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Large Image */}
      <div className="relative h-[70vh] bg-gradient-to-r from-yellow-300 to-green-500">
        <div className="absolute inset-0 bg-black/30" />
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-7xl font-bold text-white mb-6">
            A.M.A.M.A.E.M
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Experience the services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        {/* Featured Videos Section */}
        <div className="space-y-24">
          {/* Video Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                The Best Activewear from the Nordstrom Anniversary Sale
              </h2>
              <p className="text-lg text-gray-600">
                Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred Valley.
              </p>
       
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <img
                src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-6 rounded-full hover:bg-white/30 transition-colors group-hover:scale-110 duration-300">
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>

          {/* Video Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden group order-2 lg:order-1">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-6 rounded-full hover:bg-white/30 transition-colors group-hover:scale-110 duration-300">
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">
                The Best Activewear from the Nordstrom Anniversary Sale
              </h2>
              <p className="text-lg text-gray-600">
                Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred Valley.
              </p>
             
            </div>
          </div>
        </div>

        {/* More Videos Grid */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            More Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <img
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1517245386807-bb43f82c33c4' : item === 2 ? '1483721310020-03333e577078' : '1522202176988-66273c2fd55f'}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors group-hover:scale-110 duration-300">
                    <Play className="w-6 h-6 text-white" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Video Title {item}
                </h3>
                <p className="text-gray-600">
                  Short description of the video content goes here.
                </p>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}