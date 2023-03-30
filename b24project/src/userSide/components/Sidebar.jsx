import {
  Box,
  Button,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { MdDehaze } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Context } from "../../ContextApi/CommanContext";

const Sidebar = ({ getMethod }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchParams, setSearchParams] = useSearchParams();
  // Acsessing contextApi for update page on clickon clear All button
  let { handlePagination } = useContext(Context);

  // Taking initialData here
  const initialData = searchParams.getAll("category");
  const initialOrder = searchParams.get("_order");

  // Taking hooks
  let [filterData, setFilterData] = useState(initialData || []);
  const [order, setOrder] = useState(initialOrder || "");

  // Accessing store
  const dispatch = useDispatch();
  const { isError, isLoading, sidebarData } = useSelector(
    (store) => store.womensReducer
  );

  // Preparing params object here to pass correact params
  let paramsObj = {
    category: filterData,
  };

  useEffect(() => {
    dispatch(getMethod);
    if (order !== "") {
      paramsObj["_sort"] = "price";
      paramsObj["_order"] = order;
    }
    setSearchParams(paramsObj);
  }, [filterData, order]);

  //Selecting unique data
  const categoryArr = [...new Set(sidebarData.map((item) => item.category))];

  //Filter logic
  const handleCheckboxs = (e) => {
    handlePagination(1);
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
    setOrder(e.target.value);
  };

  //Clear filter logic
  const handleClear = () => {
    setFilterData([]);
    setOrder("");
    handlePagination(1);
  };

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
    <Box>
      {/* This Box for menu icon  */}
      <Box
        display={{
          base: "block",
          lg: "none",
        }}
        onClick={onOpen}
      >
        <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
          <MdDehaze style={{ margin: "20px", marginLeft: "0px" }} />
        </IconContext.Provider>
      </Box>

      {/* This is sidebar  */}
      <Box
        paddingLeft="30px"
        paddingRight="5px"
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "block",
        }}
        position={{
          base: "",
          sm: "",
          md: "",
          lg: "fixed",
        }}
        top="80px"
        left="0px"
        borderRight="1px solid gray"
        pr="30px"
        h={"600px"}
      >
        <Box
          borderBottom="1px solid #e1dada"
          paddingBottom={"20px"}
          textAlign="left"
        >
          <Box textAlign={"right"} mb="20px">
            <Button onClick={handleClear}>Clear All</Button>
          </Box>
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
                    checked={filterData.includes(el)}
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
              <input
                type="radio"
                name="sort"
                value="asc"
                style={inputStyle}
                defaultChecked={order === "asc"}
              />
              <label htmlFor="">Low To High</label>
            </Box>

            <Box style={filterStyle}>
              <input
                type="radio"
                name="sort"
                value="desc"
                style={inputStyle}
                defaultChecked={order === "desc"}
              />
              <label htmlFor="">High To Low</label>
            </Box>
          </Box>
        </Box>

        {/* Drawer for renposive sidebar */}
        <Box>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton onClick={onClose} />
              <DrawerHeader>Filters & Sorting</DrawerHeader>
              <DrawerBody>
                <Box textAlign={"left"} mb="20px">
                  <Button onClick={handleClear}>Clear All</Button>
                </Box>
                <Box>
                  {categoryArr.map((el) => {
                    return (
                      <Box key={el.id} margin={"auto"}>
                        <Box style={filterStyle}>
                          <input
                            type="checkbox"
                            value={el}
                            style={inputStyle}
                            onChange={handleCheckboxs}
                            checked={filterData.includes(el)}
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
                <Box paddingBottom={"20px"} textAlign="left">
                  <Text fontWeight="600" marginBottom={"10px"} fontSize="20px">
                    Sort by price
                  </Text>
                  <Box onChange={handleSorting}>
                    <Box style={filterStyle}>
                      <input
                        type="radio"
                        name="sort"
                        value="asc"
                        style={inputStyle}
                        defaultChecked={order === "asc"}
                      />
                      <label htmlFor="">Low To High</label>
                    </Box>

                    <Box style={filterStyle}>
                      <input
                        type="radio"
                        name="sort"
                        value="desc"
                        style={inputStyle}
                        defaultChecked={order === "desc"}
                      />
                      <label htmlFor="">High To Low</label>
                    </Box>
                  </Box>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
