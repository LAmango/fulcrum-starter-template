import React, { Component } from "react"
import PropTypes from "prop-types"
import BlogPostTemplate from "../../src/templates/BlogPostTemplate"

class BlogPostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    }
  }

  _getImage = async image => {
    const value = await this.props.getAsset(image);
    this.setState({image: value.toString()})
  }

  componentDidMount() {
    const image = this.props.entry.getIn(['data', 'image'])
    this._getImage(image);
  }

  render() {
    const title = this.props.entry.getIn(['data', 'title']);
    const { widgetFor } = this.props;
    return (
      <div>
          <BlogPostTemplate
            title={title}
            image={this.state.image}
            content={widgetFor('body')}
          />
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
