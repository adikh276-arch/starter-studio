export function getSessionUserId(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('user_id') || localStorage.getItem('guest_id') || 'local-guest';
}

export const pool = {
  async query(text: string, params: any[] = []) {
    console.log('[Shim] DB Query:', text, params);
    return [];
  }
};

export async function initializeUser(userId: string) {
  console.log('[Shim] Initialize User:', userId);
}

export async function logUserActivity(moduleName: string, actionType: string, payload: any) {
  const userId = getSessionUserId();
  if (!userId) return;
  
  try {
    const key = `fitness_logs_${userId}_${moduleName}`;
    const logs = JSON.parse(localStorage.getItem(key) || '[]');
    logs.unshift({ actionType, payload, timestamp: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(logs.slice(0, 50)));
    console.log(`[Shim] Logged ${actionType} for ${moduleName}`);
  } catch (e) {
    console.error('Failed to log user activity locally:', e);
  }
}

export async function fetchUserActivityLogs(moduleName: string): Promise<any[]> {
  const userId = getSessionUserId();
  if (!userId) return [];
  
  try {
    const key = `fitness_logs_${userId}_${moduleName}`;
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch (e) {
    console.error(`Failed to fetch user activity logs locally for ${moduleName}:`, e);
    return [];
  }
}
