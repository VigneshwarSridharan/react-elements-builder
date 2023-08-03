import "./styles.scss";
import { Container } from "reactstrap";
import Builder from "./Builder";

export default function App() {
  return (
    <Container className="py-5">
      <Builder />
    </Container>
  );
}
