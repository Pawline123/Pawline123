import { getProducts } from '../../../lib/shopify';

export async function GET() {
  try {
    const products = await getProducts();
    return Response.json({ products });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 502 });
  }
}
