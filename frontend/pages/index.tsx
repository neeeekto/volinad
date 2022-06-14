import type { NextPage } from "next";
import { rootApi, Root } from "@entities/root";

interface HomeProps {
  root: Root;
}

const Home: NextPage<HomeProps, HomeProps> = (props) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: props.root.attributes.content }}
      ></div>
    </div>
  );
};

Home.getInitialProps = async (context) => {
  const root = await rootApi.get();
  return {
    root: root.data,
  };
};

export default Home;
