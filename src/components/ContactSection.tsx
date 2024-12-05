import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CLOTHING_ALTERATIONS } from "../constants/info";

const ContactSection = () => {
  const { address, contact, businessHours } = CLOTHING_ALTERATIONS;

  return (
    <Box
      id="contact"
      sx={{
        py: 6,
        backgroundColor: "#6f1200", // 设置为与 NavBar 一致的背景色
        color: "#fff", // 全局字体颜色为白色
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          {/* 地址 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LocationOnIcon sx={{ color: "#D4AF37", fontSize: "2rem" }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                textAlign: "left",
                color: "#fff", // 显式设置为白色
              }}
            >
              {address}
            </Typography>
          </Box>

          {/* 联系方式 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <PhoneIcon sx={{ color: "#D4AF37", fontSize: "2rem" }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                textAlign: "left",
                color: "#fff", // 显式设置为白色
              }}
            >
              <a
                href={`tel:${contact}`}
                style={{
                  textDecoration: "none",
                  color: "#fff", // 链接默认颜色
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#D4AF37")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                {contact}
              </a>
            </Typography>
          </Box>

          {/* 营业时间 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AccessTimeIcon sx={{ color: "#D4AF37", fontSize: "2rem" }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                textAlign: "left",
                color: "#fff", // 显式设置为白色
              }}
            >
              {businessHours}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
