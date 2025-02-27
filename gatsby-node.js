/**
 * Gatsby Node API implementation
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// Create redirects
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  // Redirect /workout to the deployed workout tracker app
  createRedirect({
    fromPath: "/workout",
    toPath:
      "https://ai-workout-tracker-justjhong-justjhongs-projects.vercel.app",
    redirectInBrowser: true,
    isPermanent: true,
    force: true,
  })
}
