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

const CheckoutModal = ({ checkoutFormData, productQuantity }) => {
  // console.log(checkoutFormData);
  // console.log("product quantity", productQuantity);
  return (
    <div className="">
      <div className="overflow-x-auto">
        <Table striped>
          <TableHead className="">
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>QTY</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Sub Total</TableHeadCell>
            <TableHeadCell>Total</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Image
                  src={checkoutFormData?.order?.imageLink}
                  width={150}
                  className="rounded-md"
                  height={150}
                  sizes="(max-width: 100%)"
                  alt="checkout_product_img"
                />
                <p className="mt-2 text-[#d19c22]">
                  {checkoutFormData?.order?.name}
                </p>
              </TableCell>
              <TableCell>{checkoutFormData?.product_quantity}</TableCell>
              <TableCell>${checkoutFormData?.order?.price}</TableCell>
              <TableCell>
                $
                {checkoutFormData?.product_quantity *
                  checkoutFormData?.order?.price}
              </TableCell>
              <TableCell>${checkoutFormData?.totalPrice}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CheckoutModal;
