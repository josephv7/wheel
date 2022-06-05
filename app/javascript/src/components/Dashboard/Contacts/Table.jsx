import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Dropdown } from "neetoui";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, CONTACTS } from "./constants";
import { renderColumnData } from "./utils";

const Table = ({
  // setSelectedContactIds,
  setIsDeleteAlertOpen,
  contacts = [],
}) => {
  const [pageNo, setPageNo] = useState(DEFAULT_PAGE_INDEX);

  const columnData = renderColumnData();

  columnData.push({
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
  });

  return (
    <NeetoUITable
      rowData={CONTACTS}
      columnData={columnData}
      defaultPageSize={DEFAULT_PAGE_SIZE}
      currentPageNumber={pageNo}
      handlePageChange={page => setPageNo(page)}
      totalCount={contacts.length}
      // onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      // onRowClick={(_, note) => {
      //   setSelectedContact(note);
      // }}

      // fixedHeight
      //   onRowClick={handleRowClick}
      //   onRowSelect={handleCheckboxClick}
      //   selectedRowKeys={map(({ id }) => id, selectedViews)}

      allowRowClick={true}
    />
  );
};

export default Table;
