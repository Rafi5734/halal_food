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

const CheckoutModal = ({ myCookieValue }) => {
  console.log(myCookieValue);
  // console.log("product quantity", productQuantity);

  const totalPrice = calculateTotalPrice();
  return (
    <div className="">
      <div className="overflow-x-auto">
        <Table striped>
          <TableHead className="">
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>QTY</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Total</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {myCookieValue?.map((product) => (
              <TableRow
                key={product._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <Image
                    src={product?.imageLink}
                    width={150}
                    className="rounded-md"
                    height={150}
                    sizes="(max-width: 100%)"
                    alt="checkout_product_img"
                  />
                  <p className="mt-2 text-[#d19c22]">{product?.name}</p>
                </TableCell>
                <TableCell>{product?.quantity}</TableCell>
                <TableCell>${product?.price}</TableCell>
                <TableCell>${totalPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CheckoutModal;
