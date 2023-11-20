import React from "react"
import Layout from "../components/layout"
import resume from ".//resume.pdf"
const ResumePage = () => (
  <Layout>
<iframe src={resume} style={{border: '0', alignItems:"center", width: "70%", height: "600px", overflow:"hidden"}} title="resume" width="100%" height="500%"></iframe>
</Layout>
)
export default ResumePage