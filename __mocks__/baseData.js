const baseData = {
  site: {
    siteMetadata: {
      author: "Site Author",
      description: "Site description",
      title: "Site Title",
    },
  },
  placeholderImage: {
    childImageSharp: {
      fluid: {
        src: "icon.png",
        srcSet: "icon.png 50w, icon.png 100w",
        sizes: "(max-width: 200px) 100vw, 200px",
        base64: "data:image/png;base64,iVBORw0KG",
        aspectRatio: 1,
      },
    },
  },
}

export default baseData
