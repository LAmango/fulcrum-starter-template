import React, { Component } from "react"
import PropTypes from "prop-types"
import { BlogPostTemplate } from "../../templates/blog-post";

class BlogPostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }

  render() {
    const title = this.props.entry.getIn(['data', 'title']);
    const html = this.props.entry.getIn(['data', 'body']);
    const image = this.props.getAsset(this.props.entry.getIn(['data', 'image']));
    const description = this.props.entry.getIn(['data', 'description']);
    const date = this.props.widgetFor('date');
    return (
      <BlogPostTemplate
        title={title}
        html={html}
        image={image}
        description={description}
        date={date}
        next={null}
        previous={null}
        isPreview
      />
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