// import React from "react";
// import { useParams } from "react-router-dom";
// import { Product } from "../../types";
// import { fetchProducts } from "../../api/api"; // ✅ Загружаем товары
// import "./ProductPage.scss";

// export const ProductPage: React.FC = () => {
//   const { id } = useParams(); // ✅ Получаем id из URL
//   const [product, setProduct] = React.useState<Product | null>(null);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const loadProduct = async () => {
//       const products = await fetchProducts(); // Загружаем все товары
//       const foundProduct = products.find((p) => p.id === Number(id)); // Ищем нужный товар

//       if (foundProduct) {
//         setProduct(foundProduct);
//       }
//       setLoading(false);
//     };

//     loadProduct();
//   }, [id]);
//   const searchParams = new URLSearchParams(location.search);

// const name = searchParams.get("name"); // Получаем название товара
// const category = searchParams.get("category");
//   if (loading) return <p>Загрузка...</p>;
//   if (!product) return <p>Товар не найден</p>;

//   return (
//     <div className="productPage">
//       <h1>{name}</h1>
//       <img
//         src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
//         alt={product.name}
//       />
//       {category}
//       <p>{product.ageCategory}</p>
//       <p className="productPage__price">{product.priceRegular} грн</p>
//     </div>
//   );
// };
import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types";
import { fetchProducts } from "../../api/api";
import "./ProductPage.scss";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const ProductPage: React.FC = () => {
  const { id } = useParams(); // Получаем id из URL
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadProduct = async () => {
      console.log("Загружаем товары...");
      const products = await fetchProducts(); // Загружаем товары

      console.log("Все товары:", products);
      console.log("Ищем товар с id:", id);

      const foundProduct = products.find((p) => p.id === Number(id));

      if (foundProduct) {
        console.log("Товар найден:", foundProduct);
        setProduct(foundProduct);
      } else {
        console.error("❌ Товар не найден!");
      }

      setLoading(false);
    };

    loadProduct();
  }, [id]);

  if (loading) return <p>Завантаження...</p>;
  if (!product) return <p>❌ Товар не знайдено</p>;

  return (
    <div className="productPage container">
      <Breadcrumbs
        paths={[
          { name: "Головна", path: "/" },
          { name: "Каталог", path: "/catalog" },
          { name: product?.category || "Категорія" },
          { name: product?.name || "Товар" },
        ]}
      />

      <div className="productPage__content">
        <h1>{product.name}</h1>
        <p>Категория: {product.category}</p>

        <img
          src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
          alt={product.name}
          onError={(e) =>
            (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/no-image.png`)
          } // Если картинка не загружается, ставим заглушку
        />
        <p>{product.ageCategory}</p>
        <p className="productPage__price">{product.priceRegular} грн</p>
      </div>
    </div>
  );
};
