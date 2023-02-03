import Link from "next/link";
import Card from "react-bootstrap/Card";

const SmallCard = ({ post }) => {
  const { attributes } = post;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{attributes.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {attributes.description}
        </Card.Subtitle>
        <Card.Text>{attributes.content.substring(0, 30)}...</Card.Text>
        <Link href={`/posts/${post.id}`} passHref legacyBehavior>
          <Card.Link>Read more</Card.Link>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SmallCard;
