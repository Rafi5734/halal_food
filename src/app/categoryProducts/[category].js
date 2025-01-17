import React from "react";
import { useRouter } from "next/navigation";

export default function CategoryPage({ categoryData }) {
  const router = useRouter();
  const { category } = router.query;

  console.log("category", category);

  return (
    <div>
      <h1>Category: {category}</h1>
      <ul>
        {categoryData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
