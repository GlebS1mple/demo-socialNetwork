import React, { useState } from "react";
import s from "../Paginator/Paginator.module.css";
import cn from "classnames";



let Paginator = ({ totalCount, pageCount, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalCount / pageCount);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={s.block}>
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber).map((page) => {
                return <button className={cn({ [s.selectedpage]: currentPage === page }, s.page)}
                    key={page} onClick={(e) => { onPageChanged(page); }}>{page} </button>
            })
            }
            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>)
}
/*<button className={currentPage === page ? s.selectedpage : s.page}
                onClick={() => { onPageChanged(page) }}>{page}</button>*/


export default Paginator;


