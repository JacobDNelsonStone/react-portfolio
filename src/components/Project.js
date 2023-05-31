import { Card, CardImg } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"


function Project({ children, title, image, repo, deplo }) {

  return (

    <Card className="Pink">
      <div className="Pink">
        <a href={repo} className="nodecor">
          <CardImg className="FillWidth pt-2" src={image} />
        </a>
        <CardHeader>{title}</CardHeader>
        <p>{children}</p>

        <a href={deplo} />
      </div>
    </Card>

  )
}

export default Project