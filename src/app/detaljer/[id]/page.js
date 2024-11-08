const Page = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/recipes/${id}`);
  let recipe = await response.json();

  return <div>{recipe.ingredients}</div>;
};

export default Page;
