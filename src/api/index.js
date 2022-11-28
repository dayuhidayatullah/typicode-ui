export const getData = async (url) => {
  try {
    const result = await fetch(url);
    if (result?.status === 200) {
      const user = await result.json();
      return user;
    } else {
      throw new Error("Failed fetch api");
    }
  } catch (error) {
    throw error;
  }
};
