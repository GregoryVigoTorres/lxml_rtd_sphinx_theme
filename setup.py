from setuptools import setup

setup(
    name='lxml_rtd_sphinx_theme',
    version='0.1.0',
    license='MIT',
    author='lxml community, Gregory Vigo Torres, Dave Snider',
    packages=['lxml_rtd_sphinx_theme'],
    package_data={'lxml_rtd_sphinx_theme':[
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/fonts/*.*'
    ]},
    include_package_data=True,
    classifiers=[
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
    entry_points={
        'sphinx_themes': [
            'path = lxml_rtd_sphinx_theme:get_html_theme_path'
        ]
    },
)
