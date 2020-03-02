import React, { Component } from "react"
import PropTypes from "prop-types"

class BlogPostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }

  _getImage = () => {
    const image = this.props.entry.getIn(['data', 'image'])
    if(image) {
      this.props.getAsset(image).then(value => {
        this.setState({image: value.toString()})
      })
    }
  }

  render() {
    const title = this.props.entry.getIn(['data', 'title']);
    const body = this.props.widgetFor('body');
    this._getImage();
    return (
      <div>
          <div>{title}</div>
          <div dangerouslySetInnerHTML={{ __html: body}} />
          <img src={this.state.image} alt="blog post image" />
      </div>
    )
  }
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func
};

export default BlogPostPreview