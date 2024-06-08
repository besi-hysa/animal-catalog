import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";

const AnimalGallery = ({ apiUrl, animalType }) => {
  const [animals, setAnimals] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log("Response:", response.data);
      setAnimals(response.data);
    } catch (error) {
      console.error(`Error fetching ${animalType}:`, error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = (animal) => {
    setSelectedAnimal(animal);
    setShow(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredAnimals = searchTerm
    ? animals.filter((animal) => animal.name.toLowerCase().includes(searchTerm))
    : animals;

  return (
    <Container>
      <h2 className="animal-type-header">{animalType} Gallery</h2>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder={`Search by ${animalType} name...`}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {filteredAnimals.map((animal, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={animal.image} />
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>{animal.origin}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(animal)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedAnimal?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <p>
                  <strong>ID:</strong> {selectedAnimal?.id}
                </p>
                <p>
                  <strong>Name:</strong> {selectedAnimal?.name}
                </p>
                <p>
                  <strong>Breed Group:</strong> {selectedAnimal?.breed_group}
                </p>
                <p>
                  <strong>Size:</strong> {selectedAnimal?.size}
                </p>
                <p>
                  <strong>Lifespan:</strong> {selectedAnimal?.lifespan}
                </p>
                <p>
                  <strong>Origin:</strong> {selectedAnimal?.origin}
                </p>
                <p>
                  <strong>Temperament:</strong> {selectedAnimal?.temperament}
                </p>
                <p>
                  <strong>Colors:</strong> {selectedAnimal?.colors.join(", ")}
                </p>
              </Col>
              <Col xs={12} md={6}>
                <Card.Img variant="top" src={selectedAnimal?.image} />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <strong>Description:</strong> {selectedAnimal?.description}
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AnimalGallery;
