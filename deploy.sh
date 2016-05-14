#! /bin/bash

##################################
#
#           BUILD
#
##################################

# Build the dist folder of the project
grunt build

# Stop execution on failure.
if [[ "$?" != 0 ]]
then
    exit 1
fi


##################################
#
#     EXECUTE DEPLOYMENT
#
##################################

PROJECT_ID=resume-1270
VERSION=`cat package.json | python -c 'import json,sys;obj=json.load(sys.stdin);print obj["version"];' | tr -d '.'`

printf "\n\n"
printf "Deploying version release-$VERSION of gcloud project $PROJECT_ID\n\n"

# Invoke the deployment.
gcloud preview app deploy --project $PROJECT_ID --version release-$VERSION

# Stop execution on failure.
if [[ "$?" != 0 ]]
then
    exit 1
fi




##################################
#
#        BUMP VERSION
#
##################################

# Create the changelog for the most recent release and
# commit the release to source control.
grunt conventionalChangelog
grunt bump-commit

# Bump the version for the next release.
printf "Bumping version for next release...\n"
grunt bump-only







