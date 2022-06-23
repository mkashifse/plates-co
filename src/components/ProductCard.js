import { Button } from "./kit";

const ProductCard = ({ image, name, code, price, onAdd, isOffer }) => (
  <div className=" rounded-xl   hover:shadow-xl border border-slate-100 ">
    <img
      src={
        code === "R01"
          ? "red.png"
          : code === "G01"
          ? "green.png"
          : "blue.jpeg"
      }
      className="aspect-auto rounded-t"
    ></img>
    <div className="p-4">
      <div>
        <h3 className="text-green-600 text-xs font-bold">{code ? code : "--"}</h3>
        <h2>{name ? name : "--"}</h2>
        <p className="text-right">${price ? price : "--"}</p>
      </div>

      <div className="flex flex-col justify-end h-12 mt-2">
        <div>
          {isOffer ? (
            <div className="text-green-600 text-xs text-center p-2 font-bold">
              Buy One get One Free
            </div>
          ) : (
            ""
          )}
        </div>
        <Button className="w-full" onClick={() => onAdd()}>
          Add To Cart
        </Button>
      </div>
    </div>
  </div>
);

export default ProductCard;
