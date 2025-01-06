
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import ContentCutRoundedIcon from "@mui/icons-material/ContentCutRounded"; // 圆角剪刀图标
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#6f1200", zIndex: 1300 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo or Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              cursor: "pointer",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Left: Scissors Icon */}
            <ContentCutRoundedIcon
              sx={{
                fontSize: "2rem",
                color: "#D4AF37",
                transform: "rotate(-30deg)",
                transition: "color 0.3s ease",
                "&:hover": { color: "#FFF" },
              }}
            />
            {/* Title */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 300,
                  fontSize: "1.8rem",
                  fontFamily: `"Poppins", sans-serif`,
                  lineHeight: 0.8,
                  letterSpacing: "0.1rem",
                  color: "white",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#D4AF37" },
                }}
              >
                West Lake
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 100,
                  fontSize: "0.8rem",
                  fontFamily: `"Poppins", sans-serif`,
                  color: "#D4AF37",
                  letterSpacing: "0.1rem",
                  textTransform: "uppercase",
                }}
              >
                Clothing Alterations
              </Typography>
            </Box>
            {/* Right: Scissors Icon */}
            <ContentCutRoundedIcon
              sx={{
                fontSize: "2rem",
                color: "#D4AF37",
                transform: "rotate(200deg)",
                transition: "color 0.3s ease",
                "&:hover": { color: "#FFF" },
              }}
            />
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // 返回顶部
              sx={{
                color: "#FFF",
                textTransform: "none",
                "&:hover": { color: "#D4AF37", backgroundColor: "transparent" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="services"
              smooth={true}
              duration={500}
              sx={{
                color: "#FFF",
                textTransform: "none",
                "&:hover": { color: "#D4AF37", backgroundColor: "transparent" },
              }}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="contact"
              smooth={true}
              duration={500}
              sx={{
                color: "#FFF",
                textTransform: "none",
                "&:hover": { color: "#D4AF37", backgroundColor: "transparent" },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
