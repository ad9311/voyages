import React from 'react';
import { PaginatorProps } from '../defs';
import ReactPaginate from 'react-paginate';

function Paginator(props: PaginatorProps) {
  return (
    <>
      {props.pagesCount > 1 && (
        <div className={props.className}>
          <div className="w-fit mx-auto text-[1.1rem]">
            <ReactPaginate
              className="flex items-center"
              breakLabel="..."
              pageClassName=""
              activeLinkClassName=""
              previousClassName=""
              nextClassName=""
              nextLabel=">"
              previousLabel="<"
              onPageChange={props.onPageChange}
              pageRangeDisplayed={2}
              pageCount={props.pagesCount}
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Paginator;
