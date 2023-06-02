import React from 'react'
import { Container, Row } from "react-bootstrap"
import { DocViewer, DocViewerRenderers } from "react-doc-viewer";

function Resume() {
  const docs = [{ uri: require("../jacobnelsonstoneresume.pdf") }];

  return (
    <Container>
      <Row>
        <h1>Hi</h1>
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs[0]} />
        <p>my resume</p>
      </Row>
    </Container>
  )
}

export default Resume