import React from 'react'
import './style.less'

class LoadMore extends React.Component {
    constructor(props) {
        super(props)
        this.loadMore = this.loadMore.bind(this)
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMore
        const wrapper = this.loadMoreWrapper
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoading) return
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false)
    }

    loadMore() {
        this.props.loadMore()
    }

    render() {
        return (
            <div className="load-more" ref={wrapper => this.loadMoreWrapper = wrapper}>
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMore}>加载更多</span>
                }
            </div>
        )
    }

}

export default LoadMore