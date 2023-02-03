import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const { data } = await axios.post("http://localhost:3000/api/strapiProxy", {
    method: "get",
    url: "http://localhost:1337/api/posts",
  });

  const paths = data.map((post) => {
    // it needs to be a string
    return { params: { post: post.id.toString() } };
  });
  return {
    paths: paths,
    // needed for gallback pages to show 404 page if user tries to access url that doesn't exist
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.post;

  const { data } = await axios.post("http://localhost:3000/api/strapiProxy", {
    method: "get",
    url: `http://localhost:1337/api/posts/${id}`,
  });
  return {
    props: { post: data },
  };
};

const Post = ({ post }) => {
  return (
    <div className="border border-top border-primary border-5">
      <Link href="/posts">Back</Link>
      <p>{post.attributes.title}</p>
      <p>{post.attributes.content}</p>
    </div>
  );
};

export default Post;
