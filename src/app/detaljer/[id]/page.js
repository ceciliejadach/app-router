import Image from "next/image";

const Page = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/recipes/${id}`);
  let recipe = await response.json();

  return (
    <div>
      <span className="">{recipe.ingredients}</span>
      <Image src={`${recipe.image}`} alt="Picture of the dish" width={500} height={500} />
    </div>
  );
};

export default Page;
