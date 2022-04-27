export default function promiseClick(button) {

  return new Promise((resolve, reject) => {
    button.addEventListener('click', (event) => {
      return resolve(event);
    }, { once: true });
  });

}
