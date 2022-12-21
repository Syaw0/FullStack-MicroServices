const getTodo = async () => {
  const resp = await fetch("");
  const data = await resp.json();
  console.log(data);
  return data;
};

export default getTodo;
