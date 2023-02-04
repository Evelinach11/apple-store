const product_01_image_01 =
  require("../images/products/product-01 (1).jpg").default;
const product_01_image_02 =
  require("../images/products/product-01 (2).jpg").default;
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 =
  require("../images/products/product-02 (1).jpg").default;
const product_02_image_02 =
  require("../images/products/product-02 (2).jpg").default;

const product_03_image_01 =
  require("../images/products/product-03 (1).jpg").default;
const product_03_image_02 =
  require("../images/products/product-03 (2).jpg").default;

const product_04_image_01 =
  require("../images/products/product-04 (1).jpg").default;
const product_04_image_02 =
  require("../images/products/product-04 (2).jpg").default;

const product_05_image_01 =
  require("../images/products/product-05 (1).jpg").default;
const product_05_image_02 =
  require("../images/products/product-05 (2).jpg").default;

const product_06_image_01 =
  require("../images/products/product-06 (1).jpg").default;
const product_06_image_02 =
  require("../images/products/product-06 (2).jpg").default;

const product_07_image_01 =
  require("../images/products/product-07 (1).jpg").default;
const product_07_image_02 =
  require("../images/products/product-07 (2).jpg").default;

const product_08_image_01 =
  require("../images/products/product-08 (1).jpg").default;
const product_08_image_02 =
  require("../images/products/product-08 (2).jpg").default;

const product_09_image_01 =
  require("../images/products/product-09 (1).jpg").default;
const product_09_image_02 =
  require("../images/products/product-09 (2).jpg").default;

const product_10_image_01 =
  require("../images/products/product-10 (1).jpg").default;
const product_10_image_02 =
  require("../images/products/product-10 (2).jpg").default;

const product_11_image_01 =
  require("../images/products/product-11 (1).jpg").default;
const product_11_image_02 =
  require("../images/products/product-11 (2).jpg").default;

const product_12_image_01 =
  require("../images/products/product-12 (1).jpg").default;
const product_12_image_02 =
  require("../images/products/product-12 (2).jpg").default;

const products = [
  {
    title: "Apple iPhone",
    price: "189000",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-01",
    size: ["s", "m", "l", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
       І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "159000",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "blue"],
    slug: "ao-thun-dinosaur-02",
    size: ["s", "m"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "190000",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange", "yellow"],
    slug: "ao-thun-dinosaur-03",
    size: ["m"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "orange", "blue"],
    slug: "ao-thun-polo-04",
    size: ["xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "pink"],
    slug: "ao-thun-polo-05",
    size: ["xxl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "ao-thun",
    colors: ["black"],
    slug: "ao-thun-polo-06",
    size: ["s", "m", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "red", "orange", "blue"],
    slug: "ao-somi-caro-07",
    size: ["l", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "red", "black"],
    slug: "ao-somi-dai-tay-08",
    size: ["s", "m", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    slug: "ao-somi-tay-dai-09",
    size: ["m"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "quan-jean-phong-cach-10",
    size: ["l"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_11_image_01,
    image02: product_11_image_02,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "quan-jean-11",
    size: ["s", "m", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "194000",
    image01: product_12_image_01,
    image02: product_12_image_02,
    categorySlug: "quan-jean",
    colors: ["blue"],
    slug: "quan-jean-12",
    size: ["s", "m", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "189000",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red"],
    slug: "ao-thun-dinosaur-13",
    size: ["s", "m", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "159000",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "blue"],
    slug: "ao-thun-dinosaur-14",
    size: ["s", "m"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple iPhone",
    price: "190000",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "ao-thun",
    colors: ["red", "blue"],
    slug: "ao-thun-dinosaur-15",
    size: ["xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple",
    price: "194000",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "ao-somi",
    colors: ["blue", "black"],
    slug: "ao-somi-dai-tay-16",
    size: ["m", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple",
    price: "194000",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    slug: "ao-somi-tay-dai-17",
    size: ["s", "l", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  {
    title: "Apple",
    price: "194000",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "quan-jean-phong-cach-18",
    size: ["s", "m", "l", "xl"],
    description:
      "Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чип для iPhone. Виняткова міцність.\
    І величезний приріст ресурсу акумулятора. Усе це Pro.",
  },
  // 18 products
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductBySlug(e.slug);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  // console.log(res)
  // console.log('sorted')
  // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsInfo,
};

export default productData;
