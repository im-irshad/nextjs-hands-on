import React from "react";
import { useRouter } from "next/router";

export default function reviewid() {
  const router = useRouter();
  const { productid, reviewid } = router.query;
  return (
    <div>
      review id {reviewid} && product id {productid}
    </div>
  );
}
