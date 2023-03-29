import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useSearchParams} from "react-router-dom"

const Sidebar = ({ getMethod }) => {
  const [searchParams,setSearchParams] = useSearchParams();

  // Taking initialData here 
  const initialData = searchParams.getAll("category")
  const initialOrder = searchParams.get("_order")

// Taking hooks 
  const [filterData, setFilterData] = useState(initialData || []);
  const [order, setOrder] = useState(initialOrder || "")

  // Accessing store 
  const dispatch = useDispatch();
  const { isError, isLoading, sidebarData } = useSelector((store) => store.womensReducer);

  useEffect(() => {
    dispatch(getMethod);
    let paramsObj = {
      "category": filterData
    }
    if(order!==""){
      paramsObj["_sort"] = "price";
      paramsObj["_order"] = order
    }
    setSearchParams(paramsObj)
  }, [filterData,order]);


  // Here selecting unique data 
  const categoryArr = [...new Set(sidebarData.map((item) => item.category))];

  //Filter logic
  const handleCheckboxs = (e) => {
    let changeData = [...filterData];
    let { value } = e.target;
    if (changeData.includes(value)) {
      changeData = changeData.filter((el) => {
        return el !== value;
      });
      setFilterData(changeData);
    } else {
      changeData.push(value);
      setFilterData(changeData);
    }
  };

  
  // Sorting Logic 
  const handleSorting = (e) => {
    setOrder(e.target.value)
  }

  // CSS parts 
  const filterStyle = {
    display: "flex",
    gap: "10px",
    width: "150px",
  };

  const inputStyle = {
    width: "17px",
  };

  //Conditional Rendering
  if (isLoading) {
    return;
  } else if (isError) {
    return;
  }
  return (
    <Box
      paddingLeft="30px"
      paddingRight="5px"
      position={"fixed"}
      top="0px"
      left="0px"
    >
      <Box
        borderBottom="1px solid #e1dada"
        paddingBottom={"20px"}
        textAlign="left"
      >
        <Text fontWeight="600" marginBottom={"10px"} fontSize="20px">
          Filter By Category
        </Text>

        {categoryArr.map((el) => {
          return (
            <Box key={el.id} margin={"auto"}>
              <Box style={filterStyle}>
                <input
                  type="checkbox"
                  value={el}
                  style={inputStyle}
                  onChange={handleCheckboxs}
                  checked = {filterData.includes(el)}
                />
                <label
                  htmlFor=""
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {el}
                </label>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Jsx for Sorting  */}
      <Box paddingBottom={"20px"} textAlign="left">
        <Text fontWeight="600" marginBottom={"10px"} fontSize="20px">
          Sort by price
        </Text>
        <Box onChange={handleSorting}>
        <Box style={filterStyle}>
          <input type="radio" name="sort" value = "asc" style={inputStyle} defaultChecked = {order==="asc"} />
          <label htmlFor="">Low To High</label>
        </Box>

        <Box style={filterStyle}>
          <input type="radio" name="sort" value = "desc" style={inputStyle}defaultChecked = {order === "desc"} />
          <label htmlFor="">High To Low</label>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
