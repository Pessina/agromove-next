import React from "react";
import { Modal } from "semantic-ui-react";

const styleCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

function noscroll() {
  window.scrollTo(0, 0);
}

function burgerMenu() {
  document.getElementById("sidebar").classList.toggle("visible");
  document.getElementById("sidebar-pusher").classList.toggle("dimmed");
  if (document.getElementById("sidebar-pusher").classList.contains("dimmed")) {
    window.addEventListener("scroll", noscroll);
  } else {
    window.removeEventListener("scroll", noscroll);
  }
}

function modalImage(image) {
  return (
    <Modal trigger={image} size="large">
      <Modal.Content image>{image}</Modal.Content>
    </Modal>
  );
}

export { burgerMenu, modalImage, styleCenter };
