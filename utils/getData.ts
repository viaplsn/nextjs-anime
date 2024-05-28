const getData = async (query: string) => {
  const result = await fetch(`https://api.jikan.moe/v4/${query}`);
  return await result.json();
};

export default getData;
