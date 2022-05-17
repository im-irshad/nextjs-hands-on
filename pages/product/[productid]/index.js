import { useRouter } from "next/router";
import React from "react";

function productDetail() {
  const router = useRouter();
  const productId = router.query.productid;
  return <div>{productId}</div>;
}

export default productDetail;
