const getTodo = async () => {
  const resp = await fetch(`http://localhost:3000/todos`);
  const data = await resp.json();
  console.log(data);
  return data;
};

export default getTodo;
