import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Image from "next/image";
import { calculateTotalPrice } from "@/utils/CartUtils";

const CheckoutModal = ({ productCookieValue }) => {
  console.log("productCookieValue", productCookieValue);

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <Table striped>
          <TableHead className="">
            <TableHeadCell>Product image</TableHeadCell>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>QTY</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>discount</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white">
              <TableCell className="whitespace-nowrap font-medium text-gray-900">
                <Image
                  src={productCookieValue?.imageLink}
                  width={150}
                  className="rounded-md"
                  height={150}
                  sizes="(max-width: 100%)"
                  alt="checkout_product_img"
                />
              </TableCell>
              <TableCell>{productCookieValue?.name}</TableCell>
              <TableCell>{productCookieValue?.productQuantity}</TableCell>
              <TableCell>
                $
                {productCookieValue?.price -
                  (productCookieValue?.price * productCookieValue?.discount) /
                    100}
              </TableCell>
              <TableCell>{productCookieValue?.discount}%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CheckoutModal;
