// import React, { useState } from "react";
// import { useAuth } from "../context/AuthProvider";
// import Sidebar from "../dashboard/Sidebar";
// import MyProfile from "../dashboard/MyProfile";
// import MyBlogs from "../dashboard/MyBlogs";
// import CreateBlog from "../dashboard/CreateBlog";
// import UpdateBlog from "../dashboard/UpdateBlog";
// import { Navigate } from "react-router-dom";
// function Dashboard() {
//   const { profile, isAuthenticated } = useAuth();
//   const [component, setComponent] = useState("My Blogs");
//   console.log(profile);
//   console.log(isAuthenticated);

//   if (!isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }
//   return (
//     <div>
//       <div>
//         <Sidebar component={component} setComponent={setComponent} />
//         {component === "My Profile" ? (
//           <MyProfile />
//         ) : component === "Create Blog" ? (
//           <CreateBlog />
//         ) : component === "Update Blog" ? (
//           <UpdateBlog />
//         ) : (
//           <MyBlogs />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();

  const [component, setComponent] = useState("My Profile"); // Default to My Profile

  // Automatically set the component to "My Profile" if the user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setComponent("My Profile");
    }
  }, [isAuthenticated]);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex">
      <Sidebar component={component} setComponent={setComponent} />
      <div className="flex-grow p-4">
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Update Blog" ? (
          <UpdateBlog />
        ) : (
          <MyBlogs />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
