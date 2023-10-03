import React, { useState } from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import nodataimage from '../assets/images/nodata.jfif'
const DataTable = ({ data, onListingSelect }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'imageUrl',
        Cell: ({ value }) => <img src={value} alt="Property" width="50" />
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Address',
        accessor: 'address'
      },
      {
        Header: 'Beds',
        accessor: 'beds'
      },
      {
        Header: 'Baths',
        accessor: 'bath'
      },
      {
        Header: 'Area (sqft)',
        accessor: 'AreaSQFT'
      },
      {
        Header: 'Property Type',
        accessor: 'propertyType'
      },
      {
        Header: 'Commercial',
        accessor: 'isCommercial',
        Cell: ({ value }) => (value ? 'Yes' : 'No')
      },
      {
        Header: 'Price',
        accessor: 'price'
      }
    ],
    []
  );

  const [filterInput, setFilterInput] = useState("");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const handleRowClick = (id) => {
    onListingSelect(id);
  }

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("title", value);
    setFilterInput(value);
  };

  return (
    <>
      
  <div className='searchField'>
  <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search by title"}
      />
  </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' <> ' : ' >< ') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row.original.id)}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {
          !rows.length && (
            <div className='noDataFound'>
              <img src={nodataimage} alt='no data'/>
              <p>No data found!</p>
            </div>
          )
        }
      <div className='pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span className='pageNumber'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DataTable;
