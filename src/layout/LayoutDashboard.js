import Author from "../components/author/Author";
import Sidebar from "modules/Sidebar";
import SidebarDashboard from "modules/SidebarDashboard";
import SidebarDetail from "modules/SidebarDetail";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Logo from "components/other/Logo";
const LayoutDashboardStyle = styled.div`
  .header-dashboard {
    position: sticky;
    position: -webkit-sticky;
    top: 0; /* required */
    z-index: 100; /* position: relative; */
    background-color: #1a161f;
  }
  .header-detail,
  .sidebar-detail {
    display: none;
  }
  .layout-main-detail {
    display: grid;
    grid-template-columns: 180px minmax(0, 1fr);
    column-gap: 50px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout-main-detail {
      grid-template-columns: 180px 1fr;
      column-gap: 10px;
    }
  }
  @media screen and (max-width: 767.98px) {
    .header-dashboard {
      display: none;
    }
    .sidebar-detail {
      display: block;
    }
    .header-detail {
      position: relative;
      display: grid;
    }
    .layout-main-detail {
      grid-template-columns: 1fr;
    }
  }
`;
const LayoutDashboard = () => {
  return (
    <LayoutDashboardStyle>
      <Header page="home" className=" header-detail"></Header>
      <div className="flex justify-between header-dashboard">
        <Logo className={"w-[180px] my-10"}></Logo>
        <div className="flex items-center justify-end gap-x-5">
          <Author></Author>
        </div>
      </div>
      <div className="layout-main-detail">
        <SidebarDashboard></SidebarDashboard>
        <Sidebar className="sidebar-detail"></Sidebar>
        <div className="layout-children">
          <Outlet></Outlet>
        </div>
      </div>
    </LayoutDashboardStyle>
  );
};

export default LayoutDashboard;
