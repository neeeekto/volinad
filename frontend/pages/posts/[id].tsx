import { NextPage } from "next";
import { Post, postsApi } from "@entities/post";
import { Seo } from "../../components/Seo";

interface PostPageProps {
  post: Post;
}

const PostPage: NextPage<PostPageProps, PostPageProps> = (props) => {
  return (
    <>
      <Seo seo={props.post.attributes.seo}></Seo>
      <div>{props.post.id}</div>
    </>
  );
};

PostPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const post = await postsApi.getOne(id as any, {
    populate: ["posts", "seo", "tags"],
  });
  return {
    post: post.data,
  };
};

export default PostPage;
