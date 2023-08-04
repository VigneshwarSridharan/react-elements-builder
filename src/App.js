import "./styles.scss";
import { Container } from "reactstrap";
import Builder from "./Builder";
import { Provider } from "jotai";

export default function App() {
  return (
    <Container className="py-5">
      <Provider>
        <Builder />
      </Provider>
    </Container>
  );
}
