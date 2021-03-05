
export default (title,flexDirection) => {
  const flexDirectionExample =
    document.getElementsByClassName("flex-direction-example")[0];
  const { height, width } = 
    flexDirectionExample.parentElement.getBoundingClientRect();

  let button = document.createElement("button");
  button.innerText = title;

  const transitionEnd = () => {
    flexDirectionExample.style["flex-direction"] = flexDirection;
    flexDirectionExample.style.height = `${height}px`;
    flexDirectionExample.style.width  = `${width}px`;
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
