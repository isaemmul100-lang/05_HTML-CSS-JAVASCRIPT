/* 
함수 매개변수에서 구조분해
*/

function displayByPosition(
  producr = "아무개",
  width = 10,
  height = 20,
  items = [],
) {
  console.log(`${producr} ${width} ${height}`);
  console.log(items);
}

displayByPosition("신사임당", undefined, undefined, ["COffee", "Donut"]);

function displayProduct({
  producr = "아무개",
  width = 10,
  height = 20,
  items = [],
}) {
  console.log(`${producr} ${width} ${height}`);
  console.log(items);
}

const exampleProduct = {
  items: ["COffee", "Donut"],
  producr: "bear",
};

displayProduct(exampleProduct);

displayProduct({});
