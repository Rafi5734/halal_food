import React, { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import Link from "next/link";
import userImage from "../../../../public/images/user_image.png";
import { getCookie } from "@/components/helper/cookies";
import { usePostCommentMutation } from "@/api/productSlice/productSlice";
import Swal from "sweetalert2";
const CommentSection = ({ singleProduct }) => {
  const myCookieValue = getCookie("bisuddho_cookies");
  const [postComment] = usePostCommentMutation();
  const [formData, setFormData] = useState({
    text: "",
  });

  if (myCookieValue) {
    var comment = {
      username: JSON.parse(myCookieValue)?.userName,
      text: formData.text,
    };
  }

  

  // console.log("name", myCookieValue);
  const id = singleProduct?._id;

  const handleCommentInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDeleteComment = () => {
    console.log("Delete", singleProduct);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postComment({ comment, id });
      console.log("form submitted", formData);
      if (result.data) {
        Swal.fire({
          title: "Good job!",
          text: "Your feedback has been submitted!",
          icon: "success",
        });
      }
      if (result.error) {
        Swal.fire({
          title: "Oops...",
          text: result.error,
          icon: "error",
        });
      }
    } catch (err) {
      if (err) {
        Swal.fire({
          title: "Oops...",
          text: "User name or phone already existed",
          icon: "error",
        });
      }
    }
    setFormData({
      // username: JSON.parse(myCookieValue)?.userName,
      text: "",
    });
  };

  // Do something with the cookie value
  // console.log(JSON.parse(myCookieValue)?.userName);
  // console.log("singleProduct", singleProduct?._id);
  return (
    <div>
      <section className="bg-white py-8 lg:py-16 antialiased">
        <div className=" mx-auto px-4">
          <div className="flex mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-black">
              Comment (<span>{singleProduct?.reviews?.length}</span>)
            </h2>
          </div>
          <form className="mb-6" onSubmit={handleFormSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleCommentInputChange}
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white bg-black rounded-lg border border-gray-200"
            >
              Post a comment
            </button>
          </form>
          {singleProduct?.reviews?.map((comment, index) => (
            <article key={index} className="p-6 text-base bg-white rounded-lg">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="../../../../public/images/user_image.png"
                      alt="Michael Gough"
                    />
                    {comment?.username}
                  </p>
                  {/* <p className="text-sm text-gray-600">
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Feb. 8, 2022
                    </time>
                  </p> */}
                </div>

                <Dropdown label="Actions" size="sm">
                  <DropdownItem as={Link} href="#">
                    Edit
                  </DropdownItem>
                  <DropdownItem>
                    <button onClick={handleDeleteComment}>Delete</button>
                  </DropdownItem>
                </Dropdown>
              </footer>
              <p className="text-gray-500">{comment?.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommentSection;
