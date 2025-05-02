"use client";

import { AddProduct } from "./_components/add-product";
import { NavBarAdmin } from "./_components/nav-bar-admin";

const AdminPage = () => { 

  return (
   <div>
     <NavBarAdmin/>
       <AddProduct/>
   </div>
  );
}

export default AdminPage