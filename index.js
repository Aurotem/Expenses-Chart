import data from "./data.json" assert { type: "json" };

const bars = document.getElementsByClassName('bar');

const toDay = new Date().getDay().toString();

const barInfo = document.getElementById('bar-info');

for (let i = 0; i < 7; i++) {
  bars[i].style.height = (data[i]["amount"] + "%").toString();

  bars[i].addEventListener('mousemove', (e) => {
    let bar = document.elementFromPoint(e.clientX, e.clientY);
    let value = bar.style.height.toString();
    barInfo.innerText = '$' + value.slice(0, -1);

  });
}

document.addEventListener('mousemove', (e) => {
  barInfo.style.left = e.clientX + 8 + 'px';
  barInfo.style.top = e.clientY + 'px';
})

switch (toDay) {
  case("0"):
  bars[6].style.backgroundColor = 'hsl(186, 34%, 60%)';
  break;
  case("1"):
  bars[0].style.backgroundColor = 'hsl(186, 34%, 60%)';
  break;
  case("2"):
  bars[1].style.backgroundColor = 'hsl(186, 34%, 60%)';
  break;
  case("3"):
  bars[2].style.backgroundColor = 'hsl(186, 34%, 60%)';
  break;
  case("4"):
  bars[3].style.backgroundColor = 'hsl(186, 34%, 60%)';
  break;
  case("5"):
  bars[4].style.backgroundColor = 'hsl(186, 34%, 60%)';
  break;
  case("6"):
  bars[5].style.backgroundColor = 'hsl(186, 34%, 60%)';
  break;
}