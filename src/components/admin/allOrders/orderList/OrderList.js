"use client";
import {
  useDeleteCheckoutMutation,
  useGetAllCheckoutQuery,
} from "@/api/checkoutSlice/checkoutSlice";
import Loader from "@/styles/Loader/Loader";
import {
  Button,
  DatePicker,
  Select,
  SelectItem,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import FilterIcon from "../../../../../public/icons/FilterIcon";
import DownloadIcon from "../../../../../public/icons/DownloadIcon";
import * as XLSX from "xlsx";
import { useUpdateProductStatusMutation } from "@/api/productSlice/orderSlice/orderSlice";

const OrderList = () => {
  const { data: checkoutData, isLoading } = useGetAllCheckoutQuery();
  const [deleteCheckout] = useDeleteCheckoutMutation();
  const [updateProductStatus] = useUpdateProductStatusMutation();

  const [value, setValue] = useState(null);

  // Convert selected date to "DD/MM/YYYY" format
  const selectedDate = value
    ? `${String(value.day).padStart(2, "0")}/${String(value.month).padStart(
        2,
        "0"
      )}/${value.year}`
    : null;

  // Filter checkout data by selected date using orderTime
  const filteredCheckoutData = checkoutData?.filter((product) => {
    const orderDate = new Date(product.orderTime).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return selectedDate ? orderDate === selectedDate : true;
  });

  const handleDeleteProduct = async (productId) => {
    const result = await deleteCheckout({ productId });

    if (result?.data) {
      Swal.fire({
        title: "Product Deleted successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Product not Deleted!",
        icon: "error",
      });
    }
  };

  const handleUpdateStatus = async (productId, status) => {
    const updatedProductStatusData = {
      status: status,
    };
    try {
      const result = await updateProductStatus({
        updatedProductStatusData,
        productId,
      });
      console.log("result", result);
      if (result?.data) {
        Swal.fire({
          title: "Success",
          text: "Product status updated!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Product status not updated!",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err,
        icon: "error",
      });
    }
    console.log("status", updatedProductStatusData);
    console.log("Id", productId);
  };

  const handleDownload = () => {
    // console.log("filteredCheckoutData", filteredCheckoutData);
    const formattedData = filteredCheckoutData?.flatMap((customer) =>
      customer?.order?.map((item) => ({
        OrderID: customer._id,
        CustomerName: customer.fullName,
        Phone: customer.phoneNumber,
        Address: customer.address,
        District: customer.district,
        Division: customer.division,
        Zilla: customer.zilla,
        ProductName: item.name,
        Category: item.category,
        Price: item.price,
        Discount: item.discount,
        Discounted_Price: item.price - (item.price * item.discount) / 100, // Corrected calculation
        Quantity: item.productQuantity,
        Total_Price:
          (item.price - (item.price * item.discount) / 100) *
          item.productQuantity, // Corrected
        Size: item.size.replace(/"/g, ""),
        Color: JSON.parse(item.color).title,
        ColorImage: `=HYPERLINK("${JSON.parse(item.color).url}", "View Image")`, // Clickable link
        OrderDate: new Date(customer?.orderTime).toLocaleDateString("en-GB"),
        OrderStatus: item.status,
      }))
    );

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Order");

    XLSX.writeFile(workbook, "Orders_Data.xlsx");
  };

  return (
    <div className="">
      <div className="relative overflow-x-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-row">
              <DatePicker
                className="max-w-[284px] mb-8 mt-5"
                label="Filter with date"
                value={value}
                onChange={setValue}
              />
              <Tooltip content="Download filtered data">
                <Button
                  onClick={handleDownload}
                  variant="faded"
                  isIconOnly
                  className="mb-8 mt-5 ms-3"
                  size="lg"
                >
                  <DownloadIcon />
                </Button>
              </Tooltip>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Person Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount (%)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCheckoutData
                  ?.map((product) => (
                    <>
                      {product?.order?.map((order, index) => (
                        <tr
                          key={order?._id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <td className="p-4">
                            <Image
                              src={JSON.parse(order?.color)?.url}
                              className="w-16 md:w-32 max-w-full max-h-full rounded"
                              alt="Product Image"
                              width={100}
                              height={100}
                            />
                            <p className="mt-3 font-bold">{order?.name}</p>
                            <p className="mt-3 font-bold">
                              Color: {JSON.parse(order?.color)?.title}
                            </p>
                          </td>
                          {index === 0 && (
                            <td
                              className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                              rowSpan={product.order.length}
                            >
                              <p>{product?.fullName}</p>
                            </td>
                          )}
                          <td className="font-bold">
                            {JSON.parse(order?.color)?.title}
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {JSON.parse(order?.productQuantity)}
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {JSON.parse(order?.size)}
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-nowrap">
                            {order?.price} TK
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {order?.discount}%
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {Number(
                              order?.price -
                                (order?.price * order?.discount) / 100
                            ) * Number(JSON.parse(order?.productQuantity))}{" "}
                            TK
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {new Date(product?.orderTime).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </td>

                          {index === 0 && (
                            <td
                              className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                              rowSpan={product.order.length}
                            >
                              <p>
                                Addres details:{" "}
                                <span className="font-extralight">
                                  {product?.division}; {product?.district};{" "}
                                  {product?.zilla}; {product?.address}
                                </span>
                              </p>
                              <p>
                                Phone Number:{" "}
                                <span className="font-extralight">
                                  {product?.phoneNumber}
                                </span>
                              </p>
                            </td>
                          )}

                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-nowrap">
                            <Select
                              className="w-32"
                              // label="Change status"
                              aria-label={product?.status}
                              placeholder="Select a status"
                              defaultSelectedKeys={[product?.status]}
                              selectedKeys={[product?.status]}
                              variant="bordered"
                            >
                              <SelectItem
                                key="pending"
                                onClick={() =>
                                  handleUpdateStatus(product?._id, "pending")
                                }
                              >
                                pending
                              </SelectItem>
                              <SelectItem
                                onClick={() =>
                                  handleUpdateStatus(product?._id, "shipping")
                                }
                                key="shipping"
                              >
                                shipping
                              </SelectItem>
                              {/* <SelectItem key="delivered">delivered</SelectItem> */}
                            </Select>
                          </td>
                          {index === 0 && (
                            <td
                              className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                              rowSpan={product.order.length}
                            >
                              <button
                                onClick={() =>
                                  handleDeleteProduct(product?._id)
                                }
                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </>
                  ))
                  ?.reverse()}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderList;
