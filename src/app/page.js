import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let response = await fetch("https://dummyjson.com/recipes");
  let data = await response.json();
  return (
    <ul className="grid grid-cols-4">
      {data.recipes.map((recipe) => (
        <li className="py-4 px-4" key={recipe.id}>
          <div className="grid">
            <strong>
              <Link href={`/detaljer/${recipe.id}`}>{recipe.name}</Link>
            </strong>
          </div>
        </li>
      ))}
    </ul>
  );
}
