# charm-access

http://charm-app.s3-website-ap-southeast-2.amazonaws.com/

This is a re-usable Ecommerce Application built using React, React-Hooks, Redux, ExpressJS and Mongo DB.

The Express JS REST API is run on two AWS Lambda functions, one of which is for the private routes (Vendor) and the other for the public routes (Shop). These are triggered using two API Gateways configured as a proxy, which pass all the REST requests to each of the Lambda functions which then route to MongoDB using the Express JS router.

Authentication is required to access the private routes and also for uploading images. This is done using the AWS Cognito service.

The React App itself is hosted on a S3 bucket configured as a static website.

The styling of the App was based on the [Niche](https://gpsites.co/niche/) template of [Generate Press](https://generatepress.com/). The photos of the model are from the photographer/model [Alena Ozerova](https://www.instagram.com/taknebivaet/).

The three diagrams below describe the AWS configuation for the App.


#### Shop API Schematic Diagram

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/Schematic/AWS-schematic-shop.png)





#### Vendor API Schematic Diagram 

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/Schematic/AWS-schematic-vendor.png)





#### Image Upload API Schematic Diagram


![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/Schematic/AWS-schematic-upload.png)

### Screenshots of App

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/home.png)

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/products.png)

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/product.png)

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/edit-products.png)

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/edit-product.png)

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/edit-categories.png)

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/reset.png)

### Screenshot of Mobile App

![alt text](https://github.com/mmackenzie-syd/charm-access/blob/main/screenshots/gray/home-mobile.png)
