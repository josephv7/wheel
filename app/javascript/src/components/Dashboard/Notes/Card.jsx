import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip, Dropdown } from "neetoui";

const Card = ({ title, description, setIsDeleteAlertOpen }) => (
  <div className="w-full space-y-3 rounded-md border border-gray-200 p-4">
    <div>
      <div className="flex justify-between">
        <Typography style="h4">{title}</Typography>
        <Dropdown
          buttonStyle="icon"
          icon={() => <MenuVertical size={20} />}
          position="bottom-end"
        >
          <li>Edit</li>
          <li onClick={() => setIsDeleteAlertOpen(true)}>Delete</li>
        </Dropdown>
      </div>
      <Typography style="body2">{description}</Typography>
    </div>

    <div className="border border-t border-gray-100" />

    <div className="flex justify-between">
      <Tag label="Getting Started" />
      <div className="flex flex-row items-center space-x-1">
        <Clock size={15} />
        <Tooltip
          position="bottom"
          content="Wednesday, 10:30AM"
          hideAfter={3000}
        >
          <Typography style="body3">Drafted 2 hours ago</Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            name: "Oliver Smith",
          }}
        />
      </div>
    </div>
  </div>
);

export default Card;
