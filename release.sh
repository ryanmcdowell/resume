#! /bin/bash

##################################
#
#           Release
#
##################################

# Bumps the version of the application for a new release,
# creates a changelog, and commits the changes with the
# release tag.
printf "Bumping version for next release...\n"
grunt bump-only

# Create the changelog for the most recent release and
# commit the release to source control.
grunt conventionalChangelog
grunt bump-commit
