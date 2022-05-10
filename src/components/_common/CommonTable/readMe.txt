 const column = [
    {
      title: "Account",
      key: "account",
      render: (item, data) => {
        return (
          <span className={styles2.coinWrapper}>
            <img src={item.image} />
            <div>{item.name}</div>
          </span>
        );
      },
    },
    {
      title: "First Name",
      key: "firstName",
    },
    {
      title: "Last Name",
      key: "lastName",
    },
    {
      title: "Type",
      key: "type",
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Status",
      key: "status",
    },
    {
      title: "Request Date",
      key: "requestDate",
    },
    {
      title: "",
      key: "_id",
      render: (data) => {
        return (
          <span className={styles2.coinWrapper}>
            <img
              src={"/assets/Icon-eye.svg"}
              onClick={() => {
                getId(data);
              }}
            />
          </span>
        );
      },
    },
  ];






................................................

          <CommonTable
            heading=""
            maxHeight={"410px"}
            data={kyc}
            column={column}
            className={styles.commanTable}
          />
.............................................................

Pagination: import Pagination from "react-js-pagination";


 <Pagination
            activePage={currentPage}
            itemsCountPerPage={3}
            totalItemsCount={kyc.length}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
            activeClass="activeClass"
            innerClass="innerClass"
            itemClass="itemClass"
            hideFirstLastPages={true}
          />

..........................................................................

import this class on App.css for change styling.



.innerClass {
  justify-content: center;
  width: 100%;
  column-gap: 10px;
  display: flex;
  margin: 0px auto;
  list-style-type: none;
  padding: 20px 0px;
  margin-right: 0px;
}
.itemClass {
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  background: #1a1b16;
  filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.16));
  cursor: pointer;
}
.activeClass {
  background-color: #e48d0f;
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.....................................................................



  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


..................................................................

  const [currentPage, setCurrentPage] = useState(1);
















