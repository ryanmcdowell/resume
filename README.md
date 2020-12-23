# Resume

My resume website which I created as a side project to learn more about
AngularJS and frontend web-development. This project uses Cloud Build and
Cloud Run to automate deployment of the site.

![site](https://user-images.githubusercontent.com/1460312/103029249-01b6ec00-451f-11eb-9175-14774d38f5ad.png)

## Installation

<pre>
git clone https://github.com/ryanmcdowell/resume.git
npm install
</pre>

## Usage

Start the app for development by executing `grunt serve`. For production environments,
create a distribution with the command `npm run build` and then start the application
using `npm start`.

### Building a New Image

By default the [cloudbuild.yaml](cloudbuild.yaml) will execute on any new tag.
To manually submit a build, you can leverage the `gcloud` CLI. The parameters
for `TAG_NAME` and `SHORT_SHA` must be provided but can be dummy values.

Example:
```sh
gcloud builds submit \
--config=cloudbuild.yaml \
--substitutions=TAG_NAME="1.0",SHORT_SHA="ff32fa0" \
.
```

## License

The MIT License (MIT)
