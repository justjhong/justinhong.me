import React from "react"
import styled from "@emotion/styled-base"

const PublicationItem = styled("div")`
  padding: 0 1em 1em 0;
`

const PublicationsContent = () => (
  <>
    <PublicationItem>
      <b>
        scvi-tools: a library for deep probabilistic analysis of single-cell
        omics data*
      </b>
      <br />
      Adam Gayoso*, Romain Lopez*, Galen Xing*, Pierre Boyeau, Katherine Wu,
      Michael Jayasuriya, Edouard Mehlman, Maxime Langevin, Yining Liu, Jules
      Samaran, Gabriel Misrachi, Achille Nazaret, Oscar Clivio, Chenling Xu, Tal
      Ashuach, Mohammad Lotfollahi, Valentine Svensson, Eduardo da Veiga
      Beltrame, Carlos Talavera-Lopez, Lior Pachter, Fabian J Theis, Aaron
      Streets, Michael I Jordan, Jeffrey Regier, and Nir Yosef.
      <br />
      <i>bioRxiv</i>(2021).{" "}
      <a href="https://www.biorxiv.org/content/early/2021/04/29/2021.04.28.441833">
        [PDF]
      </a>
      .<br />
      <br />
      *(In-press at <i>Nature Biotechnology</i>.{" "}
      <b>Co-authorship added to journal submission</b>.)
    </PublicationItem>
    <PublicationItem>
      <b>
        Likelihood-based deconvolution of bulk gene expression data using
        single-cell references
      </b>
      <br />
      Dan D Erdmann-Pham*, Jonathan Fischer*, <b>Hong, Justin</b>, and Yun S
      Song.
      <br />
      <i>Genome Research</i> 31.10 (2021), pp. 1794–1806.{" "}
      <a href="https://genome.cshlp.org/content/31/10/1794.full.pdf+html">
        [PDF]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>
        A Likelihood-based Deconvolution of Bulk Gene Expression Data Using
        Single-cell References
      </b>
      <br />
      <b>Hong, Justin</b>, Dan D Erdmann-Pham, Jonathan Fischer, and Yun S Song.
      <br />
      <i>Master’s Thesis</i>. University of California, Berkeley, 2021.{" "}
      <a href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2021/EECS-2021-21.pdf">
        [PDF]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>Robust Federated Learning in a Heterogeneous Environment</b>
      <br />
      Avishek Ghosh*, <b>Justin Hong</b>*, Dong Yin, and Kannan Ramchandran.
      <br />
      <i>arXiv</i>(2019) (Presented at{" "}
      <i>ICML Workshop on Privacy and Security in ML</i>, 2019).{" "}
      <a href="https://arxiv.org/abs/1906.06629">[PDF]</a>.
    </PublicationItem>
  </>
)

export default PublicationsContent
