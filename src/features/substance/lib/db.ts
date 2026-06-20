export const executeQuery = async (query: string, params: any[] = []) => {
  console.warn("[DB] Mocked database. Query skipped.");
  return { rows: [] };
};

export default executeQuery;
