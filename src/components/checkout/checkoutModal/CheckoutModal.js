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
import { getCookie } from "@/components/helper/cookies";

const CheckoutModal = ({ productCookieValue }) => {
  const sizeCookie = getCookie("size");
  const color = getCookie("color");
  // console.log("color", color);
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <Table striped>
          <TableHead className="">
            <TableHeadCell>Product image</TableHeadCell>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>QTY</TableHeadCell>
            <TableHeadCell>Size</TableHeadCell>
            <TableHeadCell>Total Price</TableHeadCell>
            <TableHeadCell>Discount Price</TableHeadCell>
            <TableHeadCell>discount(%)</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white">
              <TableCell className="whitespace-nowrap font-medium text-gray-900">
                <Image
                  src={JSON.parse(productCookieValue?.color)?.url}
                  width={250}
                  className="rounded-md"
                  height={250}
                  sizes="(max-width: 100%)"
                  alt="checkout_product_img"
                />
                <p className="font-medium text-white mt-3">
                  Color: {JSON.parse(productCookieValue?.color)?.title}
                </p>
              </TableCell>
              <TableCell>{productCookieValue?.name}</TableCell>
              <TableCell>{productCookieValue?.productQuantity}</TableCell>
              <TableCell>{sizeCookie}</TableCell>
              <TableCell>${productCookieValue?.price}</TableCell>
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
