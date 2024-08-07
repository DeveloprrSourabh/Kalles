import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getAllCarts, updateCart } from "../Slices/cartSlice";
import Nodata from "../components/Nodata";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";

const Cartpage = () => {
  const dispatch = useDispatch();

  const [sets, setSets] = useState([]);
  const [auth, setAuth] = useAuth();
  const [active, setActive] = useState(false);
  const allcrt = useSelector((state) => state.cart.allCarts);

  useEffect(() => {
    dispatch(getAllCarts(auth?.user.id));
  }, [dispatch]);

  useEffect(() => {
    // Add quantity property to each product in the sets state
    setSets(
      allcrt?.map((product) => ({ ...product, quantity: product.count }))
    );
  }, [allcrt]);

  // Change Product Count
  const handleQuantityChange = (productId, increment) => {
    setActive(true);

    setSets((prevSets) =>
      prevSets.map((product) =>
        product?.proId?._id === productId
          ? { ...product, quantity: Math.max(1, product.quantity + increment) }
          : product
      )
    );
  };

  // Update Product Quantity in Backend
  const handleUpdate = (count, proId) => {
    setActive(false);
    dispatch(updateCart({ count, id: proId }));
  };
  // Calculate the subtotal
  const cartSubtotal = sets?.reduce((total, product) => {
    return total + product?.proId?.price * product.quantity;
  }, 0);
  return (
    <>
      <Layout>
        <section id="cart-page">
          <div className="contact-page-start mx-5 py-3 my-3 hover">
            <div className="row cart-row">
              {sets?.length === 0 ? (
                <div className="col-lg-8">
                  <Nodata message={"Cart Is Empty"} />
                </div>
              ) : (
                <>
                  <div className="col-lg-8">
                    <div className="cart-heading mb-3">
                      <h2>Shopping Bag</h2>
                      <b>{sets?.length} items in </b>
                      <span>your bag</span>
                    </div>
                    <div className="cart-product">
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sets?.map((pro) => (
                            <tr key={pro._id}>
                              <td>
                                <div className="cart-pro-detail d-flex gap-3">
                                  <div className="cart-pro-img">
                                    <img
                                      width={"100%"}
                                      height={"100%"}
                                      src={`http://localhost:8000/api/v1/product/product-photo/${pro?.proId.slug}`}
                                      alt=""
                                    />
                                  </div>
                                  <div className="cart-dtl d-flex flex-column justify-content-around">
                                    <div>
                                      <div className="cart-cate">
                                        {pro?.proId?.category[0]?.name}
                                      </div>
                                      <div className="cart-name">
                                        <b>{pro?.proId?.name}</b>
                                      </div>
                                    </div>
                                    <div className="cate-adv">
                                      <div className="cate-pro-adv ">
                                        <span className="adv-ask ">Color </span>
                                        <b>. {pro?.proId?.color[0]?.name}</b>
                                      </div>
                                      <div className="cate-pro-adv ">
                                        <span className="adv-ask me-2">
                                          Size{" "}
                                        </span>
                                        <b>. {pro?.proId?.size[0]}</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <b>${pro?.proId?.price}</b>
                              </td>
                              <td>
                                <div className="cart-count">
                                  <button
                                    onClick={() => {
                                      handleQuantityChange(pro?.proId?._id, -1);
                                    }}
                                    className="operator"
                                    disabled={pro.quantity === 1}
                                  >
                                    —
                                  </button>
                                  <b className="mx-2">{pro.quantity}</b>
                                  <button
                                    onClick={() => {
                                      handleQuantityChange(pro?.proId?._id, 1);
                                    }}
                                    className="operator"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>
                                <b className="total-price">
                                  ${pro?.proId?.price * pro.quantity}
                                </b>
                                <div className="cart-update-btn">
                                  <button
                                    onClick={() =>
                                      handleUpdate(pro.quantity, pro?._id)
                                    }
                                    className={`${
                                      active ? "" : "opacity-25"
                                    } text-light border-0 mt-3 add-cart-btn effect`}
                                  >
                                    Update
                                  </button>
                                  <div
                                    onClick={() => {
                                      dispatch(deleteCart(pro?._id));
                                    }}
                                    className="text-light border-0 mt-3 add-cart-btn effect"
                                  >
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cart-bill">
                      <div className="coupons">
                        <h2>Coupon Code</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Et, distinctio iste!
                        </p>
                        <div className="coupon-input">
                          <input type="text" placeholder="Coupon Code" />
                          <div className="text-light border-0 add-cart-btn effect">
                            Apply
                          </div>
                        </div>
                        <div className="mt-4 final-amount-detail">
                          <h2>Cart Total</h2>
                          <div className="mb-1 final-amounts d-flex justify-content-between">
                            <p className="mb-0">Cart Subtotal</p>
                            <b>${cartSubtotal?.toFixed(2)}</b>
                          </div>
                          <div className="mb-1 final-amounts d-flex justify-content-between">
                            <p className="mb-0">Shipping Charge</p>
                            <b>$2.50</b>
                          </div>
                          <div className="mb-1 final-amounts d-flex justify-content-between">
                            <p className="mb-0">Discount</p>
                            <b className="text-light">-$3</b>
                          </div>
                          <div className="mb-1 final-amounts d-flex justify-content-between">
                            <p className="mb-0">Cart Total</p>
                            <b className="text-light large">
                              ${(cartSubtotal + 2.5 - 3).toFixed(2)}
                            </b>
                          </div>
                          <div className="text-light border-0 mt-3 add-cart-btn effect">
                            Buy Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cartpage;
