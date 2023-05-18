import React from "react";
import { Modal } from "semantic-ui-react";

const noscroll = (): void => {
  window.scrollTo(0, 0);
};

const burgerMenu = (): void => {
  const sidebar = document.getElementById("sidebar");
  const sidebarPusher = document.getElementById("sidebar-pusher");

  if (sidebar && sidebarPusher) {
    sidebar.classList.toggle("visible");
    sidebarPusher.classList.toggle("dimmed");

    if (sidebarPusher.classList.contains("dimmed")) {
      window.addEventListener("scroll", noscroll);
    } else {
      window.removeEventListener("scroll", noscroll);
    }
  }
};

const modalImage = (image: JSX.Element): JSX.Element => {
  return (
    <Modal trigger={image} size="large">
      <Modal.Content image>{image}</Modal.Content>
    </Modal>
  );
};

export { burgerMenu, modalImage };
