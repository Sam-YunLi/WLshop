import { useState, useEffect } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// 导入本地图片
import p0 from "../assets/img/p0.webp";
import p1 from "../assets/img/p1.webp"
import p2 from "../assets/img/p2.webp"
import p3 from "../assets/img/p3.webp"
import p4 from "../assets/img/p4.webp"
import p5 from "../assets/img/p5.webp"
import p6 from "../assets/img/p6.jpg"
import p7 from "../assets/img/p7.jpg"
import p8 from "../assets/img/p8.jpg"
import p9 from "../assets/img/p9.jpg"
import p10 from "../assets/img/p10.jpg"



const images = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  // 自动切换图片
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // 清理定时器
  }, []);

  // 手动切换图片
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh",
        overflow: "hidden",
      }}
      onMouseEnter={() => setShowArrows(true)} // 显示箭头
      onMouseLeave={() => setShowArrows(false)} // 隐藏箭头
    >
      {/* 滚动图片 */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </Box>

      {/* 文字内容 */}
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "1rem 2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* 修改后的标题 */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontFamily: `"Poppins", sans-serif`,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
           Expert Tailoring, Just for You
          </Typography>
          {/* 修改后的副标题 */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              fontFamily: `"Poppins", sans-serif`,
              marginTop: "0.5rem",
              fontSize: { xs: "1rem", md: "1.5rem" },
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
            }}
          >
            Every Stitch, A Perfect Fit
          </Typography>
        </Box>
      </Container>

      {/* 图片切换按钮 */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.3s ease",
          opacity: showArrows ? 1 : 0,
          pointerEvents: showArrows ? "auto" : "none", // 阻止点击
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.3s ease",
          opacity: showArrows ? 1 : 0,
          pointerEvents: showArrows ? "auto" : "none", // 阻止点击
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* 圆点指示器 */}
      <Box
        sx={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#FFF" : "rgba(255, 255, 255, 0.5)",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
