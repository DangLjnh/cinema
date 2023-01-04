import Button from "components/button/Button";
import CategoriesTable from "components/table/CategoriesTable";
import ManageTitle from "components/title/ManageTitle";
import { UserContext } from "contexts/UserProvider";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userRole } from "utils/constant";

const ManageCategoriesPage = () => {
  const navigate = useNavigate();
  const [currentUser] = useContext(UserContext);
  if (currentUser.role !== userRole.admin) {
    return (
      <ManageTitle title="You don't have access to this page!!!"></ManageTitle>
    );
  }
  return (
    <div>
      <div className="flex items-start justify-between">
        <ManageTitle
          title="Manage categories"
          desc="Here you can manage your category."
        ></ManageTitle>
        <Button
          className={"text-white h-[48px]"}
          onClick={() => {
            navigate("/manage/categories/create-category");
          }}
        >
          Create category
        </Button>
      </div>
      <div className="mb-10">
        <CategoriesTable></CategoriesTable>
      </div>
    </div>
  );
};

export default ManageCategoriesPage;
