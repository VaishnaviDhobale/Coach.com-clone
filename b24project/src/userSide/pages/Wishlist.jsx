import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import {getWishlistData } from "../../redux/wishlist/actions"
import { useDispatch, useSelector } from "react-redux"


const Wishlist = () => {
const {wishlistData} = useSelector((store)=> store.wishlistReducer)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getWishlistData)
},[]);
console.log(wishlistData)
    return <Box>

    </Box>
}

export default Wishlist