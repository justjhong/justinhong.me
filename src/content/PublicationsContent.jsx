import React from "react"
import styled from "@emotion/styled-base"

const PublicationItem = styled("div")`
  padding: 0 1em 1em 0;
`

const PublicationsContent = () => (
  <>
    <PublicationItem>
      <b>
        AMICI: Attention Mechanism Interpretation of Cell-cell Interactions
      </b>
      <br />
      <b>Justin Hong*</b>, Khushi Desai*, Tu Duyen Nguyen, Achille Nazaret, Nathan Levy,
      Can Ergen, George Plitas, and Elham Azizi.
      <br />
      <i>bioRxiv</i> (2025), pp. 2025–09.{" "}
      <a href="https://www.biorxiv.org/content/10.1101/2025.09.15.613176v1">
        [URL]
      </a>
      .
    </PublicationItem>

    <PublicationItem>
      <b>
        Domain-Invariant Feature Learning for Patient-Level Phenotype Prediction from Single-Cell Data
      </b>
      <br />
      Mathias Perez*, <b>Justin Hong*</b>, Aaron Zweig, and Elham Azizi.
      <br />
      <i>AI for Science workshop, NeurIPS 2025</i> (2025).{" "}
      <a href="https://openreview.net/forum?id=VSmvfJ4Dhz">
        [URL]
      </a>
      .
    </PublicationItem>

    <PublicationItem>
      <b>
        Deep generative modeling of sample-level heterogeneity in single-cell genomics
      </b>
      <br />
      Pierre Boyeau*, <b>Justin Hong*</b>, Adam Gayoso, Martin Kim, José L McFaline-Figueroa,
      Michael I Jordan, Elham Azizi, Can Ergen, and Nir Yosef.
      <br />
      <i>Nature Methods</i> (2025).{" "}
      <a href="https://www.nature.com/articles/s41592-025-02808-x">
        [URL]
      </a>
      .
    </PublicationItem>

   <PublicationItem>
      <b>
        The CausalBench challenge: A machine learning contest for gene network inference from single-cell perturbation data
      </b>
      <br />
      Mathieu Chevalley, ..., <b>Justin Hong</b>, ..., and Patrick Schwab.
      <br />
      <i>Fourth Conference on Causal Learning and Reasoning (CLeaR 2025)</i> (2025).{" "}
      <a href="https://openreview.net/forum?id=nwUHLgKXBv">
        [URL]
      </a>
      .
    </PublicationItem>

    <PublicationItem>
      <b>
        Mapping multimodal phenotypes to perturbations in cells and tissue with CRISPRmap
      </b>
      <br />
      Jiacheng Gu, ..., <b>Justin Hong</b>, ..., and Jellert T Gaublomme.
      <br />
      <i>Nature Biotechnology</i> (2024).{" "}
      <a href="https://www.nature.com/articles/s41587-024-02386-x">
        [URL]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>Stable Differentiable Causal Discovery</b>
      <br />
      Achille Nazaret*, <b>Justin Hong*</b>, Elham Azizi, and David Blei.
      <br />
      <i>
        Proceedings of the 41st International Conference on Machine Learning
        (ICML)
      </i>{" "}
      (2024). <a href="https://proceedings.mlr.press/v235/nazaret24a.html">[URL]</a>.
    </PublicationItem>
    <PublicationItem>
      <b>
        A heterogeneous pharmaco-transcriptomic landscape induced by targeting a
        single oncogenic kinase
      </b>
      <br />
      Ross M Giglio, ..., <b>Justin Hong</b>, ..., and Jose L McFaline-Figueroa.
      <br />
      <i>bioRxiv</i> (2024).{" "}
      <a href="https://www.biorxiv.org/content/10.1101/2024.04.08.587960v2">
        [URL]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>
        BetterBoost-Inference of Gene Regulatory Networks with Perturbation Data
      </b>
      <br />
      Achille Nazaret and <b>Justin Hong</b>.
      <br />
      <i>
        GSK.ai CausalBench Challenge, Machine Learning for Drug Discovery (MLDD)
        Workshop at ICLR, 1st Place Prize, Oral Presentation
      </i>{" "}
      (2023). <a href="https://openreview.net/forum?id=gpDOOAOmMe">[URL]</a>.
    </PublicationItem>
    <PublicationItem>
      <b>
        Deep generative modeling of transcriptional dynamics for RNA velocity
        analysis in single cells
      </b>
      <br />
      Adam Gayoso, ..., <b>Justin Hong</b>, ..., and Nir Yosef.
      <br />
      <i>Nature Methods</i> (2023).{" "}
      <a href="https://www.nature.com/articles/s41592-023-01994-w">[URL]</a>.
    </PublicationItem>
    <PublicationItem>
      <b>
        Deep generative modeling for quantifying sample-level heterogeneity in
        single-cell omics
      </b>
      <br />
      Pierre Boyeau*, <b>Justin Hong*</b>, Adam Gayoso, Michael Jordan, Elham
      Azizi, and Nir Yosef.
      <br />
      <i>
        Machine Learning in Computational Biology (MLCB), Oral Presentation
      </i>{" "}
      (2022). <a href="https://doi.org/10.1101/2022.10.04.510898">[URL]</a>.
    </PublicationItem>
    <PublicationItem>
      <b>A Python library for probabilistic analysis of single-cell omics</b>
      <br />
      Adam Gayoso*, Romain Lopez*, Galen Xing*, ..., <b>Justin Hong</b>, ...,
      and Nir Yosef.
      <br />
      <i>Nature Biotechnology</i> (2022).{" "}
      <a href="https://doi.org/10.1038/s41587-021-01206-w">[URL]</a>.
    </PublicationItem>
    <PublicationItem>
      <b>
        Likelihood-based deconvolution of bulk gene expression data using
        single-cell references
      </b>
      <br />
      Dan D. Erdmann-Pham*, Jonathan Fischer*, <b>Justin Hong</b>, and Yun S.
      Song.
      <br />
      <i>Genome Research</i> (2021).{" "}
      <a href="https://genome.cshlp.org/content/31/10/1794.full.pdf+html">
        [URL]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>
        A Likelihood-based Deconvolution of Bulk Gene Expression Data Using
        Single-cell References
      </b>
      <br />
      <b>Justin Hong</b>, Dan D. Erdmann-Pham, Jonathan Fischer, and Yun S.
      Song.
      <br />
      <i>Master’s Thesis</i>. University of California, Berkeley, 2021.{" "}
      <a href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2021/EECS-2021-21.pdf">
        [URL]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>Robust Federated Learning in a Heterogeneous Environment</b>
      <br />
      Avishek Ghosh*, <b>Justin Hong</b>*, Dong Yin, and Kannan Ramchandran.
      <br />
      <i>ICML Workshop on Privacy and Security in ML</i> (2019)
      <a href="https://arxiv.org/abs/1906.06629">[URL]</a>.
    </PublicationItem>
  </>
)

export default PublicationsContent
