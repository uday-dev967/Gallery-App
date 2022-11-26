import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickUpdateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onClickThumbnail = () => {
    onClickUpdateImage(id)
  }
  const activeThumbnailClassName = isActive ? 'active-list-item' : ' '
  return (
    <li className={`list-item ${activeThumbnailClassName}`}>
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
