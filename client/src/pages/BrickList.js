import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_BRICKS } from "../utils/actions";
import BrickItem from "../../src/components/BrickItem";
import { QUERY_BRICKS } from "../utils/queries";
import { Link } from "react-router-dom";

function BrickList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_BRICKS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_BRICKS,
        getBricks: data.getBricks,
      });
    }
  }, [data, dispatch]);

  function filterBricks() {
    if (!currentCategory) {
      return state.getBricks;
    }

    return state.getBricks.filter(
      (bricks) => bricks.part_cat_id === currentCategory
    );
  }

  return (
    <div>
      <div className="container items-center mx-auto p-36">
        <div className="flex flex-col items-start">
          <Link to={"/"}>
            <div className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
              <h2>Different Category</h2>
            </div>
          </Link>

          {/* <DropdownTab></DropdownTab> */}
          <div>
            <h2 className="text-6xl text-bold">Blake's Bricks:</h2>
            {state.getBricks.length ? (
              <div className="grid grid-cols-3 gap-6">
                {filterBricks().map((bricks) => (
                  <BrickItem
                    key={bricks._id}
                    _id={bricks._id}
                    part_num={bricks.part_num}
                    name={bricks.name}
                    part_cat_id={bricks.part_cat_id}
                    part_url={bricks.part_url}
                    part_img_url={bricks.part_img_url}
                    quantity={bricks.quantity}
                    price={bricks.price}
                    color_id={bricks.color_id}
                    color_name={bricks.color_name}
                    rgb={bricks.rgb}
                    is_trans={bricks.is_trans}
                    purchaseQuantity={bricks.purchaseQuantity}
                  />
                ))}
              </div>
            ) : (
              <h2>You haven't added any Bricks yet!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrickList;
