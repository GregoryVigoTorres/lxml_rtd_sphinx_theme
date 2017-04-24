---
layout: defawlt
---

lxml RTD Sphinx Theme
---------------------

This is a Sphinx theme for the lxml docs that's ***very heavily*** based on the [Sphinx Read the Docs theme](https://github.com/rtfd/sphinx_rtd_theme/).
The *raison d'être* of all this is that the current system for building the [lxml](http://lxml.de/) docs, in my opinion, seems sort of esoteric and wanting improvement. But, because the current docs use ReStructuredText and doc strings, it's pretty easy to make everything work with [Sphinx](http://www.sphinx-doc.org/en/stable/) and in the process automatically get fun things like an index.
The main difference between the Read the Docs theme and this one is that this one uses [gulp](http://gulpjs.com/) instead of grunt. Besides that, the differences are mostly cosmetic.


However this theme, and the whole endeavor of porting the lxml docs to Sphinx, is still very much a work in progress and I'm aware there are broken links and many other issues.
I'm mostly putting this on github to see if there's any interest in overhauling the lxml website and docs.


If you want to build the lxml docs with this theme you'll need to use [my lxml fork](https://github.com/GregoryVigoTorres/lxml) and you should be able to install this package and run `make html` in the docs directory.


If you want to build this theme you'll need the whole node + [gulp](http://gulpjs.com/) setup. You can then run `gulp get-deps` to download the dependencies and then run `gulp` to build everything. There's also a `gulp watch` command if you're making changes. You can then run `setup.py` to build and install the Python package.

