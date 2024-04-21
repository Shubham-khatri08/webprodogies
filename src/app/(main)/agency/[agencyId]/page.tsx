import React from "react";

const Page = ({
  params,
}: {
  params: { agencyId: string };
  searchParams: { code: string };
}) => {
  return <div>{params.agencyId}</div>;
};

export default Page;
