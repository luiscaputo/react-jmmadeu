import styles from "./styles.module.scss";
import firstImage from "../../assets/svg/firstImage.svg";

import "bootstrap/dist/css/bootstrap.css";

import { Form, Input, Button, Col, Container, Row } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ChangeEvent, useEffect, useState } from "react";
import { api } from "../../services/api";
import { authorsType, categoriesType } from "./types";

toast.configure();

export function ManagementArea() {
  const [data, setData] = useState({
    title: "",
    authorId: "",
    categoryId: "",
    releaseDate: "",
    image: "",
  });

  const [authors, setAuthors] = useState<authorsType[]>([]);
  const [categories, setCategories] = useState<categoriesType[]>([]);

  useEffect(() => {
    async function getAllAuthors() {
      try {
        const allAuthors = await api.get<any>("/authors-all");
        const { data } = allAuthors;

        setAuthors(data?.data);
      } catch (err: any) {
        console.log(err.message);
      }
    }
    getAllAuthors();
  }, []);

  useEffect(() => {
    async function getAllCategories() {
      try {
        const allCategories = await api.get<any>("/categories-all");
        const { data } = allCategories;

        setCategories(data?.data);
      } catch (err: any) {
        console.log(err.message);
      }
    }
    getAllCategories();
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }
  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  async function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const newBook = await api.post("/book-new", data);
      const { request } = newBook;
      return toast.success("Book Registred With success", {
        position: "top-right",
        autoClose: 8000,
      });
    } catch (err: any) {
      return toast.error(err.message, {
        position: "top-right",
        autoClose: 8000,
      });
    }
  }

  return (
    <>
      {
        <Container>
          <h3 className="text-center">Management Books Area</h3>
          <Row>
            <Col>
              <div className={styles.management}>
                <Form className={styles.form} onSubmit={handleFormSubmit}>
                  <h4>Create a New Book</h4>
                  <span>Book title</span>
                  <div>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      className={(styles.inputsInfo, "form-control")}
                      placeholder="Book Title"
                      value={data.title}
                      onChange={handleInputChange}
                    ></Input>
                  </div>
                  <span>Switch the author</span>
                  {
                    <select
                      id="authorId"
                      name="authorId"
                      onChange={handleSelectChange}
                      value={data.authorId}
                      className={(styles.inputsInfo, "form-control")}
                    >
                      <option value="" selected disabled>
                        Select the Book Author
                      </option>
                      {authors.map((values) => {
                        return (
                          <option value={values.id}>{values.author}</option>
                        );
                      })}
                    </select>
                  }
                  <span>select a category</span>
                  <select
                    id="categoryId"
                    name="categoryId"
                    onChange={handleSelectChange}
                    value={data.categoryId}
                    className={(styles.inputsInfo, "form-control")}
                  >
                    <option value="" selected disabled>
                      Select the Book summary Category
                    </option>
                    {categories.map((values) => {
                      return (
                        <option value={values.id}>{values.category}</option>
                      );
                    })}
                  </select>
                  <span>Inform when this book was released</span>
                  <Input
                    id="releaseDate"
                    name="releaseDate"
                    type="date"
                    placeholder="Book Release Date"
                    value={data.releaseDate}
                    onChange={handleInputChange}
                    className={(styles.inputsInfo, "form-control")}
                  ></Input>
                  <span>Book Image</span>
                  <Input
                    id="image"
                    image="image"
                    type="file"
                    value={data.image}
                    onChange={handleInputChange}
                    className={(styles.inputsInfo, "form-control")}
                  ></Input>
                  <span>
                    <br />
                  </span>
                  <Button className={styles.buttonCreate} id="btnNotify">
                    Create Book
                  </Button>
                  <ToastContainer />
                </Form>
              </div>
            </Col>
            <Col>
              <img src={firstImage} alt="newBook" />
            </Col>
          </Row>
        </Container>
      }
    </>
  );
}
