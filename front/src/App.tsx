import styles from "./App.module.scss";
import { ManagementArea } from "./components/ManagementArea";
import { BooksArea } from "./components/BooksArea";
import { Container, Row, Col } from "reactstrap";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Container>
        <Row className={styles.bodyDatas}>
          <BooksArea />
          <ManagementArea />
        </Row>
        <Footer />{" "}
      </Container>
    </>
  );
}
