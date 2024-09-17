import { GET_HIGHLIGHTS } from "../../GraphQL/Queries";
import Highlights from "../Highlights/Highlights";
import { useQuery } from "@apollo/client";
import RenderIfTrue from "../RenderIfTrue/RenderIfTrue";
import style from "./Home.module.css";
import { lazy, Suspense } from "react";

const ErrorServer = lazy(() => import("../Error/ErrorServer"));
const Home: any = () => {
  const { error, loading, data } = useQuery(GET_HIGHLIGHTS);

  if (error) {
    return (
      <Suspense fallback={<>Loading ...</>}>
        <ErrorServer />
      </Suspense>
    );
  }

  return (
    <div className={style.main}>
      <div className={style.header}>
        <h2>Watch the latest football highlights across Europe & America</h2>
        <h4 style={{ color: "gray", margin: 0, padding: 0 }}>
          Bringing you livescores,standings,stats,live streaming url's &
          highlights from all over Europe and America on the palm of your hands
        </h4>
      </div>
      <RenderIfTrue condition={!loading}>
        <Highlights matches={data?.highlights} />
      </RenderIfTrue>
    </div>
  );
};

export default Home;
