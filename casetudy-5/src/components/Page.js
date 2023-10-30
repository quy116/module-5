function PageList(page) {
  const { currentPage, totalItem, onPageChange, sizePage } = page;
  const totalPages = Math.ceil(totalItem / sizePage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={currentPage === i ? "on" : ""}
      >
        {i}
      </button>
    );
  }
  return (
    <div>
      <nav
        style={{ marginLeft: "230px", marginTop: "20px" }}
        aria-label="Page navigation example"
      >
        <div className="gap-2 pagination" style={{ marginLeft: "37%" }}>
          {pageNumbers.map((page) => (
            <li className="p-2 bg-purple-400 rounded-sm page-item">{page}</li>
          ))}
        </div>
      </nav>
    </div>
  );
}
export default PageList;
