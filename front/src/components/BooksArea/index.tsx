import styles from "./styles.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Button } from "reactstrap";
import "@asseinfo/react-kanban/dist/styles.css";
import { useDrag } from "react-dnd";
import { useEffect, useState } from "react";

import { VscTrash, VscCloudUpload } from "react-icons/vsc";
import { api } from "../../services/api";
import bookImage from "../../assets/imgs/books.png";

export function BooksArea() {
  const [books, setBooks] = useState([]);

  async function getData() {
    const allBooks = await api.get("/books-all");
    const { data } = allBooks;
    setBooks(data?.data);
  }

  useEffect(() => {
    async function getAllBooks() {
      try {
        await getData();
      } catch (err: any) {
        console.log(err.message);
      }
    }
    getAllBooks();
  }, []);
  async function handleDelete(id: number) {
    await api.delete(`/books-delete/${id}`);
    await getData();
  }

  // const [isDragging, drag] = useDrag(() => ({
  //   type: "card",
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  return (
    <>
      <div className={styles.books}>
        <h2>From Here You can see every Books</h2>
        <Row>
          <ul>
            {books.map((values: any) => {
              return (
                <li>
                  <div
                    className="card"
                    // ref={drag}
                    // style={{ border: isDragging ? "5px solid pink" : "0px" }}
                  >
                    <img className="card-img-top" src={bookImage} alt="" />
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Title: {values?.title}</strong>
                        <br />
                        <strong>Author: {values?.author?.author}</strong>
                        <div className={styles.buttons}>
                          <Button className="btn btn-success">
                            <VscCloudUpload size={24} />
                          </Button>
                          <Button
                            className="btn btn-danger"
                            onClick={() => handleDelete(values?.id)}
                          >
                            {" "}
                            <VscTrash size={24} />
                          </Button>
                        </div>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Row>
      </div>
    </>
  );
}
