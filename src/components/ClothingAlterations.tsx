
import { Box, Container, Grid, Typography } from "@mui/material";
import { CLOTHING_ALTERATIONS } from "../constants/info";

import dresses from "../assets/img/dresses.webp";
import formal from "../assets/img/formal.webp";
import shirts from "../assets/img/shirts.webp";
import jackets from "../assets/img/jackets.webp";
import repair from "../assets/img/repair.webp";
import wedding from "../assets/img/wedding.webp";
import general from "../assets/img/general.webp";

const images = [dresses, formal, shirts, jackets, repair, wedding, general]; // 图片列表

const ClothingAlterations = () => {
  const services = Object.entries(CLOTHING_ALTERATIONS.prices);

  return (
    <Box sx={{ py: 8, backgroundColor: "#f7f7f7" }}>
      <Container>
        <Grid container spacing={6}>
          {services.map(([categoryName, items], index) => (
            <Grid
              container
              item
              spacing={0}
              key={categoryName}
              sx={{
                flexDirection: index % 2 === 0 ? "row" : "row-reverse", // 图片交替排列
                alignItems: "center",
              }}
            >
              {/* 图片部分 */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundImage: `url(${images[index % images.length]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "16px",
                    minHeight: "250px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // 轻微阴影
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                  aria-label={`${categoryName} image`}
                />
              </Grid>

              {/* 服务详情部分 */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      fontFamily: `"Poppins", sans-serif`,
                      color: "#6f1200",
                      marginBottom: "1rem",
                      "&:hover": { color: "#D4AF37", cursor: "pointer" }, // 悬停颜色变化
                    }}
                  >
                    {categoryName
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^\w/, (c) => c.toUpperCase())
                      .replace("And","&")
                      .replace("Or", "/")}
                  </Typography>

                 {/* 服务价格 */}
<Box
  component="ul"
  sx={{
    listStyleType: "none",
    padding: 0,
    margin: 0,
  }}
>
  {Object.entries(items).map(([serviceName, price]) => (
    <Typography
      key={serviceName}
      component="li"
      sx={{
        display: "flex", // Flex 布局
        alignItems: "center", // 垂直居中
        justifyContent: "space-between", // 左右对齐
        fontWeight: 400,
        fontSize: "1rem",
        margin: "0.5rem 0",
        color: "#333",
      }}
    >
      {/* 服务名称 */}
      <Box
        component="span"
        sx={{
          fontSize: "1.2rem",
          color: "#6f1200",
          flex: 1, // 服务名称占据左侧
          textAlign: "left", // 左对齐
        }}
      >
        {serviceName
          .replace(/([A-Z])/g, " $1")
          .replace(/^\w/, (c) => c.toUpperCase())
          .replace("And","&")
          .replace("Or", "/")}
      </Box>

      {/* 分隔点 */}
      <Box
        component="span"
        sx={{
          flexShrink: 0, // 固定宽度
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#ccc", // 灰色点
          margin: "0 0.5rem",
        }}
      />

      {/* 服务价格 */}
      <Box
        component="span"
        sx={{
          fontSize: "1.2rem",
          fontStyle: price === "Ask for quote" ? "italic" : "normal",
          color: price === "Ask for quote" ? "#999" : "#333", // 灰色字体
          flexShrink: 0, // 价格占据右侧
          textAlign: "right", // 右对齐
        }}
      >
        {price === "Ask for quote"
          ? "Ask for quote" // 无符号
          : typeof price === "string" && price.includes("from")
          ? `From $${price.replace("from ", "")}` // 处理 "From"
          : `$${price}`}
      </Box>
    </Typography>
  ))}
</Box>



                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClothingAlterations;
