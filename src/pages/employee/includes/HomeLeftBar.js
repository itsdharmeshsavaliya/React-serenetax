import React from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import { RiDropFill } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

function HomeLeftBar({ menuType, sidebarActive }) {
  const menuJson = [
    {
      key: [
        "schedule",
        "documents",
        "taxPreparation",
        "payment",
        "clientReview",
        "eFiling",
      ],
      value: "All",
      icon: <FaPuzzlePiece />,
    },
    {
      key: [
        "schedule",
        "documents",
        "taxPreparation",
        "payment",
        "clientReview",
        "eFiling",
      ],
      value: "Messages",
      icon: <RiDropFill />,
    },
    {
      key: [
        "schedule",
        "documents",
        "taxPreparation",
        "payment",
        "clientReview",
        "eFiling",
      ],
      value: "New File",
      icon: <FaCopy />,
    },
    {
      key: ["schedule", "taxPreparation", "payment", "clientReview", "eFiling"],
      value: "Pending",
      icon: <AiOutlinePieChart />,
    },
    {
      key: [
        "schedule",
        "documents",
        "taxPreparation",
        "payment",
        "clientReview",
        "eFiling",
      ],
      value: "Callback",
      icon: <BsWallet2 />,
    },
    {
      key: [
        "schedule",
        "documents",
        "taxPreparation",
        "payment",
        "clientReview",
        "eFiling",
      ],
      value: "Call India",
      icon: <FaLocationArrow />,
    },
    { key: ["schedule"], value: "Resolve" },
    { key: ["schedule"], value: "Referral Clients" },
    { key: ["documents"], value: "Docs Received" },
    { key: ["documents"], value: "Docs Pending" },
    { key: ["documents"], value: "Add Docs Pending" },
    { key: ["documents"], value: "Add Docs Received " },
    {
      key: [
        "schedule",
        "documents",
        "taxPreparation",
        "payment",
        "clientReview",
      ],
      value: "Voice Mail",
    },
    {
      key: [
        "schedule",
        "documents",
        "taxPreparation",
        "clientReview",
        "payment",
      ],
      value: "Not Interested",
    },
    {
      key: ["payment", "clientReview", "eFiling"],
      value: "Extensions",
    },
    { key: ["payment", "clientReview"], value: "Amendment" },
    {
      key: ["payment", "clientReview", "eFiling"],
      value: "Notice",
    },
    // { key: ["documents"], value: "Notice Resolved" },
    // { key: ["documents"], value: "Extensions" },
    { key: ["schedule"], value: "New Registration" },
    { key: ["schedule"], value: "Wrong Number" },
    { key: ["schedule"], value: "E-Mail Incorrect" },
    { key: ["schedule"], value: "USA Citizens" },
    { key: ["schedule"], value: "Do Not Disturb" },
    { key: ["schedule"], value: "Filing Not Eligible" },
    { key: ["taxPreparation"], value: "Documents pending" },
    { key: ["taxPreparation"], value: "Documents Received" },
    { key: ["taxPreparation"], value: "Review" },
    { key: ["taxPreparation"], value: "Review Pending" },
    { key: ["taxPreparation"], value: "Review Done" },
    { key: ["taxPreparation"], value: "Revised Task Summary" },
    { key: ["taxPreparation", "payment", "schedule"], value: "ITIN" },
    { key: ["payment", "clientReview"], value: "Payment Pending" },
    { key: ["payment", "clientReview"], value: "Payment Received" },
    { key: ["clientReview"], value: "8879 Pending" },
    { key: ["clientReview"], value: "correction required" },
    { key: ["clientReview"], value: "accepted" },
    { key: ["clientReview"], value: "certification pending" },
    { key: ["clientReview"], value: "certification completed" },
    // { key: ["clientReview"], value: "certification pending" },
    { key: ["eFiling"], value: "E-file pending" },
    { key: ["eFiling"], value: "E-file completed" },
    { key: ["eFiling"], value: "E-file accepted" },
    { key: ["eFiling"], value: "E-file rejected" },
    { key: ["eFiling"], value: "NR pending" },
    { key: ["eFiling"], value: "NR completed" },
    { key: ["eFiling"], value: "NR accepted" },
    { key: ["eFiling"], value: "NR rejected" },
    { key: ["eFiling"], value: "ITIN Pending" },
    { key: ["eFiling"], value: "ITIN received" },
    { key: ["eFiling"], value: "ITIN completed" },
    { key: ["eFiling"], value: "state filing pending" },
    { key: ["eFiling"], value: "notice resolved" },
    { key: ["eFiling"], value: "FBAR/FATCA" },
  ];
  return (
    <ul className="list-group sidebarList">
      {menuJson &&
        menuJson.map((menuItem, index) => {
          const item = menuItem;
          if (menuItem.key.find((key) => key === menuType)) {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center "
              >
                <span
                  className={
                    sidebarActive
                      ? " liIcon sideBarIconCloseV2"
                      : "liIcon sideBarIconOpenV2"
                  }
                >
                  {item.icon}
                </span>
                <a
                  href="#/"
                  className={
                    sidebarActive ? "sideBarAnchorClose" : "sideBarAnchorOpen"
                  }
                >
                  {item.value}
                </a>
                <span
                  className={
                    sidebarActive
                      ? "badge badge-secondary badge-pill sideBarSpanClose"
                      : "badge badge-secondary badge-pill sideBarSpanOpen"
                  }
                >
                  {" "}
                  0{" "}
                </span>
              </li>
            );
          }
          return "";
        })}
    </ul>
  );
}

export default HomeLeftBar;
