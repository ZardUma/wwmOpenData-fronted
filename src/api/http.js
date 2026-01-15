const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function get(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}