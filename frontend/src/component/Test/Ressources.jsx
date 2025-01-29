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

function Ressources() {
  return (
<div>
  
<section class="bg-gradient-to-br from-yellow-200 to-green-600 py-16 md:py-32">
   
   <div class="container mx-auto px-4 md:px-8 text-center">
       <h1 class="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">A.M.A.M.A.E.M</h1>
       <p class="text-white text-lg md:text-2xl mb-12">Experience the 
           services.</p>
       
   </div>
</section>
<div class="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">

 

    
    <div class="mb-10 rounded overflow-hidden flex flex-col mx-auto">
        <a href="#"
            class="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
            Best Activewear from the Nordstrom Anniversary Sale</a>
            <p class="text-gray-700 py-5 text-base leading-8">
            Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea
            level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred
            Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.
        </p>

        <div class="relative" className="rounded-3xl overflow-hidden flex flex-col mx-auto">
            <a href="#">
                <img class="w-full"
                    src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
                    alt="Sunset in the mountains" />
            </a>
          
        </div>
       
        
        

    </div>
    <div class="mb-10 rounded overflow-hidden flex flex-col mx-auto">
        <a href="#"
            class="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
            Best Activewear from the Nordstrom Anniversary Sale</a>
            <p class="text-gray-700 py-5 text-base leading-8">
            Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea
            level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred
            Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.
        </p>

        <div class="relative" className="rounded-3xl overflow-hidden flex flex-col mx-auto">
            <a href="#">
                <img class="w-full"
                    src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
                    alt="Sunset in the mountains" />
            </a>
          
        </div>
       
        
        

    </div>

    


</div>
</div>
  )
}

export default Ressources;