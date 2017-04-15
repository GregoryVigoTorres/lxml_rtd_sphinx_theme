gulp needs to be on $PATH
PATH=$(npm bin):$PATH

gulp build/default
gulp watch
gulp copy_static (fonts and images)

templates are right under lxml_rtd
sass in sass
    sass @imports are under bower_components

.. _Sphinx Read the Docs theme: https://github.com/rtfd/sphinx_rtd_theme/

lxml RTD Sphinx Theme
=====================

This theme is very heavily based on the `Sphinx Read the Docs theme`_.


source files are under _theme
  MY source files are under _theme/lxml_rtd
  External dependencies are in bower_components
build files are under doc/build


There needs to be a watch (sass -watch src dest)
and a build production step

