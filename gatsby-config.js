/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [      
      {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
              fonts: [
                  `poppins:300,400,500,600,700`       
              ], display: 'swap'       
          }
      },
      {
        resolve: `gatsby-plugin-gdpr-cookies`,
        options: {
          googleAnalytics: {
            trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID', // leave empty if you want to disable the tracker
            cookieName: 'gatsby-gdpr-google-analytics', // default
            anonymize: true, // default
            allowAdFeatures: false // default
          },
          googleTagManager: {
            trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
            cookieName: 'gatsby-gdpr-google-tagmanager', // default
            dataLayerName: 'dataLayer', // default
          },
          facebookPixel: {
            pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
            cookieName: 'gatsby-gdpr-facebook-pixel', // default
          },
          // defines the environments where the tracking should be available  - default is ["production"]
          environments: ['production', 'development']
        },
      },
  ]
}
