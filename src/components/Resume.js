import { Button, Container, Row } from "react-bootstrap"
import pdf from '../files/843F6127-6EB2-45EC-B015-63DDD6F643F3.pdf'
import FadeIn from "./FadeIn";

function Resume() {
  // const docs = [{ uri: require("../jacobnelsonstoneresume.pdf") }];

  function handleButtonClick() {
    fetch(pdf)
      .then(response => response.blob())
      .then(resume => {
        const fileURL = window.URL.createObjectURL(resume);
        console.log(fileURL)
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'JacobNelsonStoneResume.pdf';
        alink.click();
      })
  }


  return (
    <FadeIn>
      <Container className="col-xl-10 Blue Rounded py-5 px-5" style={{ color: 'black' }}>
        <Row>
          <h1 className="fs-1 DarkBlue Light py-2 RoundedLess">Resume</h1>
          <p className="fs-5 Pink RoundedLess Light py-2"><center>Click the button below to download my resume!</center>
            <br />
            I pride myself on my skills and my intellect, and I believe I can solve any problem that's thrown my way. I'm tenacious, and believe that where there's a will, there's a way.
            <br />
            I also take pride in my critical thinking abilities. I love the construct of computational reasoning and believe that even the largest tasks can be broken down into managable sub tasks.
          </p>
          <center>
            <div className="pt-3">
              <Button className="ActiveLink DarkBlue vw-25 fs-3 py-2" onClick={handleButtonClick}>My Resume</Button>
            </div>
          </center>
        </Row>
      </Container>
    </FadeIn>
  )
}

export default Resume;