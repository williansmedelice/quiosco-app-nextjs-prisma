"use client";
import ReactModal from "react-modal";
import ModalProducto from "@/components/ModalProducto";
import useQuiosco from "@/hooks/useQuiosco";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Modal() {
  const { modal } = useQuiosco();

  return (
    <>
      {modal && (
        <ReactModal isOpen={modal} style={customStyles} ariaHideApp={false}>
          <ModalProducto />
        </ReactModal>
      )}
    </>
  );
}

export default Modal;
