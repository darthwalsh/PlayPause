function $(id) {
  return document.getElementById(id);
}

function createAudio() {
  let audio = $("audio");
  if (audio) {
    audio.parentNode.removeChild(audio);
  }

  audio = document.createElement("audio");
  audio.setAttribute("id", "audio");
  audio.setAttribute("controls", "");
  audio.setAttribute("src", $("input").value);

  audio.addEventListener("play", () => {
    $("abc").innerText += "\n" + audio.currentTime;
    localStorage.setItem("abc", $("abc").innerText);
  });

  $("abc").parentNode.insertBefore(audio, $("abc"));
}

window.onload = () => {
  $("input").addEventListener("input", createAudio);

  const params = new URLSearchParams(window.location.search);
  const fileParam = params.get("file");
  if (fileParam) {
    $("input").value = fileParam;
    createAudio();
  }

  $("clear").addEventListener("click", () => {
    if (!prompt("are you sure?")) return;

    $("abc").innerText = "";
    localStorage.setItem("abc", "");
  })

  $("abc").innerText = localStorage.getItem("abc") || "";
};
