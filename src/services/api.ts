export async function getProducts() {
  const response = await fetch('/mock/products.json');

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  const data = await response.json();
  return data.products;
}