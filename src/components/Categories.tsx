//Bu componenti "getir.tsx" ve "getirbuyuk.tsx" sayfalarında kullandım.
import { CategoriesProps } from "../types";

const Categories = ({ categories, categoriesTitle }: CategoriesProps) => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-base font-semibold ms-3 mb-3 px-6 md:px-0 text-[#3e3e3e]">
          {categoriesTitle}
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-50 text-[#3e3e3e] hover:text-primary cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-12 h-12 rounded border border-gray-200"
              />
              <span className="text-base font-semibold  whitespace-wrap  tracking-tight ">
                {category.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
