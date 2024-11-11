import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let response = await fetch("https://dummyjson.com/recipes");
  let data = await response.json();
  return (
    <ul className="grid grid-cols-4 gap-6 py-6">
      {data.recipes.map((recipe) => (
        <li className="grid bg-white rounded-md h-fit drop-shadow-md" key={recipe.id}>
          <Image className="rounded-t-md w-full h-fit" src={`${recipe.image}`} alt="Picture of the dish" width={300} height={300} />
          <div className="px-2 pt-2 pb-4">
            <strong className="text-2xl text-[color:--blue]">
              <Link href={`/detaljer/${recipe.id}`}>{recipe.name}</Link>
            </strong>
            <div className="grid gap-2 text-[color:--blue]">
              <p>{recipe.cuisine}</p>
              <p className="text-[color:--blue]">
                <strong>Difficulty:</strong> {recipe.difficulty}
              </p>
              <div className="flex gap-2 flex-wrap text-[color:--blue]">
                {recipe.tags.map((tag) => (
                  <p className="text-[color:--grey]  px-2 py-1 border-solid border-[color:--grey] border-[1px] rounded-full text-sm h-fit" key={tag}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
