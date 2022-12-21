const postTodo = async (todo: string) => {
  const resp = await fetch("http://localhost:3000/addTodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: todo }),
  });
  const data = await resp.json();
  console.log(data);
  return data;
};

export default postTodo;
