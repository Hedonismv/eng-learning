import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators from "../redux/actions/userActions";
import * as ProjectActionCreators from "../redux/actions/projectActions";

const allActions = {
    ...UserActionCreators,
    ...ProjectActionCreators
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}