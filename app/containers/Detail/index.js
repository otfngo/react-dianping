import React from 'react'
import { connect } from 'react-redux'
import { getDetailInfo, getComments } from '../../actions/detail'
import Header from '../../components/Header'
import DetailInfo from '../../components/DetailInfo'
import Comment from './subpage/Comment'

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getDetailInfo(id)
        this.props.getComments(id)
    }

    goBack() {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <Header title="商户详情" goBack={this.goBack}></Header>
                <DetailInfo data={this.props.detail ? this.props.detail : ''} />
                <Comment data={this.props.comments ? this.props.comments : ''} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        detail: state.detailinfo.info,
        comments: state.detailinfo.comments
    }
}

function mapDispatchToProps(dispatch, ownPorps) {
    return {
        getDetailInfo: (id) => {
            dispatch(getDetailInfo(id))
        },
        getComments: (id) => {
            dispatch(getComments(id))
        }
    }
}

Detail = connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)

export default Detail