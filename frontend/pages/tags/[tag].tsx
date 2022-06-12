import { NextPage } from "next";
import { useRouter } from "next/router";

const TagPage: NextPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  return <div>Tag {tag}</div>;
};

export default TagPage;
