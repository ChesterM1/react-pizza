import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={477}
    viewBox="0 0 280 477"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="133" cy="131" r="124" /> 
    <rect x="7" y="266" rx="15" ry="15" width="263" height="24" /> 
    <rect x="12" y="312" rx="15" ry="15" width="255" height="69" /> 
    <rect x="16" y="401" rx="15" ry="15" width="85" height="27" /> 
    <rect x="123" y="397" rx="15" ry="15" width="141" height="35" />
  </ContentLoader>
)

export default Skeleton;