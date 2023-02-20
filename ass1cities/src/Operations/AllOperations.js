import Swal from "sweetalert2"; //makes cool popups.

export function GetRandomNumber(length) {
  //  setNumber(randomNumber);
  let min = 0;
  let max = length;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//https://www.redbitdev.com/post/react-function-components-testable-code-patterns

export function alertItemName(item) {
  return Swal.fire({
    title: "Did you guess correctly?",
    text: item,
    icon: "question",
    confirmButtonText: "Cool",
    toast: "OK",
    position: "top",
    timer: "3000",
    showCloseButton: "false",
  });
}
