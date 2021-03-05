
export default direction => {
  const flexDirectionExample =
    document.getElementsByClassName("flex-direction-example")[0];
  const { height, width } = 
    flexDirectionExample.parentElement.getBoundingClientRect();

  let button = document.createElement("button");
  button.innerText = direction;

  const transitionEnd = () => {
    console.log({height, width, direction});
    flexDirectionExample.style.flexDirection = direction;
    flexDirectionExample.style.height = `${height}px`;
    flexDirectionExample.style.width  = `${width}px`;
    flexDirectionExample.removeEventListener(
      "webkitTransitionEnd", transitionEnd);
    flexDirectionExample.removeEventListener(
      "transitionend", transitionEnd);
  }

  function onClick() {


    flexDirectionExample.style.height = "0";
    flexDirectionExample.style.width  = "0";

    flexDirectionExample.addEventListener(
      "webkitTransitionEnd", transitionEnd);
    flexDirectionExample.addEventListener(
      "transitionend", transitionEnd);
  }

  button.onclick = onClick;

  return button;
}
