import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

function Paginator(props: ReactPaginateProps) {
  return (
    <>
      {props.pageCount > 1 && (
        <div className={props.className}>
          <div className="w-fit mx-auto text-[1.1rem] px-10 py-1.5 border bg-neutral-50 hover:bg-neutral-100  rounded-md">
            <ReactPaginate
              className="flex items-center text-xl"
              breakLabel="..."
              pageClassName="text-primary-dark hover:text-secondary hover:underline font-bold px-1"
              activeLinkClassName="text-secondary underline"
              previousClassName="pr-5 text-primary-dark hover:text-secondary font-bold text-2xl"
              nextClassName="pl-5 text-primary-dark hover:text-secondary font-bold text-2xl"
              nextLabel=">"
              previousLabel="<"
              onPageChange={props.onPageChange}
              pageRangeDisplayed={2}
              pageCount={props.pageCount}
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Paginator;
