let btn_sub = document.getElementById("button_sub");
let inp = document.getElementById("input");

let password = "Love".trim().toLowerCase();
let inp_pass = "";

inp.onchange = () => {
  inp.style.color = "#555";
  inp_pass = inp.value.trim().toLowerCase();
}

btn_sub.onclick = () => {
  if(inp_pass == password){
    window.location.href = "/Main";
  }else{
    inp.style.color = "#ff2d2d";
  }
}

inp.addEventListener("keydown", () => {
  if(event.key === "Enter"){
    btn_sub.click();
  }
})