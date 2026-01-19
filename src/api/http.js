const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * 統一 request 入口
 */
async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: 'include', // 之後要 cookie / auth 直接可用
    ...options,
  });

  // HTTP 層錯誤（404 / 500）
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return res.json();
}

/**
 * GET
 */
export function get(path, params) {
  let url = path;

  if (params && Object.keys(params).length > 0) {
    const query = new URLSearchParams(params).toString();
    url += `?${query}`;
  }

  return request(url, {
    method: 'GET',
  });
}

/**
 * POST (JSON)
 */
export function post(path, body) {
  return request(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

/**
 * PUT
 */
export function put(path, body) {
  return request(path, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

/**
 * DELETE
 */
export function del(path) {
  return request(path, {
    method: 'DELETE',
  });
}
