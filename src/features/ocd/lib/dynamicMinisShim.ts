export const saveDynamicMiniEntry = async (table: string, userId: string, data: any) => {
  const key = `dynamic-mini-${table}-${userId}`;
  const existingStr = localStorage.getItem(key);
  const existing = existingStr ? JSON.parse(existingStr) : [];
  existing.push({
    id: crypto.randomUUID(),
    user_id: userId,
    created_at: new Date().toISOString(),
    data
  });
  localStorage.setItem(key, JSON.stringify(existing));
  return { success: true, data: existing };
};

export const getDynamicMiniHistory = async (table: string, userId: string) => {
  const key = `dynamic-mini-${table}-${userId}`;
  const existingStr = localStorage.getItem(key);
  const existing = existingStr ? JSON.parse(existingStr) : [];
  return { success: true, data: existing };
};
