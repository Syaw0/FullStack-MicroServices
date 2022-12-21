const postTodo = async (todo: string) => {
  const resp = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: todo }),
  });
  const data = await resp.json();
  console.log(data);
  return data;
};

export default postTodo;
