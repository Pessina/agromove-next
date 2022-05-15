import React from "react";
import $ from "jquery";
import { isTablet, isMobile } from "react-device-detect";
import { Modal } from "semantic-ui-react";

const styleCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

function sendDataToSheet(data, formId) {
  const url_email =
    "https://script.google.com/macros/s/AKfycbx1TYwqarq_FO92gsoqSmX3w-AvZJagmSSXZtY1i_J2Qwfvg1XA/exec";
  const url_complete =
    "https://script.google.com/macros/s/AKfycbw8tLPw8JmWyqTONMGtwtFRjwtA4OMyEnYW0coqwUlb_rHK6qI2/exec";
  let url = null;

  if (formId.indexOf("formComplete") != -1) {
    url = url_complete;
  }
  if (formId.indexOf("formEmail") != -1) {
    url = url_email;
  }

  return $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data,
  });
}

function parseToRd(array) {
  const auxArray = array;

  const rdMapping = {
    name: "Nome",
    email: "email",
    phone: "Celular",
    area: "Atividade",
  };

  for (const element in auxArray) {
    if (rdMapping[auxArray[element].name]) {
      auxArray[element].name = rdMapping[auxArray[element].name];
    }
  }

  RdIntegration.post(auxArray, () => {});
}

function getDateInformation(array) {
  const date = new Date();
  let auxArray = array;

  auxArray = auxArray.concat({
    name: "date",
    value: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
  });
  auxArray = auxArray.concat({
    name: "time",
    value: `${date.getHours()}:${date.getMinutes()}`,
  });

  return auxArray;
}

function getDeviceInformation(array) {
  let auxArray = array;

  if (isMobile) {
    auxArray = auxArray.concat({ name: "device", value: "mobile" });
  } else if (isTablet) {
    auxArray = auxArray.concat({ name: "device", value: "tablet" });
  } else {
    auxArray = auxArray.concat({ name: "device", value: "desktop" });
  }

  return auxArray;
}

function submitForm(formId, plan) {
  console.log(formId, plan);
  return null;
}

function handleClickButtonForms(gaEvent, formId, buttonText) {
  submitForm(formId, buttonText);
}

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

export { styleCenter, handleClickButtonForms, burgerMenu, modalImage };
