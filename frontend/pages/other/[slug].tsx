import { NextPage } from "next";
import { Page, pagesApi } from "@entities/page";
import { Seo } from "../../components/Seo";

interface PageViewProps {
  page: Page;
}

const PageView: NextPage<PageViewProps, PageViewProps> = (params) => {
  params.page.id;
  return (
    <div>
      <Seo seo={params.page.attributes.seo} />
      Page {params.page.id}
    </div>
  );
};

PageView.getInitialProps = async (context) => {
  const { slug } = context.query;
  const page = await pagesApi.getOne(slug as any);
  return { page: page.data };
};

export default PageView;
