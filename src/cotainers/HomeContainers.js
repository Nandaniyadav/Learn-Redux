import { connect } from 'react-redux';
import Home from "../Redux/Home";
import {addToCart} from '../services/actions/Action'

const mapStateToProps = state =>{

}

const mapDispatchTOProps= dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchTOProps)(Home)

//export default Home;