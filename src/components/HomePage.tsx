
import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ClothingAlterations from "./ClothingAlterations";
import ContactSection from "./ContactSection";

const HomePage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <Box id="home">
        <HeroSection />
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 8 }}>
        <ClothingAlterations />
      </Box>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Box sx={{ py: 2, backgroundColor: "#333", color: "white", textAlign: "center" }}>
        <Typography variant="body2">&copy; 2024 West Lake. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default HomePage;
