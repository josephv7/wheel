import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Dropdown, Avatar } from "neetoui";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, CONTACTS } from "./constants";
import { renderColumnData } from "./utils";

const Table = ({ setIsDeleteAlertOpen, contacts = [] }) => {
  const [pageNo, setPageNo] = useState(DEFAULT_PAGE_INDEX);
  let columnData = renderColumnData();

  columnData = [
    {
      title: "Name & Role",
      dataIndex: "name",
      key: "name",
      render: name => (
        <div className="flex flex-row items-center">
          <Avatar user={{ name: name }} size="small" className="mr-2" />
          {name}
        </div>
      ),
    },
    ...columnData.slice(1),
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div onClick={e => e.stopPropagation()}>
          <Dropdown
            buttonStyle="text"
            buttonProps={{ size: "large" }}
            position="bottom-end"
            icon={MenuHorizontal}
            strategy="fixed"
          >
            <li>Edit</li>
            <li onClick={() => setIsDeleteAlertOpen(true)}>Delete</li>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <NeetoUITable
      rowData={CONTACTS}
      columnData={columnData}
      defaultPageSize={DEFAULT_PAGE_SIZE}
      currentPageNumber={pageNo}
      handlePageChange={page => setPageNo(page)}
      totalCount={contacts.length}
      allowRowClick={true}
      pagination={true}
    />
  );
};

export default Table;
