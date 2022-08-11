import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import {
  UPDATE_BRICKS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_BRICK_TO_CART,
} from "../utils/actions";
import { QUERY_BRICKS } from "../utils/queries";
import { pluralize } from "../utils/helpers";
import { match } from "../utils/helpers";

function Singlebrick() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentBrick, setCurrentBrick] = useState({});

  const { loading, data } = useQuery(QUERY_BRICKS);

  const { getBricks, currentCategory } = state;

  useEffect(() => {
    if (getBricks.length) {
      setCurrentBrick(getBricks.find((bricks) => bricks._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_BRICKS,
        getBricks: data.getBricks,
      });
    }
  }, [getBricks, data, dispatch, id]);
  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      getBricks: { ...currentBrick, purchaseQuantity: 1 },
    });
    match(currentBrick);
  };

  return (
    <>
      {currentBrick ? (
        <div>
          <div className="container items-center mx-auto p-36">
            <Link
              to={`/bricklist/${state.currentCategory}`}
              className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded"
            >
              Back to Bricks
            </Link>
            <div className="flex flex-col items-center mx-auto bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={currentBrick.part_img_url}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {currentBrick.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Part Number: {currentBrick.part_num}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Color: {currentBrick.color_name}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Translucent: {currentBrick.is_trans}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Quantity: {currentBrick.quantity}
                  {pluralize(" brick", currentBrick.quantity)}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price: {currentBrick.price}
                </p>
                <button
                  className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Singlebrick;
