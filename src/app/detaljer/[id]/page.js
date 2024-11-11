import Image from "next/image";
import { PiCookingPot } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";

const Page = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/recipes/${id}`);
  let recipe = await response.json();

  return (
    <div className="grid grid-cols-2 gap-4 py-4">
      <Image className="rounded-md" src={`${recipe.image}`} alt="Picture of the dish" width={650} height={650} />
      <div className="grid gap-2 h-fit ">
        {" "}
        <strong>Ingredients</strong>
        <ul className="pl-4">
          {recipe.ingredients.map((ingredient) => (
            <li className="list-disc" key={ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
        <p>
          <strong>Instructions</strong>
        </p>
        <p>{recipe.instructions}</p>
        <div className="flex gap-4">
          <span className="flex gap-1 items-center">
            <IoIosTimer />
            {recipe.prepTimeMinutes} min.
          </span>
          <span className="flex gap-1 items-center">
            <PiCookingPot />
            {recipe.cookTimeMinutes} min.
          </span>
        </div>
      </div>
      {/* <span className="">{recipe.ingredients}</span> */}
    </div>
  );
};

export default Page;
