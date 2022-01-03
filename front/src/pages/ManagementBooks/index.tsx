import styles from "./App.module.scss";
import { ManagementArea } from "../../components/ManagementArea";
import { Container, Row, Col } from "reactstrap";

export function App() {
  return (
    <>
      <Container>
        <Row className={styles.bodyDatas}>
            <ManagementArea />
        </Row>
      </Container>
    </>
  );
}
