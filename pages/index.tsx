import { GetServerSideProps, NextPage } from "next";
import Layout from "../components/layout";
import CardsSection from "../components/cards-section";
import getData from "../utils/getData";
import AnimeList from "../types/AnimeList";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const animeList = await getData(`top/anime?limit=9&page=${query.page || 1}`);

  if (!animeList.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      animeList,
    },
  };
};

interface HomePageProps {
  animeList: AnimeList;
}

const Home: NextPage<HomePageProps> = ({ animeList }) => (
  <Layout>
    <CardsSection data={animeList.data} pagination={animeList.pagination} />
  </Layout>
);

export default Home;
