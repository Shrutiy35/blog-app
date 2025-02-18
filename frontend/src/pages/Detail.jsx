// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Detail() {
//   const { id } = useParams();
//   const [blogs, setblogs] = useState({});
//   console.log(blogs);
//   useEffect(() => {
//     const fetchblogs = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:4001/api/blogs/single-blog/${id}`,

//           {
//             withCredentials: true,
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log(data);
//         setblogs(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchblogs();
//   }, [id]);
//   return (
//     <div>
//       <div>
//         {blogs && (
//           <section className="container mx-auto p-4">
//             <div className="text-blue-500 uppercase text-xs font-bold mb-4">
//               {blogs?.category}
//             </div>
//             <h1 className="text-4xl font-bold mb-6">{blogs?.title}</h1>
//             <div className="flex items-center mb-6">
//               <img
//                 src={blogs?.adminPhoto}
//                 alt="author_avatar"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <p className="text-lg font-semibold">{blogs?.adminName}</p>
//             </div>

//             <div className="flex flex-col md:flex-row">
//               {blogs?.blogImage && (
//                 <img
//                   src={blogs?.blogImage?.url}
//                   alt="mainblogsImg"
//                   className="md:w-1/2 w-full h-[500px] mb-6 rounded-lg shadow-lg cursor-pointer border"
//                 />
//               )}
//               <div className="md:w-1/2 w-full md:pl-6">
//                 <p className="text-lg mb-6">{blogs?.about}</p>
//                 {/* Add more content here if needed */}
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Detail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/api/blogs/single-blog/${id}`,
          {
            withCredentials: true, // Include credentials (cookies) in the request
          }
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        // Optionally, you can set an error state to display an error message in the UI
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading....
      </div>
    );
  }

  return (
    <div className="container mx-auto my-12 p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <div className="h-full">
            {" "}
            {/* Set a fixed height for the wrapper div */}
            <img
              src={blog.blogImage.url}
              alt={blog.title}
              className="w-full h-full object-cover" // Use h-full to fill the wrapper
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <div className="flex items-center mb-4">
            <img
              src={blog.adminPhoto}
              alt={blog.adminName}
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-3 text-gray-600">{blog.adminName}</p>
          </div>
          <p className="text-lg mb-4">{blog.about}</p>
          <p className="text-sm text-gray-500">Category: {blog.category}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
