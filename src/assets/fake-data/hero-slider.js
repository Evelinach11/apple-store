const img1 = require("../images/slider/slide_1.png").default;
const img2 = require("../images/slider/slide_2.png").default;
const img3 = require("../images/slider/slide_3.png").default;

const heroSliderData = [
  {
    title: "Airpods Max",
    description:
      "Представляємо AirPods Max, що гармонійно поєднують найвищу якість звуку із чарівною простотою AirPods. Це досі нечуваний досвід звучання",
    img1: img1,
    color: "mintblue",
    path: "/catalog/ao-thun-dinosaur-01",
  },
  {
    title: "Airpods PRO",
    description:
      "Технологія персоналізованого просторового аудіо забезпечує об’ємний звук.",
    img2: img2,
    path: "/catalog/ao-thun-dinosaur-02",
    color: "orange",
  },
  {
    title: "Apple watch 7",
    description:
      "Apple Watch Series 8 має великий, бездоганний і завжди ввімкнений дисплей. Завдяки вузьким рамкам дисплей доходить до країв і елегантно перетікає у вигнутий корпус.",
    img3: img3,
    path: "/catalog/ao-thun-dinosaur-03",
    color: "lightgreen",
  },
];

export default heroSliderData;
