import "./category-list.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const categories = [
  {
    id: 1,
    title: "Living Room",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_960_720.jpg",
  },
  {
    id: 2,
    title: "Bedroom",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484__340.jpg",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const CategoryList = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
