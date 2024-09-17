import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
    return (
        <Box
            sx={{
            height: "80vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    )
}

export default Loader