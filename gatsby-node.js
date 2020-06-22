exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /(menu|main|owlcarousel)/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
