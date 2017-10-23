import React from 'react'
import './style.less'

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.changeHandle = this.changeHandle.bind(this)
        this.keyupHandle = this.keyupHandle.bind(this)
        this.state = { value: '' }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }

    changeHandle(event) {
        this.setState({
            value: event.target.value
        })
    }

    keyupHandle(event) {
        if (event.keyCode !== 13) return
        this.props.search(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入搜索内容"
                onChange={this.changeHandle}
                onKeyUp={this.keyupHandle}
                value={this.state.value}
            />
        )
    }
}

export default SearchInput
