export function apiPath(path: string): string {
  return `/therapy${path}`;
}

export async function mockFetch(urlOrPath: string, options?: RequestInit) {
  // Determine if it was called with mockFetch(apiPath('/api/endpoint')) or mockFetch('/api/endpoint')
  const url = urlOrPath.startsWith('/therapy') ? urlOrPath : apiPath(urlOrPath);
  
  const endpoint = url.split('?')[0].split('/').pop() || 'unknown';
  const userId = typeof sessionStorage !== 'undefined' ? (sessionStorage.getItem("user_id") || localStorage.getItem("guest_id") || "guest") : "guest";
  const key = `mock_${endpoint}_${userId}`;

  if (!options || options.method === 'GET' || !options.method) {
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    return {
      ok: true,
      status: 200,
      json: async () => ({ success: true, data })
    };
  }

  if (options.method === 'POST') {
    const body = JSON.parse(options.body as string);
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    // Try to ensure there's an ID
    const entry = { id: crypto.randomUUID(), ...body, created_at: new Date().toISOString() };
    data.unshift(entry);
    localStorage.setItem(key, JSON.stringify(data.slice(0, 100)));
    return {
      ok: true,
      status: 200,
      json: async () => ({ success: true, data: entry })
    };
  }
  
  if (options.method === 'DELETE') {
    const searchParams = new URL(url, 'http://localhost').searchParams;
    const id = searchParams.get('id');
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    const newData = data.filter((item: any) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(newData));
    return {
      ok: true,
      status: 200,
      json: async () => ({ success: true })
    };
  }

  return { ok: false, status: 400, json: async () => ({}) };
}
