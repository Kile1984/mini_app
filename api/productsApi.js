import { mockData } from "../state/mockData.js";

export async function fetchProducts() {
  await new Promise((reslove) => setTimeout(reslove, 1500));

  return mockData;
}
