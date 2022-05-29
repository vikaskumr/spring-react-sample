export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};
