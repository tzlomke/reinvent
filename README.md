# Re:invent

When it comes to strong idea building within an organization, often excellent ideas are brought out by the people who work day to day with whatever aspect of the workplace is being discussed. However, it can be difficult to bring those ideas to the people who need to hear them. It is possible that the ideas is blocked by a single individual, or forgotten due to heavy workload. Not only does this decrease good ideas from being implemented, but it can also leave employees and collaborators feeling unappreciated and unheard. **Re:invent** seeks to remedy the situation by giving an open platform for idea discussion and maturation. Not only does it give employees a voice, but it gives employers the tools with which to hear that voice.

## Getting Started

Cloning and forking with git are easy. To clone, head over to [reinvent-io](https://github.com/tzlomke/reinvent) and navigate using the clone or download button. Copy the link, and perform 
`git clone {copied link}`.

### Prerequisites

In order to run this application, you will need to install [node.js](https://nodejs.org/en/) if you have not yet done so.

For any development, work with your favorite code editor, or try out [VS Code](https://code.visualstudio.com/download).

You will need an Amazon S3 bucket. This handy [guide](https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html) will help you get setup. This will be required for profile picture storage.

Install [MongoDB](https://www.mongodb.com/download-center/community) for all other data you need to store. Here's a quick [tutorial](https://code.msdn.microsoft.com/Mongo-Database-setup-on-6963f46f) on how to download mongodb, and add a path variable for mongod.

While the CLI for mongodb is quite good, you may find it helpful to run a mongodb GUI like [Robo3T](https://robomongo.org/).

### Installing

Setting up your local development environment should be painless. Begin by running

`npm i`

You will need a `.env` file to perform any local testing/development since the app utilizes both bcrypt for password encryption, and S3 bucket for image storage.

Create your new `.env` file, and add to it the following data:

```
SECRET={Add your secret here that will be used during your password encryption/decription}
S3_BUCKET={Your S3 bucket name}
S3_ACCESS_KEY_ID={Your S3 Access Key ID}
S3_SECRET_ACCESS_KEY={Your S3 Access Key ID}
```

Open the cmd prompt (or, this developer likes git bash), and run `mongod`. This will spin up the database connection for mongodb.

Now, open another cli, navigate to the root of your project, and run:

`npm start`

This starts both your react and node servers simultaneously. Once both servers have spun up, your default browser should fire, and you should see a working version of **Re:invent**.

## Deployment

One of the great aspects of create-react-app is that it allows for incredibly easy deployment to heroku. Simply push to heroku, and create-react-app's scripts take care of everything else!

## Built With

* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)

Additional npm utilized:
* [react-event-calendar](https://www.npmjs.com/package/react-event-calendar)
* [mongoose](https://mongoosejs.com/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## Contributing

Contributing is currently locked and by invite only.

## Versioning

All versioning is controlled through GitHub

## Authors

All authors contributed to front end styling, and general front-end support. Additional duties include:

* **Daniel Louis** - *Resources, vote, and calendar components full stack* - [funkedee](https://github.com/funkedee)

* **Akop Karapetyan** - *News-feed full stack, awesome button/link component, seed file, and general DB creation* - [Jack87](https://github.com/Jack87)

* **Taylor Zlomke** - *All security-related protocol, Amazon Web Services S3 integration, splash page, general design and UI, profile page full stack* - [tzlomke](https://github.com/tzlomke)

* **Andy Marshall** - *Navigation, and front end styling* - [andrew-marshall1](https://github.com/andrew-marshall1)

* **Brant Keener** - *Ideas/discussion linking, 404 handling, general DB creation* - [funkedee](https://github.com/funkedee)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to all of the instructors and TAs at the [University of Denver Coding Bootcamp](https://bootcamp.du.edu/coding/)
