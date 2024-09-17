import { Box, Typography, Link } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import RouterLink from "next/link";

export default function Home({ carouselData, newsData }) {
  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Box sx={{ textAlign: "center" }}>
        <Carousel
          centerMode
          infiniteLoop
          interval={3000}
          autoPlay
          showStatus={false}
        >
          {carouselData?.map((image) => {
            return (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "1000px",
                  maxHeight: "400px",
                  mx: "auto",
                }}
                key={image.image.data.urls.uploaded.original}
              >
                <img
                  src={image.image.data.urls.uploaded.original}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Box>
            );
          })}
        </Carousel>
      </Box>

      <Box sx={{ p: 1 }}>
        <Typography sx={{ fontSize: 20, mb: 1 }}>Latest News</Typography>
        <Box>
          {newsData?.map(({ title, image, published_at, id }) => {
            return (
              <Link
                href={`news/${id}`}
                key={published_at}
                component={RouterLink}
              >
                <Box
                  sx={{
                    display: "flex",
                    mb: 2,
                    "&:hover": { boxShadow: "0 0 5px grey", cursor: "pointer" },
                    bgcolor: "rgba(0, 51, 102, 0.1)",
                  }}
                >
                  <Box
                    sx={{
                      width: { lg: "250px", xs: "200px" },
                      height: { lg: "150px", xs: "100px" },
                    }}
                  >
                    <img
                      src={image.data.urls.uploaded.thumbnail}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      lazy="true"
                    />
                  </Box>
                  <Box sx={{ pl: 2, pr: 1 }}>
                    <Typography
                      sx={{
                        color: "primary.dark",
                        mb: 1,
                        fontSize: { lg: 20 },
                        mt: 1,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography sx={{ color: "text.disabled", fontSize: 14 }}>
                      {new Date(published_at).toGMTString()}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            );
          })}
          <RouterLink href={"/news"}>
            <Link
              sx={{
                mx: "auto",
                display: "block",
                width: "max-content",
              }}
            >
              More...
            </Link>
          </RouterLink>
        </Box>
      </Box>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const idOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.LIVESCORE,
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  const idResponse = await fetch(
    "https://livescore6.p.rapidapi.com/news/v2/list",
    idOptions
  );
  const idData = await idResponse.json();

  const id = idData.categories[0].id;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.LIVESCORE,
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=${id}&page=1`,
    options
  );
  const data = await response.json();

  return {
    props: {
      carouselData: data.data.slice(0, 5),
      newsData: data.data.slice(0, 3),
    },
  };
};
