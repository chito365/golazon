import { TwitterTweetEmbed } from "react-twitter-embed";
import { Box, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ArrowBack } from "@material-ui/icons";
import Loader from "../../components/Loader";

const NewsDetail = ({ livescoreApiKey }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": livescoreApiKey,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    fetch(
      `https://livescore6.p.rapidapi.com/news/v2/detail?id=${router.query.newsId}`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setData([
          response.article.body,
          response.layoutContext.meta.largeOgImage,
        ])
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [router.query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ p: 2 }}>
      <IconButton onClick={() => router.back()} sx={{ m: 1 }}>
        <ArrowBack />
      </IconButton>

      <Box sx={{ maxWidth: "800px", mx: "auto", maxHeight: "500px" }}>
        <img
          src={data[1]}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      {data[0]?.map((paragraph, index) => {
        return (
          <>
            {paragraph.type == "embed" &&
            paragraph.data.content.includes("twitter") ? (
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                <TwitterTweetEmbed
                  tweetId={paragraph.data.content.split(":")[1]}
                />
              </Box>
            ) : (
              <Typography
                dangerouslySetInnerHTML={{ __html: paragraph.data.content }}
                key={index}
              ></Typography>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default NewsDetail;

export const getServerSideProps = async () => {
  return {
    props: {
      livescoreApiKey: process.env.LIVESCORE,
    },
  };
};
