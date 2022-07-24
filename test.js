const obj = {
  brandVariantId0: "101",
  bundleSalesTarget0: "0",
  contactLimit0: "0",
  contactTarget0: "0",
  freeSampling0: "0",
  packetSalesTarget0: "0",
  vaoSalesTarget0: "0",
  brandVariantId1: "102",
  bundleSalesTarget1: "0",
  contactLimit1: "0",
  contactTarget1: "0",
  freeSampling1: "0",
  packetSalesTarget1: "0",
  vaoSalesTarget1: "0",
  brandVariantId2: "103",
  bundleSalesTarget2: "0",
  contactLimit2: "0",
  contactTarget2: "0",
  freeSampling2: "0",
  packetSalesTarget2: "0",
  vaoSalesTarget2: "0",
  brandVariantId3: "104",
  bundleSalesTarget3: "0",
  contactLimit3: "0",
  contactTarget3: "0",
  freeSampling3: "0",
  packetSalesTarget3: "0",
  vaoSalesTarget3: "0",
  brandVariantId4: "105",
  bundleSalesTarget4: "0",
  contactLimit4: "0",
  contactTarget4: "0",
  freeSampling4: "0",
  packetSalesTarget4: "0",
  vaoSalesTarget4: "0",
  brandVariantId5: "106",
  bundleSalesTarget5: "0",
  contactLimit5: "0",
  contactTarget5: "0",
  freeSampling5: "0",
  packetSalesTarget5: "0",
  vaoSalesTarget5: "0",
};

let newObj = {};
let state = {};
const simplify1 = Object.entries(obj).map((item) => item);
// console.log(
//   simplify1.map(
//     (item, i) => item[0].includes(0) && { ...newObj, [item[0]]: item[1] }
//   )
// );
let count = 0;
for (let i = 0; i < simplify1.length/7; i++) {
  let j = i;
  // simplify1.map((item,i) =>((item[0].includes((i))) &&console.log(item[0])))
  console.log(
    simplify1
      .filter(
        (item, index) =>
          item[0].includes(j) && { ...newObj, [item[0]]: item[1] }
      )
      // .map((item, i) => ({ 
      //   brandVariantId: item[1],
      //   bundleSalesTarget: item[1],
      //   contactLimit: item[1],
      //   contactTarget: item[1],
      //   freeSampling: item[1],
      //   packetSalesTarget: item[1],
      //   vaoSalesTarget: item[1],
      //  }))
  );
}
// console.log(newObj);
