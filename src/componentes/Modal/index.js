import "./estilo.css";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ServicoAssociado from "../../service/ServicoAssociado";

export default function ModalAssociar() {
  const [show, setShow] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [corpo, setCorpo] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    const fetchData = async () => {
      const { titulo, corpo } = await ServicoAssociado.buscarTextoModal();
      setTitulo(titulo);
      setCorpo(corpo);
    };
    fetchData();
  }, []);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Como Associar-se
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={{ __html: corpo }}></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
