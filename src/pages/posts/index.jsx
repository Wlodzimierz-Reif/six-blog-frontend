import SmallCard from "@/components/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";


export default function blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.post(
        "http://localhost:3000/api/strapiProxy",
        {
          method: "get",
          url: "http://localhost:1337/api/posts?populate=*",
        },
      );
      setPosts(data);
    };
    getData();
  }, []);
  return (
    <Container>
      {posts.map((post) => (
        <SmallCard post={post} />
        // <div>
        //   <h3>{post.attributes.title}</h3>
        //   <p>{post.attributes.description}</p>
        // </div>
      ))}
    </Container>
  );
}
