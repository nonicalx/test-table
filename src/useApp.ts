import { useState } from "react";

export const useApp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const count = 0;
  const data: any = [
    {
      "Name of Distributor": "John okafor",
      Email: "shedinhoshedrach@gmail.com",
      "Name of Goods": "Iphone 100",
      "Total purchase": 5000,
      Amount: "N 300,000",
      "Date & Time": "2, 06, 2022, 10:00PM",
      Status: "Completed",
    },
    {
      "Name of Distributor": "James okafor",
      Email: "shedinhoshedrach@gmail.com",
      "Name of Goods": "Iphone 100",
      "Total purchase": 5000,
      Amount: "N 300,000",
      "Date & Time": "2, 06, 2022, 10:00PM",
      Status: "Incomplete",
    },
  ];

  return {
    data,
    currentPage,
    setCurrentPage,
    count,
  };
};
