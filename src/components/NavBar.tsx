import { getCount } from "../features/cart/cartSelectors";
import { CartIcon } from "../icons";

import {useSelector} from "react-redux";

const NavBar:React.FC = () => {

    // GET AMOUNT
    const amount = useSelector(getCount);

    return (
       <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon />

                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
       </nav>
    )
}

export default NavBar;
