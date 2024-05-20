// import React from "react";
// import Adminmenu from "../../components/Adminmenu";

// const AllTags = () => {
//   return (
//     <>
//       <div id="admin-dashboard">
//         <div className="admin-profile">
//           <div className="admin-row row">
//             <div className="col-lg-3">
//               <Adminmenu />
//             </div>
//             <div className="col-lg-9">
//               <div className="col-lg-9">
//                 <div className="item-add-form py-5 pe-5">
//                   <form action="" method="POST">
//                     <div className="item-photo">
//                       <label>
//                         <div className="select-item-photo">
//                           {photo && (
//                             <img src={URL.createObjectURL(photo)} alt="" />
//                           )}
//                         </div>
//                         <div className="item-img-name">
//                           {photo
//                             ? photo?.name.substring(0, 20)
//                             : "Upload Photo"}
//                         </div>
//                         <input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => {
//                             setPhoto(e.target.files[0]);
//                           }}
//                           hidden
//                           name="photo"
//                         />
//                       </label>
//                     </div>
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <input
//                           type="text"
//                           name="name"
//                           onChange={onChange}
//                           value={product.name}
//                           placeholder="Enter Product Name..."
//                         />
//                       </div>
//                       <div className="col-sm-6">
//                         <input
//                           type="number"
//                           name="price"
//                           value={product.price}
//                           onChange={onChange}
//                           placeholder="Enter Product Price..."
//                         />
//                       </div>
//                       <div className="col-sm-6">
//                         <input
//                           type="number"
//                           name="quantity"
//                           value={product.quantity}
//                           onChange={onChange}
//                           placeholder="Enter Product Quatity..."
//                         />
//                       </div>
//                       <div className="col-sm-6">
//                         <input
//                           type="text"
//                           name="sku"
//                           value={product.sku}
//                           onChange={onChange}
//                           placeholder="Enter Product Sku..."
//                         />
//                       </div>

//                       <div className="col-sm-3">
//                         {" "}
//                         <div class="add-cart-btn effect" onClick={handleSubmit}>
//                           Add Category
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllTags;
