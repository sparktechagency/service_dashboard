/* eslint-disable prefer-const */
import React, { useState } from "react";
import ServerErrorCard from "../card/ServerErrorCard";
import ListLoading from "../loader/ListLoading";
import { useGetContactListQuery } from "../../redux/features/contact/contactApi";
import TransactionTable from "./TransactionTable";

const TransactionList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, isError } = useGetContactListQuery([
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize },
  ]);


  const contacts = data?.data?.result || [];
  const meta = data?.data?.meta || {};

  let content: React.ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }

  if (!isLoading && !isError) {
    content = (
      <div className="flex-1 overflow-hidden">
        <TransactionTable
          contacts={contacts}
          meta={meta}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <ServerErrorCard />;
  }

  return (
    <>
      <div className="p-4 flex justify-between">
        <h1 className="text-xl font-medium text-gray-800">
          Transaction List
        </h1>
        <div className="flex items-center pr-12">
          <h1 className="text-lg">
            Total: <span className="font-bold"> {meta?.total} </span>
          </h1>
        </div>
      </div>
      {content}
    </>
  );
};

export default TransactionList;
