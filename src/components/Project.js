import { Button, Card, CardImg } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"


function Project({ children, title, image, repo, deplo }) {

  return (

    <Card className="Pink py-2">
      <div className="Pink Light">
        <a href={repo} className="nodecor">
          <center><CardImg className="FillWidth" src={image} /></center>
        </a>
        <br></br>
        <CardHeader className="DarkBlue RoundedLess pt-2 fw-bolder fs-4" >{title}</CardHeader>
        <center><Button href={deplo} className="DarkBlue mt-2" >Deployed Application</Button></center>
      </div>
    </Card>

  )
}

export default Project