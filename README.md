# Wood Sculpture Portfolio

This is a wood artist's portfolio, displaying a showcase of her artworks that revolve around wood crafting.

# Website

The portfolio is currently hosted @ https://lynnnguyenwood.com.

# Utilized Technologies

**React** (https://reactjs.org/)

- The website was coded with React being the library of choice. All html/javascript/css was coded in Visual Studio Code under the library.

**AWS** (S3, Route53, Certificate Manager, CloudFront) (https://aws.amazon.com/)

- Amazon Web Services was used to host the portfolio, using a number of services under AWS.
  - _S3_: service that holds the production build of the React code (of the portfolio).
  - _Route53_: domain name system service that allows users to connect to the portfolio's hosted domain (e.g., lynnnguyenwood.com).
  - _Certificate Manager_: service that provides the public certificate and enables HTTPS for the portfolio
  - _CloudFront_: content delivery network service that allows the previous S3 object/bucket to utilize Certificate Manager's SSL certficate on the portfolio (by re-routing the S3 bucket to connect to the CloudFront instance (with the CloudFront instance then connecting to Route53, as opposed to connecting the S3 directly to Route53).

**Fancybox** (https://fancyapps.com/docs/ui/fancybox/)

- The picture gallery library was used for out-of-the-box implementation, with tweaks to the css that affects the images and text positioning.

**Material UI** (https://mui.com/)

- Buttons and containers were implemented into the code using its UI tools.

**Formsubmit** (https://formsubmit.co/)

- The contact page utilizes the email service to allow users to send emails to the artist via the embedded form.

**Google Font** (https://fonts.google.com/)

- Font choices were chosen and utilized from the Font library.

**Flaticon** (https://www.flaticon.com/)

- The social media images (Instagram and LinkedIn) were from the library of icons.
