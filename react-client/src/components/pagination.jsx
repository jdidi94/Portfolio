import React from "react";
// import photo from "./jdidi.png"
function Pagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="...">
    <ul className="pagination pagination-sm">
   {pageNumbers.map(number=>(

      <li key={number}className="page-item"><a onClick={() =>props.paginate(number)} className="page-link" href="#projectCard">{number}</a></li>
      ))}

    </ul>
  </nav>
  );
}
export default Pagination;
