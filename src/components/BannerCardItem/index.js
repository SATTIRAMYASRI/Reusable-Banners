// Write your code here.
import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <div className="bg-container">
      <div className={className}>
        <div className="textContainer">
          <h1 className="headingEl">{headerText}</h1>
          <p className="paraEl">{description}</p>
          <button className="buttonEl">Show More</button>
        </div>
      </div>
    </div>
  )
}
export default Banner
