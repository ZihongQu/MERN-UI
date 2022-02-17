import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {Pagination, PaginationItem} from '@material-ui/lab';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import { getPost } from "../../actions/posts";

const Paginate = ({page}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {totalPageNumber} = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPost(page))
    }, [page])

    return (
        <Pagination
            classes={{ul: classes.ul}}
            count={totalPageNumber}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${Number(item.page)}`}></PaginationItem>
            )}
        >
        </Pagination>
    )
}
export default Paginate;