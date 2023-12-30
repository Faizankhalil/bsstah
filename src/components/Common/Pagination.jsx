import React,{useState}from 'react'
import {Pagination,PaginationItem,PaginationLink} from "reactstrap"
import { map } from "lodash";
import { useDispatch } from "react-redux";

const CustomPagination = ({arrayCount,getNewReord}) => {
    const dispatch = useDispatch();
    const totalPageCount = Math.ceil(arrayCount/10);
    const [page, setPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [totalPage, setTotalPage] = useState(totalPageCount)
    const handlePageClick = page => {
      console.log(page,"pagenumber")
        if(page > 1){
            const newOffset = (page-1) * 10;
            console.log(newOffset,"newOffset")
            dispatch(getNewReord(10,newOffset))
        }else{
            dispatch(getNewReord(10,0))
        }
      
       setPage(page)
      }
  return (
    <div className='mt-4 me-3 float-end'>
         <Pagination
                 aria-label="Page navigation example"
                 size="lg"
                >
                 <PaginationItem disabled={page === 1}>
                    <PaginationLink 
                        href="#"
                        previous
                        onClick={() => handlePageClick(page - 1)}
                        >
                        Previous
                    </PaginationLink>
                </PaginationItem>
                {map(Array(totalPage), (item, i) => (
                      <PaginationItem active={i + 1 === page} key={i}>
                        <PaginationLink
                          onClick={() => handlePageClick(i + 1)}
                          href="#"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
               
                <PaginationItem disabled={page === totalPage}>
                    <PaginationLink
                        href="#"
                        next
                        onClick={() => handlePageClick(page + 1)}
                        >
                        Next
                    </PaginationLink>
                </PaginationItem>
  
        </Pagination>
    </div>

  )
}

export default CustomPagination