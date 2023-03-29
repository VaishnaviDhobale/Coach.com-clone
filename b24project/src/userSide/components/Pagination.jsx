import {Box, Button, Text} from "@chakra-ui/react"
import Buttons from "./Button"

const Pagination = ({totalData}) => {
    let buttonArray = Array(Math.ceil(totalData/12)).fill(0)
    return <Box>
       {
        buttonArray.map((el,index)=>{
            return <Buttons>{index+1}</Buttons>
        })
       }
    </Box>
}

export default Pagination