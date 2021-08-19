import * as React from "react"
import LayoutHome from "../components/layout-home"
import { withPrefix, Link } from "gatsby"
import Helmet from "react-helmet"


const IndexPage = () => {
return (
<LayoutHome>
  <Helmet>
    <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>
    </LayoutHome>
  )
}

export default IndexPage